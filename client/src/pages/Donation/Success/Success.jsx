import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <>
      <div className="page">
        <div className="page_container">
          <h1>🎊 Payment Successful | Thanks for Donation!</h1>

          <p>You will recive your Donation recipt shortly!</p>
          <Link to="/">
            <span>Go to Home</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Success;
