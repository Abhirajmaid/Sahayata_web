import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

const About = () => {
  const [showMission, setShowMission] = useState(true);
  const [showVision, setShowVision] = useState(false);

  const handleClickMission = () => {
    if (showMission) {
      setShowMission(true);
    } else {
      setShowMission(true);
      setShowVision(false);
    }
  };
  const handleClickVision = () => {
    if (showVision) {
      setShowVision(true);
    } else {
      setShowVision(true);
      setShowMission(false);
    }
  };

  return (
    <>
      <section className="section about" id="about">
        <div className="container">
          <div className="about-banner">
            <h2 className="deco-title">About Us</h2>

            <img
              src="/images/deco-img.png"
              width="58"
              height="261"
              alt="sahayata"
              className="deco-img"
            />

            <div className="banner-row">
              <div className="banner-col">
                <img
                  src="/images/about-banner-1.jpg"
                  width="315"
                  height="380"
                  loading="lazy"
                  alt="sahayata"
                  className="about-img w-100"
                />

                <img
                  src="/images/about-banner-2.jpg"
                  width="386"
                  height="250"
                  loading="lazy"
                  alt="sahayata"
                  className="about-img about-img-2 w-100"
                />
              </div>

              <div className="banner-col">
                <img
                  src="/images/about-banner-3.jpg"
                  width="250"
                  height="277"
                  loading="lazy"
                  alt="sahayata"
                  className="about-img about-img-3 w-100"
                />

                <img
                  src="/images/about-banner-3.jpg"
                  width="315"
                  height="380"
                  loading="lazy"
                  alt="sahayata"
                  className="about-img w-100"
                />
              </div>
            </div>
          </div>

          <div className="about-content">
            <p className="section-subtitle">
              <img
                src="/images/subtitle-img-green.png"
                width="32"
                height="7"
                alt="sahayata"
              />

              <span>Why Choose Us</span>
            </p>

            <h2 className="h2 section-title">
              Rise Your Hand for <strong>Nourishing Communities</strong>
            </h2>

            <ul className="tab-nav">
              <li>
                <button
                  className={`tab-btn ${showMission ? "active" : ""} `}
                  onClick={handleClickMission}
                >
                  Our Mission
                </button>
              </li>

              <li>
                <button
                  className={`tab-btn ${showVision ? "active" : ""} `}
                  onClick={handleClickVision}
                >
                  Our Vision
                </button>
              </li>
            </ul>

            <div className="tab-content">
              <p className={`section-text ${showVision ? "visible" : "hide"}`}>
                At Sahayata Shubh-Hith Foundation, our vision is to realize a
                world where IMPACTING LIVES is not just a tagline but a tangible
                reality. We are dedicated to creating positive change by
                conducting weekly food drives and addressing critical issues in
                education, environment, women's welfare, and health.
              </p>
              <p className={`section-text ${showMission ? "visible" : "hide"}`}>
                Our mission is to break barriers, ensuring every individual has
                access to essentials, education, a healthy environment, and
                support. We aim to transform lives and foster a society where
                compassion and collective action drive lasting impact. Join us
                in building a brighter future for all, one where every person
                enjoys dignity, empowerment, and opportunity.
              </p>
              <Link to="/about-us">
                <button className="btn btn-secondary">
                  <span>Learn More Us</span>
                  <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
                </button>
              </Link>
            </div>
            {/* <div className="tab-content">
              <p>Vission</p>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
