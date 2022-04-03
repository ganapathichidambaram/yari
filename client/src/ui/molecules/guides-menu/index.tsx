import * as React from "react";

import { useLocale } from "../../../hooks";
import InternalLink from "../../atoms/internal-link";
import { Submenu } from "../submenu";

import "./index.scss";

export const GuidesMenu = ({ visibleSubMenuId, toggleMenu }) => {
  const locale = useLocale();

  const menu = {
    label: "Guides",
    id: "guides",
    items: [
      {
        description: "Learning Technology",
        extraClasses: "apis-link-container mobile-only",
        hasIcon: true,
        iconClasses: "submenu-icon learn",
        label: " Learning Area",
        url: `/${locale}/docs/Learn`,
      },
      {
        description: "Learn various Linux technologies , packages",
        extraClasses: "javascript-link-container",
        hasIcon: true,
        iconClasses: "submenu-icon javascript",
        label: "LINUX",
        url: `/${locale}/docs/Learn/Linux`,
      },
      {
        description: "Learn Devops to automate infrastructure",
        extraClasses: "css-link-container",
        hasIcon: true,
        iconClasses: "submenu-icon css",
        label: "DevOps",
        url: `/${locale}/docs/Learn/DevOps`,
      },
    ],
  };
  const isOpen = visibleSubMenuId === menu.id;

  return (
    <li key={menu.id} className="top-level-entry-container">
      <button
        type="button"
        id={`${menu.id}-button`}
        className="top-level-entry menu-toggle"
        aria-haspopup="menu"
        aria-expanded={isOpen || undefined}
        onClick={() => {
          toggleMenu(menu.id);
        }}
      >
        {menu.label}
      </button>

      <InternalLink
        to={`/${locale}/docs/Learn`}
        className="top-level-entry"
        // @ts-ignore
        onClick={() => document?.activeElement?.blur()}
      >
        Guides
      </InternalLink>

      <Submenu menuEntry={menu} defaultHidden={!isOpen} />
    </li>
  );
};
