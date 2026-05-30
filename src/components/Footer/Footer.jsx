import githubIcon from "../../images/github.svg";
import facebookIcon from "../../images/facebook.svg";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        © 2025 NewsExplorer
      </p>

      <div className="footer__top">
        <div className="footer__links">
          <a
            href="/"
            className="footer__link"
          >
            Inicio
          </a>

          <a
            href="https://tripleten.com"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            TripleTen
          </a>
        </div>

        <div className="footer__social">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={githubIcon}
              alt="GitHub"
              className="footer__icon"
            />
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={facebookIcon}
              alt="Facebook"
              className="footer__icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;