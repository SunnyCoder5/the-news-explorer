import './Header.css';
import Navigation from '../Navigation/Navigation';
import { Routes, Route, Link, useLocation, NavLink } from 'react-router-dom';

function Header({ isLoggedIn, handleLoginClick }) {
  const { pathname } = useLocation();

  return (
    <header
      className={`header ${pathname === '/saved-news' && 'header__saved'}`}
    >
      <NavLink to="/" className="header__title-link">
        <p className="header__title">NewsExplorer</p>
      </NavLink>
      <Navigation isLoggedIn={isLoggedIn} handleLoginClick={handleLoginClick} />
    </header>
  );
}

export default Header;
