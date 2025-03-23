import './Navigation.css';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { CurrentPageContext } from '../../contexts/CurrentPageContext';
import { useContext } from 'react';

function Navigation({ isLoggedIn, handleLoginClick }) {
  const { pathname } = useLocation();
  const currentPage = useContext(CurrentPageContext);

  return (
    <nav className="nav">
      <div className="nav__links ">
        <Link to="/" className="nav-link">
          <button
            className={`nav__link nav__link_${currentPage} nav__link_to-home ${
              pathname === '/' ? 'nav__link_current_home' : ''
            }`}
          >
            Home
          </button>
        </Link>
        {isLoggedIn ? (
          <div className="nav__links nav__logged-in">
            <Link to="/saved-news" className="nav-link">
              <button
                className={`nav__link ${
                  pathname === '/saved-news' && 'nav__link-saved'
                }`}
              >
                Saved articles
              </button>
            </Link>
            <button
              className={`nav__current-user ${
                pathname === '/saved-news' && 'nav__current-user_saved'
              }`}
            >
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
          <div className="nav__links nav__logged-out">
            <button className="nav__signin" onClick={handleLoginClick}>
              Sign in
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
