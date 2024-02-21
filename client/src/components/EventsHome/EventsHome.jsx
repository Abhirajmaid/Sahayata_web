import React from "react";
import "./style.css";

import { eventsData } from "../../data/data";
import { Link } from "react-router-dom";
import EventCard from "../EventCard/EventCard";

const EventHome = () => {
  return (
    <section class="section event" id="event">
      <div class="container">
        <p class="section-subtitle">
          <img
            src="/images/subtitle-img-green.png"
            width="32"
            height="7"
            alt="Wavy line"
          />

          <span>Event & Program</span>

          <img
            src="/images/subtitle-img-green.png"
            width="32"
            height="7"
            alt="Wavy line"
          />
        </p>

        <h2 class="h2 section-title">
          Our Most Popular Causes For <strong>Building Fund & Community</strong>
        </h2>

        <ul class="event-list">
          {eventsData.slice(0, 4).map((event) => {
            return <EventCard key={event.id} event={event} />;
          })}
        </ul>

        <Link to="/events">
          <button class="btn btn-secondary">
            <span>Check all Events</span>
            <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default EventHome;
