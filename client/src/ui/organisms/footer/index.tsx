import "./index.scss";
import { useLocation } from "react-router-dom";

const DARK_NAV_ROUTES = [/\/plus\/?$/i];

export function Footer() {
  const location = useLocation();
  const route = location.pathname.substring(location.pathname.indexOf("/", 1));
  const dark = DARK_NAV_ROUTES.some((r) => route.match(r));

  return (
    <footer id="nav-footer" className={`page-footer${dark ? " dark" : ""}`}>
      <div className="page-footer-grid">
        <div className="page-footer-legal">
          Copyright &copy; 2014-{new Date().getFullYear()} TechnoBureau
        </div>
      </div>
    </footer>
  );
}
