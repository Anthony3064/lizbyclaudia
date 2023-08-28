import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ButtonIcon from "./ButtonIcon";
const menuLinks = {
    HOME: 'home',
    SERVICES: 'services',
    CONTACT: 'contact'
}
const Navbar = () => {
    const [showBars, setShowBars] = useState(true);
    const [linkActive, setLinkActive] = useState(menuLinks.HOME);

    const handleClickBars = () => {
        console.log('Se ejecuta');
        setShowBars(!showBars);
    }

    const handleClickLinkActive = (link) => {
        setLinkActive(link);
    }

    return (
        <nav className="nav">
            <Link to='/' className="logo">
                <span>Liz</span><br /><span style={{ margin: '20px' }}>By</span><br /> <span style={{ margin: '30px' }}>Clau</span>
            </Link>
            <ul className={`nav__menu ${!showBars ? 'active' : ''}`}>
                <li className={`nav__item ${linkActive === menuLinks.HOME && 'active'}`} >
                    <Link className='nav__link' to='/' onClick={() => handleClickLinkActive(menuLinks.HOME)}>Inicio</Link>
                </li>
                <li className={`nav__item ${linkActive === menuLinks.SERVICES && 'active'}`} >
                    <Link className='nav__link' to='/' onClick={() => handleClickLinkActive(menuLinks.SERVICES)}>Servicios</Link>
                </li>
                <li className={`nav__item ${linkActive === menuLinks.CONTACT && 'active'}`} >
                    <Link className='nav__link' to='/' onClick={() => handleClickLinkActive(menuLinks.CONTACT)}>Contacto</Link>
                </li>
                <div className="social__network" style={{/*display: 'none'*/ }}>
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
            </ul>
            <div className="mobile__nav" >
                <ButtonIcon icon={showBars ? 'bars' : 'times'} handleClick={handleClickBars} />
            </div>
        </nav >
    )
}

export default Navbar;
