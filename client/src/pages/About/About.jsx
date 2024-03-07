/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";
import { Icon } from "@iconify/react";

const About = () => {
  return (
    <>
      <header class="header" id="home">
        <div class="section__container header__container">
          <div class="header__content">
            <h3 class="section__subheader">A HIKING GUIDE</h3>
            <h1 class="section__header">
              Be Prepared For The Mountains And Beyond!
            </h1>
            <div class="scroll__btn">
              <a href="#about">
                Scroll down
                <span>
                  <i class="ri-arrow-down-line"></i>
                </span>
              </a>
            </div>
          </div>
          <div class="header__socials">
            <span>Follow us</span>
            <a href="#">
              <Icon icon="bi:instagram" />
            </a>
            <a href="#">
              <Icon icon="bi:twitter-x" />
            </a>
          </div>
        </div>
      </header>
      <section class="about_page">
        <div class="section__container about__container">
          <div class="about__image about__image-1" id="about">
            <img src="images/event1.jpg" alt="about" />
          </div>
          <div class="about__content about__content-1">
            <h3 class="section__subheader">GET STARTED</h3>
            <h2 class="section__header">What level of hiker are you?</h2>
            <p>
              Whether you're a novice seeking scenic strolls or an experienced
              trekker craving challenging ascents, we've curated a diverse range
              of trails to cater to every adventurer. Uncover your hiking
              identity, explore tailored recommendations, and embrace the great
              outdoors with a newfound understanding of your capabilities.
            </p>
            <div class="about__btn"></div>
          </div>
          <div class="about__image about__image-2" id="equipment">
            <img src="images/event1.jpg" alt="about" />
          </div>
          <div class="about__content about__content-2">
            <h3 class="section__subheader">HIKING ESSENTIALS</h3>
            <h2 class="section__header">Picking the right hiking gear!</h2>
            <p>
              From durable footwear that conquers rugged trails to lightweight
              backpacks that carry your essentials with ease, we navigate the
              intricacies of gear selection to ensure you're geared up for
              success on every hike. Lace up your boots and let the journey
              begin with confidence, knowing you've chosen the right gear for
              the trail ahead!
            </p>
            <div class="about__btn"></div>
          </div>
          <div class="about__image about__image-3" id="blog">
            <img src="images/event1.jpg" alt="about" />
          </div>
          <div class="about__content about__content-3">
            <h3 class="section__subheader">WHERE YOU GO IS THE KEY</h3>
            <h2 class="section__header">Understanding your map & timing</h2>
            <p>
              Knowing when to start and anticipating the changing conditions
              ensures a safe and enjoyable journey. So, dive into the details,
              grasp the contours, and synchronize your steps with the rhythm of
              nature. It's not just a hike; it's a journey orchestrated by your
              map and timed to perfection.
            </p>
            <div class="about__btn"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
