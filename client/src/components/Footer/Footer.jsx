import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <>
      <footer class="footer">
        <div class="container" style={{ width: "80%" }}>
          <ul class="footer-list">
            <li>
              <a
                href="https://www.termsfeed.com/live/d4059fa7-7a44-4853-af7a-88f12f16bf56"
                class="footer-link"
                target="_blank"
                rel="noreferrer"
              >
                Terms of use
              </a>
            </li>

            <li>
              <a
                href="https://www.termsfeed.com/live/febca2e4-5ef9-4927-8e3c-bb820a9ce2e0"
                class="footer-link"
                target="_blank"
                rel="noreferrer"
              >
                Privacy & Policy
              </a>
            </li>
          </ul>

          <p class="copyright">
            Copyright 2023{" "}
            <a href="/" class="copyright-link">
              Sahayata
            </a>
            . All Rights Reserved. |{" "}
            <a
              href="https://webfudgeagency.com"
              target="_blank"
              rel="noreferrer"
              className="copyright-link"
            >
              Design by WEBFUDGE
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
