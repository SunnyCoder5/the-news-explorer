import './Footer.css';
import { Routes, Route, Link, useLocation, NavLink } from 'react-router-dom';

import githubIcon from '../../assets/github.svg';
import facebookIcon from '../../assets/fb.svg';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        © 2025 Supersite, Powered by News API
      </p>
      <div className="footer__links">
        <div className="footer__text-links">
          <NavLink to="/" className="footer__text-link">
            Home
          </NavLink>
          <Link
            to="https://tripleten.com/"
            className="footer__text-link"
            rel="noopener noreferrer"
            target="_blank"
          >
            TripleTen
          </Link>
        </div>
        <div className="footer__icon-links">
          <Link
            to="https://github.com/SunnyCoder5"
            className="footer__icon-link"
            rel="noopener noreferrer"
            target="_blank"
          >
            <button className="footer__icon-gh"></button>
          </Link>

          <Link
            to="https://www.facebook.com/tripleten.tech/"
            className="footer__icon-link"
            rel="noopener noreferrer"
            target="_blank"
          >
            <button className="footer__icon-fb"></button>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
