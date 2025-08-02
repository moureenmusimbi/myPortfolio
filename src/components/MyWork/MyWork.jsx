import React from "react";
import "./MyWork.css";
import beautyPoster from "../../assets/beautyPoster.jpg";
import WigPoster3 from "../../assets/WigPoster3.png";
import WIG from "../../assets/WIG.png"; // ✅ corrected this line

const MyWork = () => {
  return (
    <div className="my-work">
      <h2>My Work</h2>
      <div className="work-cards">
        <div className="work-card">
          <img src={beautyPoster} alt="Salon & Beauty Services" />
        </div>

        <div className="work-card">
          <img src={WigPoster3} alt="Beauty Product Business" />
        </div>

        <div className="work-card">
          <img src={WIG} alt="Graphic & Brand Design" />
        </div>

        <div className="work-card">
          <img src="/images/web-development.jpg" alt="Website Development" />
        </div>

        <div className="work-card">
          <img src="/images/it-support.jpg" alt="IT Support & Training" />
        </div>

        <div className="work-card">
          <img src="/images/leadership.jpg" alt="Leadership & Motivation" />
        </div>

        <div className="work-card">
          <img
            src="/images/ai-learning.jpg"
            alt="Artificial Intelligence Learning"
          />
        </div>
      </div>
    </div>
  );
};

export default MyWork;
