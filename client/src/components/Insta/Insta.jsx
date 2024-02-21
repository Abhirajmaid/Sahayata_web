import React from "react";
import "./style.css";

const Insta = () => {
  return (
    <>
      <section class="insta-post">
        <ul class="insta-post-list">
          <li class="insta-post-item">
            <a href="/" class="insta-post-link">
              <img
                src="/images/insta-1.jpg"
                width="320"
                height="300"
                loading="lazy"
                alt="Lion"
                class="img-cover"
              />

              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>

          <li class="insta-post-item">
            <a href="/" class="insta-post-link">
              <img
                src="/images/insta-2.jpg"
                width="320"
                height="300"
                loading="lazy"
                alt="Deer"
                class="img-cover"
              />

              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>

          <li class="insta-post-item">
            <a href="/" class="insta-post-link">
              <img
                src="/images/insta-3.jpg"
                width="320"
                height="300"
                loading="lazy"
                alt="Wild Bear"
                class="img-cover"
              />

              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>

          <li class="insta-post-item">
            <a href="/" class="insta-post-link">
              <img
                src="/images/insta-4.jpg"
                width="320"
                height="300"
                loading="lazy"
                alt="Deer"
                class="img-cover"
              />

              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>

          <li class="insta-post-item">
            <a href="/" class="insta-post-link">
              <img
                src="/images/insta-5.jpg"
                width="320"
                height="300"
                loading="lazy"
                alt="Horses"
                class="img-cover"
              />

              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Insta;
