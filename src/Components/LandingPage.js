import React from "react";
import student_img from "./images/img4.png";
import "../App.css";
import "../index.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function LandingPage() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <main>
        <div className="hero">
          <div className="hero-text">
            <h1>
              Discover the <br /> World with Study.
            </h1>
            <p>“One day, all your hard work will pay off.”</p>
            <div className="hero-buttons">
              {isAuthenticated ? (
                <></>
              ) : (
                <Link to="/signup">
                  <button className="btn-registration">Registration</button>
                </Link>
              )}
              <Link to="/notes">
                <button className="btn-start">Start Today</button>
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img src={student_img} alt="Student with books" />
          </div>
        </div>
      </main>
    </>
  );
}
