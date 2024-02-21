import { Link } from "react-router-dom";
import "./style.css";

const Hero = () => {
  return (
    <>
      <section class="hero" id="home">
        <span class="overlay"></span>
        <span class="overlay-bottom"></span>
        <div class="container stack">
          <p class="section-subtitle">
            <img
              src="/images/subtitle-img-white.png"
              width="32"
              height="7"
              alt="sahayata"
            />

            <span>Welcome to Sahayata</span>
          </p>

          <h2 class="h1 hero-title">
            <strong>
              Feeding Mankind,
              <br />
              with Love.
            </strong>
          </h2>

          <p class="hero-text">
            We at Sahayata are dedicated to providing sustenance to the
            underprivileged segments of society.
          </p>

          <Link to="https://donate.stripe.com/test_9AQ00qaWW99r6je9AB">
            <button class="btn btn-primary">
              <span>Donation</span>

              <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Hero;
