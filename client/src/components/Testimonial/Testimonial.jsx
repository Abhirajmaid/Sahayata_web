"use client";
import React from "react";
import { testimonials } from "../../data/data";
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

const TestimonialCard = ({ image, reviewText, name, role }) => {
  return (
    <div className="card">
      <img src={image} alt="webfudge user" width={100} height={100} />
      <div class="card__content">
        <span>
          <Icon icon="bi:quote" className="icon" />
        </span>
        <div className="card__details">
          <p>{reviewText}</p>
          <h4>
            - {name} <br /> <span>( {role} )</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

const Testimonial = () => {
  //   console.log(testimonials);
  return (
    <section className="section testimonial">
      <div className="container">
        <p class="section-subtitle">
          <img
            src="/images/subtitle-img-green.png"
            width="32"
            height="7"
            alt="Wavy line"
          />

          <span>Testimonials</span>

          <img
            src="/images/subtitle-img-green.png"
            width="32"
            height="7"
            alt="Wavy line"
          />
        </p>

        <h2 class="h2 section-title">
          Get inspired by <strong>What our customers have to say</strong>
        </h2>
        <Swiper
          spaceBetween={60}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper swiper"
        >
          {testimonials.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <TestimonialCard {...item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
