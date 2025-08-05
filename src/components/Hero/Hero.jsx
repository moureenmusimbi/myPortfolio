import React from 'react';
import './Hero.css';
import profile from '../../assets/profile.png';

const Hero = () => {
    return ( <
        div className = 'hero' >
        <
        img src = { profile }
        alt = 'Profile'
        style = {
            {
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid #ccc',
                imageRendering: 'auto',
            }
        }
        /> <
        h1 >
        <
        span > I 'm Moureen Musimbi, < /span> a graphic designer & frontend developer based in Nairobi, Kenya. < /
        h1 > <
        p >
        I & apos; m Moureen Musimbi, a creative and detail - driven professional specializing in graphic design,
        frontend development, and IT, passionate about turning ideas into impactful digital experiences. <
        /p>

        <
        div className = 'hero-action' >
        <
        a href = "#contact"
        className = "hero-connect" > Connect with me < /a> <
        a href = "/resume.pdf"
        className = "hero-resume"
        download > My resume < /a> < /
        div > <
        /div>
    );
};

export default Hero;