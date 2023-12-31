import { useState } from "react";
import ButtonIcon from "./NavbarButton";
import { MENU } from "../utils/Constants";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = () => {
    const [showBars, setShowBars] = useState(true);
    const [linkMenuActive, setLinkMenuActive] = useState(MENU.HOME);

    const handleClickBars = (showBars) => {
        setShowBars(!showBars);
    }

    const handleClickLinkActive = (link, sectionID) => {
        setLinkMenuActive(link);
        handleClickBars(false);
        scrollToSection(sectionID);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const y = section.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <nav className="nav">
            <Link className="logo" onClick={() => handleClickLinkActive(MENU.HOME, MENU.HOME)}>
                <span>Liz</span><br /><span style={{ margin: '20px' }}>By</span><br /> <span style={{ margin: '30px' }}>Clau</span>
            </Link>
            <div className="mobile__nav" >
                <ButtonIcon showBars={showBars} handleClick={() => handleClickBars(showBars)} />
            </div>
            <ul className={`nav__menu ${!showBars ? 'active' : ''}`}>
                <li className={`nav__item ${MENU.HOME === linkMenuActive && 'active'}`} >
                    <Link className='nav__link' onClick={() => handleClickLinkActive(MENU.HOME, MENU.HOME)}>Inicio</Link>
                </li>
                <li className={`nav__item ${MENU.SERVICES === linkMenuActive && 'active'}`} >
                    <Link className='nav__link' onClick={() => handleClickLinkActive(MENU.SERVICES, MENU.SERVICES)}>Servicios</Link>
                </li>
                <li className={`nav__item ${MENU.WORKS === linkMenuActive && 'active'}`} >
                    <Link className='nav__link' onClick={() => handleClickLinkActive(MENU.WORKS, MENU.WORKS)}>Trabajos</Link>
                </li>
                <li className={`nav__item ${MENU.CONTACT === linkMenuActive && 'active'}`} >
                    <Link className='nav__link' onClick={() => handleClickLinkActive(MENU.CONTACT, MENU.CONTACT)}>Contacto</Link>
                </li>
                <div className="social__network" >
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
                            <FontAwesomeIcon icon={'fab fa-whatsapp'} />
                        </Link>
                    </li>
                </div>
            </ul>
        </nav >
    )
}
export default Navbar;
