import React from 'react';
import './Contact.css';

const Contact = () => {
    return ( <
        div className = "contact" >
        <
        div className = "contact-title" >
        <
        h1 > Let 's Connect Test Build</h1> < /
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
        p > +254 7 93 857 370 < /p> < /
        div > <
        div className = "contact-card" >
        <
        h3 > Location < /h3> <
        p > Nairobi, Kenya < /p> < /
        div > <
        /div>

        <
        form className = "contact-form" >
        <
        input type = "text"
        placeholder = "Your Name"
        required / >
        <
        input type = "email"
        placeholder = "Your Email"
        required / >
        <
        textarea placeholder = "Your Message"
        rows = "6"
        required > < /textarea> <
        button type = "submit" > Send Message < /button> < /
        form > <
        /div>
    );
};

export default Contact;