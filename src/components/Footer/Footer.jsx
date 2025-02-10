import "./Footer.css";

import githubIcon from "../../assets/github.svg";
import facebookIcon from "../../assets/fb.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2025 Supersite, Powered by News API</p>
      <div className="footer__links">
        <div className="footer__text-links">
          <p className="footer__text-link">Home</p>
          <p className="footer__text-link">TripleTen</p>
        </div>
        <div className="footer__icon-links">
          <a
            href="https://github.com/SunnyCoder5"
            className="footer__icon-link"
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
