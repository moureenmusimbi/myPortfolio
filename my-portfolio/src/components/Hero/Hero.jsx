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
        span > I 'm Moureen Musimbi, </span>
        a graphic designer & frontend developer based in Nairobi, Kenya. <
        /h1> <
        p >
        I 'm Moureen Musimbi, a creative and detail-driven professional specializing in graphic design,
        frontend development, and IT, passionate about turning ideas into impactful digital experiences. <
        /p>

        <
        div className = 'hero-action' >
        <
        div className = 'hero-connect' > Connect with me < /div> <
        div className = 'hero-resume' > My resume < /div> <
        /div> <
        /div>
    );
};

export default Hero;