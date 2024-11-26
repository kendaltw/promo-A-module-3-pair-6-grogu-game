import { NavLink } from "react-router-dom";

function Footer() {
  return;
  <footer className="footer">
    <nav>
      <ul>
        <li className="footer__menu-item">
          <link className="footer__menu-link" href="#/">
            A jugar
          </link>
        </li>
        <li className="footer__menu-item">
          <link className="footer__menu-link active" href="#/instructions">
            ¿Cómo se juega?
          </link>
        </li>
        <li className="footer__menu-item">
          <link className="footer__menu-link" href="#/options">
            Más opciones
          </link>
        </li>
      </ul>
    </nav>
    <small className="footer__copy">© Adalab</small>
  </footer>;
}

export default Footer;
