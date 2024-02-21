import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const CTA = ({ title, link, ctaText, img }) => {
  return (
    <>
      <section className="section cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="h2 section-title">{title}</h2>

            <Link to={link}>
              <button className="btn btn-outline">
                <span>{ctaText}</span>

                <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
              </button>
            </Link>
          </div>

          <figure className="cta-banner">
            <img
              src={img}
              width="520"
              height="218"
              loading="lazy"
              alt="sahayata"
              className="img-cover"
            />
          </figure>
        </div>
      </section>
    </>
  );
};

export default CTA;
