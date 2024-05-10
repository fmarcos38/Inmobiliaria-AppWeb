import React, { useRef  } from 'react';
import emailjs from 'emailjs-com';
import './styles.css';


const ContactForm = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_s3ri20f', 'template_b41v11l', form.current, 'N02Ckz93ExVB6IuAS')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail} className='cont-formulario'>
            <div className='div-cont-form'>
                <div class="form__group field">
                    <input required  class="form__field" placeholder="Name" type="text" name='user_name'/>
                        <label class="form__label" for="name">Nombre y Apellido</label>
                </div>

                <div class="form__group field">
                    <input required  class="form__field" placeholder="Name" type="email" name="user_email"/>
                        <label class="form__label" for="name">Email</label>
                </div>

                <div class="form__group field">
                    <textarea required  class="form__field" placeholder="Name" name="message"/>
                        <label class="form__label" for="name">Mensaje</label>
                </div>

                <input type="submit" value="Send" />
            </div>
        </form>
    );
};

export default ContactForm;
