import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png'; // Adjusted import path

const Navbar = () => {
    return ( <
        div className = 'navbar' >
        <
        h1 >
        <
        img src = { logo }
        alt = 'Logo'
        style = {
            {
                width: '90px', // Adjust width as needed
                height: '90px',
                objectFit: 'contain'
            }
        }
        /> < /
        h1 > <
        ul className = 'nav-menu' >
        <
        li > Home < /li> <
        li > About Me < /li> <
        li > Services < /li> <
        li > Portfolio < /li> <
        li > Contact < /li> < /
        ul > <
        div className = 'nav-connect' >
        Connect With Me <
        /div> < /
        div >
    );
};

export default Navbar;