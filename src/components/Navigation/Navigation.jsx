import './Navigation.css';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

function Navigation({ isLoggedIn, handleLoginClick }) {
  const { pathname } = useLocation();

  return (
    <nav className="nav">
      <div className="nav__links ">
        {isLoggedIn ? (
          <div className="nav__links nav__links__logged-in">
            <Link to="/" className="nav-link">
              <button
                className={`nav__link ${
                  pathname === '/saved-news' && 'nav__link-saved'
                }`}
              >
                Home
              </button>
            </Link>
            <Link to="/saved-news" className="nav-link">
              <button
                className={`nav__link ${
                  pathname === '/saved-news' && 'nav__link-saved'
                }`}
              >
                Saved articles
              </button>
            </Link>
            <button className="nav__current-user">
              <p
                className={`nav__current-user_name ${
                  pathname === '/saved-news' && 'nav__current-user_name_saved'
                }`}
              >
                Elise
              </p>
              <div
                className={`nav__link ${
                  pathname === '/saved-news'
                    ? 'nav__current-user_signout_saved'
                    : 'nav__current-user_signout'
                }`}
              ></div>
            </button>
          </div>
        ) : (
          <div className="nav__links nav__links-logged-out">
            <button className="nav__link">Home</button>
            <button
              className="nav__link nav__signin"
              onClick={handleLoginClick}
            >
              Sign in
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
