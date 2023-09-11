import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const NavbarButton = ({ showBars, handleClick }) => {
    return (
        <button className='btn__icon' onClick={handleClick}>
            <FontAwesomeIcon icon={showBars ? 'bars' : 'close'} />
        </button>
    )
}
export default NavbarButton;
