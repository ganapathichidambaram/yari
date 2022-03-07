import "./index.scss";
import { HomepageHero } from "./homepage-hero";
import { useLocale } from "../hooks";

export function Homepage(props) {
  const locale = useLocale();
  return (
    <main id="content" role="main">
      <div className="homepage mdn-ui-body-m">
        <HomepageHero />
        <div className="featured-articles">
          <h2 className="mdn-ui-emphasis-l">Featured Articles</h2>
          <div className="tile-container">
            <div className="article-tile">
              <a href={`/${locale}/docs/Learn/HTML`} className="tile-tag">
                HTML
              </a>
              <a
                href={`/${locale}/docs/Learn/HTML/Introduction_to_HTML/`}
                className="tile-title expand-this-link"
              >
                Introduction to HTML
              </a>
              <p>
                At its heart, HTML is a fairly simple language made up of
                elements, which can be applied to pieces of text to give them
                different meaning in a document (Is it a paragraph? Is it a
                bulleted list? Is it part of a table?), structure a document
                into logical sections (Does it have a header? Three columns of
                content? A navigation menu?), and embed content such as images
                and videos into a page. This module will introduce the first two
                of these and introduce fundamental concepts and syntax you need
                to know to understand HTML.
              </p>
            </div>

            <div className="article-tile">
              <a href={`/${locale}/docs/Learn/CSS`} className="tile-tag">
                CSS
              </a>
              <a
                href={`/${locale}/docs/Learn/CSS/First_steps/`}
                className="tile-title expand-this-link"
              >
                CSS first steps
              </a>
              <p>
                CSS (Cascading Style Sheets) is used to style and lay out web
                pages — for example, to alter the font, color, size, and spacing
                of your content, split it into multiple columns, or add
                animations and other decorative features.
                <br /> This module provides a gentle beginning to your path
                towards CSS mastery with the basics of how it works, what the
                syntax looks like, and how you can start using it to add styling
                to HTML.
              </p>
            </div>

            <div className="article-tile">
              <a href={`/${locale}/docs/Learn/JavaScript`} className="tile-tag">
                Web APIs
              </a>
              <a
                href={`/${locale}/docs/Learn/JavaScript/First_steps`}
                className="tile-title expand-this-link"
              >
                JavaScript First Steps
              </a>
              <p>
                In our first JavaScript module, we first answer some fundamental
                questions such as "what is JavaScript?", "what does it look
                like?", and "what can it do?", before moving on to taking you
                through your first practical experience of writing JavaScript.
                After that, we discuss some key building blocks in detail, such
                as variables, strings, numbers and arrays.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
