import React from "react";
import { eventsData } from "../../data/data";
import { EventCard } from "../../components";

const Events = () => {
  return (
    <>
      <div className="page">
        <section
          class="section event"
          id="event"
          style={{ marginTop: "-60px" }}
        >
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
              Our Most Popular Causes For <strong>Building Fund</strong>
            </h2>

            <ul class="event-list">
              {eventsData.map((event) => {
                return <EventCard key={event.id} event={event} />;
              })}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Events;
