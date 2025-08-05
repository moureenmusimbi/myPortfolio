import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
    const form = useRef();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'your_service_id', // 🔁 Replace this
            'your_template_id', // 🔁 Replace this
            form.current,
            'your_public_key' // 🔁 Replace this
        ).then(
            (result) => {
                console.log('Email sent:', result.text);
                setSuccessMessage('Your message has been sent!');
                setFormData({ name: '', email: '', message: '' });

                setTimeout(() => setSuccessMessage(''), 3000);
            },
            (error) => {
                console.error('Email error:', error.text);
                setSuccessMessage('Failed to send message. Try again.');
                setTimeout(() => setSuccessMessage(''), 3000);
            }
        );
    };

    return ( <
        div className = "contact" >
        <
        div className = "contact-title" >
        <
        h1 > Let 's Connect  Test Build</h1> < /
        div >

        <
        p className = "contact-description" >
        Whether it 's about booking a salon session, graphic design, beauty branding,
        or a tech collaboration— I 'm always open to meaningful conversations. < /
        p >

        <
        div className = "contact-info" >
        <
        div className = "contact-card" >
        <
        h3 > Email < /h3> <
        p > musimbimoureen @gmail.com < /p> < /
        div > <
        div className = "contact-card" >
        <
        h3 > Phone < /h3> <
        p > +254 793 857 370 < /p> < /
        div > <
        div className = "contact-card" >
        <
        h3 > Location < /h3> <
        p > Nairobi, Kenya < /p> < /
        div > <
        /div>

        <
        form className = "contact-form"
        ref = { form }
        onSubmit = { handleSubmit } >
        <
        input type = "text"
        name = "name"
        placeholder = "Your Name"
        value = { formData.name }
        onChange = { handleChange }
        required /
        >
        <
        input type = "email"
        name = "email"
        placeholder = "Your Email"
        value = { formData.email }
        onChange = { handleChange }
        required /
        >
        <
        textarea name = "message"
        placeholder = "Your Message"
        rows = "6"
        value = { formData.message }
        onChange = { handleChange }
        required /
        >
        <
        button type = "submit" > Send Message < /button>

        {
            successMessage && ( <
                p className = "success-message" > { successMessage } < /p>
            )
        } <
        /form> < /
        div >
    );
};

export default Contact;