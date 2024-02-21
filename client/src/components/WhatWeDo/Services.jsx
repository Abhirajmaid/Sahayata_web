import React from "react";
import "./style.css";

const Services = () => {
  return (
    <>
      <section
        class="section service"
        id="service"
        style={{ backgroundImage: 'url("/images/service-map.png")' }}
      >
        <div class="container">
          <p class="section-subtitle">
            <img
              src="/images/subtitle-img-green.png"
              width="32"
              height="7"
              alt="sahayata"
            />

            <span>What We Do</span>
          </p>

          <h2 class="h2 section-title">
            We Work Differently to <strong>keep The World Safe</strong>
          </h2>

          <ul class="service-list">
            <li>
              <div class="service-card">
                <div class="card-icon">
                  <ion-icon name="leaf-outline"></ion-icon>
                </div>

                <h3 class="h3 card-title">Save Nature</h3>

                <p class="card-text">
                  Tempor incididunt ut labores dolore magna suspene
                </p>
              </div>
            </li>

            <li>
              <div class="service-card">
                <div class="card-icon">
                  <ion-icon name="earth-outline"></ion-icon>
                </div>

                <h3 class="h3 card-title">Save Ecology</h3>

                <p class="card-text">
                  Tempor incididunt ut labores dolore magna suspene
                </p>
              </div>
            </li>

            <li>
              <div class="service-card">
                <div class="card-icon">
                  <ion-icon name="flower-outline"></ion-icon>
                </div>

                <h3 class="h3 card-title">Tree Plantation</h3>

                <p class="card-text">
                  Tempor incididunt ut labores dolore magna suspene
                </p>
              </div>
            </li>

            <li>
              <div class="service-card">
                <div class="card-icon">
                  <ion-icon name="boat-outline"></ion-icon>
                </div>

                <h3 class="h3 card-title">Clear Ocean</h3>

                <p class="card-text">
                  Tempor incididunt ut labores dolore magna suspene
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Services;
