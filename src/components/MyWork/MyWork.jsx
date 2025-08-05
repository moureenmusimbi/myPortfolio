import React from "react";
import "./MyWork.css";

import beautyPoster from "../../assets/beautyPoster.jpg";
import WigPoster3 from "../../assets/WigPoster3.png";
import WIG from "../../assets/WIG.png";
import web from "../../assets/web.PNG";
import IT from "../../assets/IT.PNG";
import LeardershipWeb from "../../assets/LeardershipWeb.PNG";

const MyWork = () => {
    return ( <
        div className = "my-work" >
        <
        h2 > My Work < /h2> <
        div className = "work-cards" >
        <
        div className = "work-card" >
        <
        img src = { beautyPoster }
        alt = "Salon & Beauty Services" / >
        <
        p > Salon & Beauty Services < /p> < /
        div >

        <
        div className = "work-card" >
        <
        img src = { WigPoster3 }
        alt = "Beauty Product Business" / >
        <
        p > Beauty Product Business < /p> < /
        div >

        <
        div className = "work-card" >
        <
        img src = { WIG }
        alt = "Graphic & Brand Design" / >
        <
        p > Graphic & Brand Design < /p> < /
        div >

        <
        div className = "work-card" >
        <
        img src = { web }
        alt = "Web Design Project" / >
        <
        p > Web Design Project < /p> < /
        div >

        <
        div className = "work-card" >
        <
        img src = { IT }
        alt = "IT Skills Showcase" / >
        <
        p > IT Skills Showcase < /p> < /
        div >

        <
        div className = "work-card" >
        <
        img src = { LeardershipWeb }
        alt = "Leadership & Motivation" / >
        <
        p > Leadership & Motivation < /p> < /
        div > <
        /div> < /
        div >
    );
};

export default MyWork;