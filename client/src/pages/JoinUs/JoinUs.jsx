/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toast } from "../../context/ToastContext";
import "./style.css";

const JoinUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const [status, setStatus] = useState(false);
  const { error, success, warn } = Toast();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(true);
    if (email === "" || name === "" || mobile === "") {
      error("Please fill all the fields!");
    } else if (!(mobile.length === 10)) {
      error("Wrong mobile no.");
    } else {
      try {
      } catch (error) {}
    }
  };

  return (
    <div className="page join_page">
      <div className="join_container">
        <div className="title">Registration</div>
        <div className="content">
          <form onSubmit={handleSubmit}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input type="text" placeholder="Enter your email" required />
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input type="text" placeholder="Enter your number" required />
              </div>
              <div className="input-box">
                <span className="details">Area</span>
                <select name="area" id="area">
                  <option>-- Select --</option>
                  <option value="Kothrud">Kothrud</option>
                  <option value="Karve">Karve</option>
                  <option value="NIBM">NIBM</option>
                  <option value="Bibvewadi">Bibvewadi</option>
                </select>
              </div>
            </div>
            <div className="gender-details">
              <input type="radio" name="gender" id="dot-1" />
              <input type="radio" name="gender" id="dot-2" />
              <input type="radio" name="gender" id="dot-3" />
              <span className="gender-title">Gender</span>
              <div className="category">
                <label for="dot-1">
                  <span className="dot one"></span>
                  <span className="gender">Male</span>
                </label>
                <label for="dot-2">
                  <span className="dot two"></span>
                  <span className="gender">Female</span>
                </label>
                <label for="dot-3">
                  <span className="dot three"></span>
                  <span className="gender">Prefer not to say</span>
                </label>
              </div>
            </div>

            <div className="button" onClick={handleSubmit}>
              <input type="submit" value="Register" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
