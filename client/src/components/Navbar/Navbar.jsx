import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <>
      <div
        className="header_nav"
        style={{ backgroundColor: "#0a0a0a", zIndex: "100" }}
        data-header
      >
        <div className="container">
          <h1>
            <Link to="/" className="logo">
              <img
                src="/images/nav_logo.png"
                alt=""
                height="auto"
                width="220px"
              />
            </Link>
          </h1>

          <button
            className="nav-open-btn"
            aria-label="Open Menu"
            data-nav-open-btn
          >
            <ion-icon name="menu-outline"></ion-icon>
          </button>

          <nav className="navbar" data-navbar>
            <button
              className="nav-close-btn"
              aria-label="Close Menu"
              data-nav-close-btn
            >
              <ion-icon name="close-outline"></ion-icon>
            </button>

            <Link to="/" className="logo">
              Sahayata
            </Link>

            <ul className="navbar-list">
              <li>
                <Link to="/about-us" className="navbar-link" data-nav-link>
                  <span>About</span>

                  <ion-icon
                    name="chevron-forward-outline"
                    aria-hidden="true"
                  ></ion-icon>
                </Link>
              </li>
              <li>
                <Link to="/events" className="navbar-link" data-nav-link>
                  <span>Social Events</span>

                  <ion-icon
                    name="chevron-forward-outline"
                    aria-hidden="true"
                  ></ion-icon>
                </Link>
              </li>
              <li>
                <Link to="/#service" className="navbar-link" data-nav-link>
                  <span>Causes</span>

                  <ion-icon
                    name="chevron-forward-outline"
                    aria-hidden="true"
                  ></ion-icon>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="navbar-link" data-nav-link>
                  <span>Contact</span>

                  <ion-icon
                    name="chevron-forward-outline"
                    aria-hidden="true"
                  ></ion-icon>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="header-action">
            <Link to="/join">
              <span className="btn">JOIN US</span>
            </Link>
            <Link
              to="https://donate.stripe.com/test_9AQ00qaWW99r6je9AB"
              target="_blank"
            >
              <button className="btn btn-primary">
                <span>Donate Now</span>

                <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
