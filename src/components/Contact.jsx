import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useForm from "../hooks/useForm";
const Contact = () => {
    const { formData, handleInputChange, handleSubmit, closeErrorMessage, message } = useForm();
    const { nameForm, emailForm, phoneForm } = formData;
    return (
        <section id="contact" className="contact" onSubmit={handleSubmit}>
            <form className="form__contact">
                <h2 className="contact__title">
                    Contactanos
                </h2>
                {
                    message &&
                    <div className={`error__message ${message.isError ? '' : 'success'}`}>
                        {message.message}
                        <button className='btn__error__message' onClick={closeErrorMessage}>
                            <FontAwesomeIcon icon={'close'} />
                        </button>
                    </div>
                }
                <label className="contact__label" htmlFor="name">Nombre</label>
                <input id="name" name="nameForm" className="input" type="text" placeholder="Nombre" onChange={handleInputChange} value={nameForm} />
                <label className="contact__label" htmlFor="email">Correo electrónico</label>
                <input id="email" name="emailForm" className="input" type="email" placeholder="Correo electrónico" onChange={handleInputChange} value={emailForm} />
                <label className="contact__label" htmlFor="phone">Número teléfono</label>
                <input id="phone" name="phoneForm" className="input" type="text" placeholder="Teléfono" onChange={handleInputChange} value={phoneForm} />
                <button className="btn__contact" type="submit">
                    Enviar
                </button>
            </form>
        </section>
    )
}

export default Contact
