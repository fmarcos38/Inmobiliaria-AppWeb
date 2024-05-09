import React, { useState, useRef  } from 'react';
import emailjs from 'emailjs-com';
import './styles.css';


const ContactForm = () => {
    /* const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    }); */
    const form = useRef();

    /* const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }; */

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_s3ri20f', 'template_b41v11l', form.current, 'N02Ckz93ExVB6IuAS')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        
        // Limpia el formulario después de enviar
        /* setFormData({
            name: '',
            email: '',
            message: ''
        }); */
    };

    return (
        <form ref={form} onSubmit={sendEmail} className='cont-formulario'>
            <div className='div-cont-form'>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </div>
        </form>
    );
};

export default ContactForm;
