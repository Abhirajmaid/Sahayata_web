import React from "react";
import { Link, useParams } from "react-router-dom";
import { eventsData } from "../../data/data";
import "./style.css";
import { Icon } from "@iconify/react";

const SingleEvent = () => {
  const params = useParams();

  const event = eventsData.find((item) => {
    return item?.id == params?.id;
  });

  return (
    <>
      <div className="container">
        <div className="event_banner">
          <div className="banner_overlay"></div>
          <img src={event.eventBanner} alt="" />
          <div className="single_info">
            <date>{event.date}</date>
            <h3>{event.eventName}</h3>
          </div>
        </div>
        <div className="info_nav">
          <ul>
            <li>Description</li>
            <li>Date and Time</li>
            <li>Location</li>
            <li>About the Host</li>
          </ul>
          <div className="event_reg">
            <div className="reg_sec">
              <span>Entry Fee :</span>
              <p>Rs. {event.entryFee}/-</p>
            </div>
            <div className="reg_sec" style={{ height: "90px" }}>
              {/* <Link className="reg_link" to={`/event/reg/${event.id}`}>
              <button>Register Now</button>
            </Link> */}
              <Link className="reg_link" to={"/event/reg"}>
                <button>Register Now</button>
              </Link>
            </div>
            <span className="gst">*GST applicable for external students</span>
          </div>
        </div>
        <div className="page_container">
          <div className="event_page">
            <div className="event_reg_1">
              <div className="reg_sec">
                <span>Entry Fee :</span>
                <p>{event.entryFee}/-</p>
              </div>
              <div className="reg_sec" style={{ height: "90px" }}>
                {/* <Link className="reg_link" to={`/event/reg/${event.id}`}>
                <button>Register Now</button>
              </Link> */}
                <Link className="reg_link" to={"/event/reg"}>
                  <button>Register Now</button>
                </Link>
              </div>
              <p className="gst">*GST applicable </p>
            </div>
            <div className="info_container">
              <div className="info_section">
                <h2>Description</h2>
                <p>{event.description}</p>
              </div>
              <div className="info_section">
                <h2>Date and Time</h2>
                <span className="dateTime_box">
                  {event.dateWord}
                  <br />
                  {event.time}
                </span>
              </div>
              <div className="info_section">
                <h2>Location</h2>
                <div style={{ display: "flex", gap: "10px" }}>
                  <Icon
                    className="cont_social"
                    icon="material-symbols:location-on-rounded"
                  />
                  <p>{event.location}</p>
                </div>
              </div>
              <div className="info_section">
                <h2>About the Host</h2>
                <div style={{ display: "flex", gap: "20px", height: "100%" }}>
                  <span className="host_bg">{event.eventHost}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleEvent;
