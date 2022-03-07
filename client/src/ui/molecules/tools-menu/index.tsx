import * as React from "react";
import { Link } from "react-router-dom";

import { useLocale } from "../../../hooks";
import { Submenu } from "../submenu";

import "./index.scss";

export const ToolsMenu = ({ visibleSubMenuId, toggleMenu }) => {
  const locale = useLocale();

  const menu = {
    label: "Tools",
    id: "tools",
    items: [
      {
        description: "Learning Various Tools",
        extraClasses: "apis-link-container",
        hasIcon: true,
        iconClasses: "submenu-icon learn",
        label: "Tools Area",
        url: `/${locale}/docs/Tools`,
      },
      {
        description: "Snippets and tools for Ansible Automation",
        extraClasses: "css-link-container",
        hasIcon: true,
        iconClasses: "submenu-icon css",
        label: "Ansible",
        url: `/${locale}/docs/Tools/Ansible`,
      },
      {
        description: "Snippets and tools for Airflow Workflow Management",
        extraClasses: "javascript-link-container",
        hasIcon: true,
        iconClasses: "submenu-icon javascript",
        label: "Airflow",
        url: `/${locale}/docs/Tools/Airflow`,
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

      <Link
        to={`/${locale}/docs/Tools/`}
        className="top-level-entry"
        // @ts-ignore
        onClick={() => document?.activeElement?.blur()}
      >
        {menu.label}
      </Link>

      <Submenu menuEntry={menu} defaultHidden={!isOpen} />
    </li>
  );
};
