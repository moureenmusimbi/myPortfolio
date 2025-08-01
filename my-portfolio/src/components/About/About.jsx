import React from 'react';
import './About.css';
import logo from '../../assets/logo.png';
import profile from '../../assets/profile.png';

const About = () => {
    return ( <
        div className = "about" >
        <
        div className = "about-title" >
        <
        h1 > About Me < /h1> <
        img src = { logo }
        alt = "Logo"
        style = {
            { width: '90px', height: '90px', objectFit: 'contain' }
        }
        /> < /
        div >

        <
        div className = "about-sections" >
        <
        div className = "about-left" >
        <
        img src = { profile }
        alt = "Profile"
        className = "about-profile-pic" /
        >
        <
        /div>

        <
        div className = "about-right" >
        <
        div className = "about-para" >
        <
        p >
        I 'm a passionate salonist who blends beauty expertise with tech and design skills to create impactful digital and physical experiences. < /
        p > <
        p >
        My background in IT, leadership, and graphic design equips me to build creative solutions— whether it 's styling, branding, or web design. < /
        p > <
        p >
        I also run a wig business, customizing high - quality wigs
        for clients.I 'm continually learning, with certifications in AI and design, to stay ahead and deliver excellence. < /
        p > <
        /div>

        <
        div className = "about-skills" >
        <
        div className = "about-skill" >
        <
        p > HTML & CSS < /p> <
        hr style = {
            { width: '50%' }
        }
        /> <
        p > React Js < /p> <
        hr style = {
            { width: '70%' }
        }
        /> <
        p > Javascript < /p> <
        hr style = {
            { width: '40%' }
        }
        /> <
        p > Adobe Photoshop < /p> <
        hr style = {
            { width: '60%' }
        }
        /> <
        p > Adobe Illustrator < /p> <
        hr style = {
            { width: '50%' }
        }
        /> <
        p > Canva < /p> <
        hr style = {
            { width: '70%' }
        }
        /> < /
        div > <
        /div> < /
        div > <
        /div>

        <
        div className = "about-achievements" >
        <
        div className = "about-achievement" >
        <
        h1 > 3 + < /h1> <
        p > YEARS OF EXPERIENCE < /p> < /
        div > <
        hr / >
        <
        div className = "about-achievement" >
        <
        h1 > 18 + < /h1> <
        p > PROJECTS COMPLETED < /p> < /
        div > <
        hr / >
        <
        div className = "about-achievement" >
        <
        h1 > 12 + < /h1> <
        p > HAPPY CLIENTS < /p> < /
        div > <
        hr / >
        <
        /div> < /
        div >
    );
};

export default About;