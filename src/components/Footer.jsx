import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__description">
          <span>
            Copyright
          </span>
          <FontAwesomeIcon icon={'copyright'} />
          <date>
            2023
          </date>
          <span>
            ClaudiaByLiz
          </span>
        </div>
        <div className="social__network footer__social" >
          <li className="nav__item">
            <Link className='nav__link' target="_blank" to='https://www.instagram.com/claudia_cabalceta/'>
              <i className="fab fa-instagram" />
            </Link>
          </li>
          <li className="nav__item">
            <Link className='nav__link' target="_blank" to='https://www.facebook.com/claudializ.cabalceta/'>
              <i className="fab fa-facebook" />
            </Link>
          </li>
        </div>
      </div>
    </footer>
  )
}

export default Footer;