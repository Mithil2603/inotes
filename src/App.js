import React from 'react'
import "./App.css";
import "./index.css";
import Navbar from './Components/Navbar';
// import Subject from './Components/Subject';
import student_img from './Components/images/img4.png';
import SecondaryNav from './Components/SecondaryNav';

export default function App() {
  return (
    <>
      {/* Home Page */}
      {/* <Subject title="Data Communication and Networking" desc="nothing just study" />  */}
      <div className="home-page">
        {/* <SecondaryNav /> */}
        <Navbar />
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
      </div>
    </>
  )
}
