import "./Navigation.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";

function Navigation({ isLoggedIn }) {
  const { pathname } = useLocation();

  return (
    <nav className="nav">
      <div className="nav__links ">
        {isLoggedIn ? (
          <div className="nav__links nav__links__logged-in">
            <button
              className={`nav__link ${
                pathname === "/saved-news" && "nav__link-saved"
              }`}
            >
              Home
            </button>
            <button
              className={`nav__link ${
                pathname === "/saved-news" && "nav__link-saved"
              }`}
            >
              Saved articles
            </button>
            <button className="nav__current-user">
              <p className="nav__current-user_name">Elise</p>
              <div className="nav__current-user_name_signout"></div>
            </button>
          </div>
        ) : (
          <div className="nav__links nav__links-logged-out">
            <button className="nav__link">Home</button>
            <button className="nav__link">Sign in</button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
