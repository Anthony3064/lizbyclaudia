import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__description">
          <p className="footer__text">
            Copyright
            <FontAwesomeIcon className="footer__copyright" icon={'fa-regular fa-copyright'} />
            <span className='footer__span'>
              2023
              LizByClau
            </span>
          </p>
        </div>
        <div className="social__network footer__social" >
          <li className="nav__item">
            <Link className='nav__link' target="_blank" to='https://www.instagram.com/claudia_cabalceta/'>
              <FontAwesomeIcon icon={'fab fa-instagram'} />
            </Link>
          </li>
          <li className="nav__item">
            <Link className='nav__link' target="_blank" to='https://www.facebook.com/claudializ.cabalceta/'>
              <FontAwesomeIcon icon={'fab fa-facebook'} />
            </Link>
          </li>
          <li className="nav__item">
            <Link className='nav__link' target="_blank" to=''>
              <FontAwesomeIcon className="whatsapp__icon" icon={'fab fa-whatsapp'} />
            </Link>
          </li>
        </div>
      </div>
    </footer>
  )
}

export default Footer;