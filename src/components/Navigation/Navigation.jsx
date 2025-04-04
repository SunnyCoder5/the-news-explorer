import './Navigation.css';
import { Link, useLocation } from 'react-router-dom';
import { CurrentPageContext } from '../../contexts/CurrentPageContext';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext } from 'react';

function Navigation({
  isLoggedIn,
  handleLoginClick,
  handleMenuClick,
  isOpen,
  onLogout,
}) {
  const { pathname } = useLocation();
  const currentPage = useContext(CurrentPageContext);
  const currentUser = useContext(CurrentUserContext);

  return (
    <nav className={`nav nav_${currentPage} nav__modal_${isOpen}`}>
      <div className="nav__links">
        <Link to="/" className="nav-link">
          <button
            className={`nav__link nav__link_to-home ${
              pathname === '/'
                ? 'nav__link_current_home'
                : 'nav__link_current_saved-news'
            }`}
          >
            Home
          </button>
        </Link>
        {isLoggedIn ? (
          <div className="nav__links">
            <Link to="/saved-news" className="nav-link">
              <button
                className={`nav__link nav__link_to-save ${
                  pathname === '/saved-news' && 'nav__link-saved'
                }`}
              >
                Saved articles
              </button>
            </Link>
            <button
              onClick={onLogout}
              className={`nav__current-user ${
                pathname === '/saved-news' && 'nav__current-user_saved'
              }`}
            >
              <p
                className={`nav__current-user_name ${
                  pathname === '/saved-news' && 'nav__current-user_name_saved'
                }`}
              >
                {currentUser.name}
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
      <button
        className={
          isOpen
            ? 'nav__mobile-menu_hidden'
            : `nav__mobile-menu nav__mobile-menu_${currentPage}`
        }
        onClick={handleMenuClick}
      ></button>
    </nav>
  );
}

export default Navigation;
