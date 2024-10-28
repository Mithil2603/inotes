import React from 'react'
import student_img from './images/img4.png';
import "../App.css";
import "../index.css";

export default function LandingPage() {
  return (
    <>
      <main>
          <div className="hero">
            <div className="hero-text">
              <h1>Discover the <br /> World with Study.</h1>
              <p>“One day, all your hard work will pay off.”</p>
              <div className="hero-buttons">
                <button className="btn-registration">Registration</button>
                <button className="btn-start">Start Today</button>
              </div>
            </div>
            <div className="hero-image">
              <img src={student_img} alt="Student with books" />
            </div>
          </div>
        </main>
    </>
  )
}
