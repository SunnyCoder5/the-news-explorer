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
          <a
            href="https://tripleten.com/"
            className="footer__text-link"
            rel="noopener noreferrer"
          >
            TripleTen
          </a>
        </div>
        <div className="footer__icon-links">
          <a
            href="https://github.com/SunnyCoder5"
            className="footer__icon-link"
            rel="noopener noreferrer"
          >
            <img
              src={githubIcon}
              alt="Github logo"
              className="footer__social-icon"
            />
          </a>
          <a
            href="https://www.facebook.com/tripleten.tech/"
            className="footer__icon-link"
            rel="noopener noreferrer"
          >
            <img
              src={facebookIcon}
              alt="Facebook logo"
              className="footer__social-icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
