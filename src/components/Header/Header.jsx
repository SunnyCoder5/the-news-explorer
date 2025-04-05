import './Header.css';
import Navigation from '../Navigation/Navigation';
import { Routes, Route, Link, useLocation, NavLink } from 'react-router-dom';

function Header({
  isLoggedIn,
  handleLoginClick,
  handleMenuClick,
  isOpen,
  activeModal,
  onLogout,
}) {
  const { pathname } = useLocation();

  return (
    <header
      className={`header ${pathname === '/saved-news' && 'header_page_saved'}`}
    >
      <NavLink to="/" className="header__title-link">
        <p
          className={`header__title ${pathname === '/saved-news' && 'header__title_page_saved'}`}
        >
          NewsExplorer
        </p>
      </NavLink>
      <Navigation
        isLoggedIn={isLoggedIn}
        handleLoginClick={handleLoginClick}
        handleMenuClick={handleMenuClick}
        isOpen={isOpen}
        onLogout={onLogout}
      />
    </header>
  );
}

export default Header;
