import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ButtonIcon = ({ icon, handleClick}) => {
    return (
        <button  className="btn__icon" onClick={handleClick}>
            <FontAwesomeIcon icon={icon} />
        </button>
    )
}
export default ButtonIcon;
