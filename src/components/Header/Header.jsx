import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { Routes, Route, Link, useLocation } from "react-router-dom";

function Header({ isLoggedIn }) {
  const { pathname } = useLocation();

  return (
    <header
      className={`header ${pathname === "/saved-news" && "header__saved"}`}
    >
      <p className="header__title">NewsExplorer</p>
      <Navigation isLoggedIn={isLoggedIn} />
    </header>
  );
}

export default Header;
