import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <header className="header">
      <p className="header__title">NewsExplorer</p>
      <Navigation />
    </header>
  );
}

export default Header;
