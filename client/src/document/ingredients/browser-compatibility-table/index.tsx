import React, { useReducer } from "react";
import { useLocation } from "react-router-dom";
import type bcd from "@mdn/browser-compat-data/types";
import { BrowserInfoContext } from "./browser-info";
import { BrowserCompatibilityErrorBoundary } from "./error-boundary";
import { FeatureRow } from "./feature-row";
import { Headers, PLATFORM_BROWSERS } from "./headers";
import { Legend } from "./legend";
import { listFeatures } from "./utils";

// Note! Don't import any SCSS here inside *this* component.
// It's done in the component that lazy-loads this component.

// This string is used to prefill the body when clicking to file a new BCD
// issue over on github.com/mdn/browser-compat-data
const NEW_ISSUE_TEMPLATE = `
<!-- Tips: where applicable, specify browser name, browser version, and mobile operating system version -->

#### What information was incorrect, unhelpful, or incomplete?

#### What did you expect to see?

#### Did you test this? If so, how?


<!-- Do not make changes below this line -->
<details>
<summary>page report details</summary>

* Query: \`$QUERY_ID\`
* MDN URL: https://technobureau.com$PATHNAME
* Report started: $DATE

</details>
`;

/**
 * Return a list of platforms and browsers that are relevant for this category &
 * data.
 *
 * If the category is "webextensions", only those are shown. In all other cases
 * at least the entirety of the "desktop" and "mobile" platforms are shown. If
 * the category is JavaScript, the entirety of the "server" category is also
 * shown. In all other categories, if compat data has info about Deno / Node.js
 * those are also shown. Deno is always shown if Node.js is shown.
 */
function gatherPlatformsAndBrowsers(
  category: string,
  data: bcd.Identifier
): [string[], bcd.BrowserNames[]] {
  const hasNodeJSData = data.__compat && "nodejs" in data.__compat.support;
  const hasDenoData = data.__compat && "deno" in data.__compat.support;

  let platforms = ["desktop", "mobile"];
  if (category === "javascript" || hasNodeJSData || hasDenoData) {
    platforms.push("server");
  } else if (category === "webextensions") {
    platforms = ["webextensions-desktop", "webextensions-mobile"];
  }

  const browsers = new Set(
    platforms.map((platform) => PLATFORM_BROWSERS[platform] || []).flat()
  );

  // If there is no Node.js data for a category outside of "javascript", don't
  // show it. It ended up in the browser list because there is data for Deno.
  if (category !== "javascript" && !hasNodeJSData) {
    browsers.delete("nodejs");
  }

  return [platforms, [...browsers]];
}

type CellIndex = [number, number];

function FeatureListAccordion({
  features,
  browsers,
  locale,
}: {
  features: ReturnType<typeof listFeatures>;
  browsers: bcd.BrowserNames[];
  locale: string;
}) {
  const [[activeRow, activeColumn], dispatchCellToggle] = useReducer<
    React.Reducer<CellIndex | [null, null], CellIndex>
  >(
    ([activeRow, activeColumn], [row, column]) =>
      activeRow === row && activeColumn === column
        ? [null, null]
        : [row, column],
    [null, null]
  );

  return (
    <>
      {features.map((feature, i) => (
        <FeatureRow
          key={i}
          {...{ feature, browsers }}
          index={i}
          activeCell={activeRow === i ? activeColumn : null}
          onToggleCell={([row, column]: [number, number]) => {
            dispatchCellToggle([row, column]);
          }}
          locale={locale}
        />
      ))}
    </>
  );
}

export default function BrowserCompatibilityTable({
  query,
  data,
  browsers: browserInfo,
  locale,
}: {
  query: string;
  data: bcd.Identifier;
  browsers: bcd.Browsers;
  locale: string;
}) {
  const location = useLocation();

  if (!data || !Object.keys(data).length) {
    throw new Error(
      "BrowserCompatibilityTable component called with empty data"
    );
  }

  const breadcrumbs = query.split(".");
  const category = breadcrumbs[0];
  const name = breadcrumbs[breadcrumbs.length - 1];

  const [platforms, browsers] = gatherPlatformsAndBrowsers(category, data);

  function getNewIssueURL() {
    const url = "https://github.com/mdn/browser-compat-data/issues/new";
    const sp = new URLSearchParams();
    const body = NEW_ISSUE_TEMPLATE.replace(/\$PATHNAME/g, location.pathname)
      .replace(/\$DATE/g, new Date().toISOString())
      .replace(/\$QUERY_ID/g, query)
      .trim();
    sp.set("body", body);
    sp.set("title", `${query} - <PUT TITLE HERE>`);
    return `${url}?${sp.toString()}`;
  }

  return (
    <BrowserCompatibilityErrorBoundary>
      <BrowserInfoContext.Provider value={browserInfo}>
        <a
          className="bc-github-link external external-icon"
          href={getNewIssueURL()}
          target="_blank"
          rel="noopener noreferrer"
          title="Report an issue with this compatibility data"
        >
          Report problems with this compatibility data on GitHub
        </a>
        <div className="table-scroll">
          <div className="table-scroll-inner">
            <table key="bc-table" className="bc-table bc-table-web">
              <Headers {...{ platforms, browsers }} />
              <tbody>
                <FeatureListAccordion
                  browsers={browsers}
                  features={listFeatures(data, "", name)}
                  locale={locale}
                />
              </tbody>
            </table>
          </div>
        </div>
        <Legend compat={data} name={name} />

        {/* https://github.com/mdn/yari/issues/1191 */}
        <div className="hidden">
          The compatibility table on this page is generated from structured
          data. If you'd like to contribute to the data, please check out{" "}
          <a href="https://github.com/mdn/browser-compat-data">
            https://github.com/mdn/browser-compat-data
          </a>{" "}
          and send us a pull request.
        </div>
      </BrowserInfoContext.Provider>
    </BrowserCompatibilityErrorBoundary>
  );
}
