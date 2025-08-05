import React from 'react';
import './Services.css';
import logo from '../../assets/logo.png';
import service_data from '../../assets/service_data';
import arrow_img1 from '../../assets/arrow_img1.png';

const Services = () => {
    return ( <
        div className = "services" >
        <
        div className = "services-title" >
        <
        h1 > My Services < /h1> <
        img src = { logo }
        alt = "Logo"
        style = {
            {
                width: '90px',
                height: '95px',
                objectFit: 'contain',
            }
        }
        /> < /
        div >

        <
        div className = "services-container" > {
            service_data.map((service, index) => ( <
                div key = { index }
                className = "service-format" >
                <
                h1 > { service.s_no } < /h1> <
                h2 > { service.title } < /h2> <
                p > { service.s_desc } < /p> <
                div className = "services-readmore" >
                <
                p > Read More < /p> <
                img src = { arrow_img1 }
                alt = "arrow icon" / >
                <
                /div> < /
                div >
            ))
        } <
        /div> < /
        div >
    );
};

export default Services;