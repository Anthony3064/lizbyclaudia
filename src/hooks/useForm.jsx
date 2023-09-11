import { useEffect, useState } from "react";
const initialFormState = {
    nameForm: '',
    emailForm: '',
    phoneForm: '',
}
export default function useForm() {
    const [formData, setFormData] = useState(initialFormState);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        if (message) {
            const timeout = setTimeout(() => {
                setMessage(null);
            }, 5000);
            return () => clearTimeout(timeout);
        }
    }, [message]);

    const handleInputChange = ({ target }) => {
        const { name, value } = target;
        //console.log(`Name: ${name} - ${value}`);
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const closeErrorMessage = () => {
        setMessage(null);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (formData.nameForm === '') {
            setMessage({ message: 'El nombre es requerido', isError: true });
            return;
        }
        if (formData.emailForm === '') {
            setMessage({ message: 'El correo electrónico es requerido', isError: true });
            return;
        }
        if (formData.phoneForm === '') {
            setMessage({ message: 'El teléfono es requerido', isError: true });
            return;
        }
        setMessage({ message: 'Muchas gracias!!', isError: false })
        setFormData(initialFormState);
    }
    return {
        formData,
        handleInputChange,
        handleSubmit,
        closeErrorMessage,
        message
    }
}
