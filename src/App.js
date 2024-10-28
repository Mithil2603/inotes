import React from 'react'
import "./App.css";
import "./index.css";
import Navbar from './Components/Navbar';
// import Subject from './Components/Subject';
import student_img from './Components/images/img4.png';
import LandingPage from './Components/LandingPage';

export default function App() {
  return (
    <>
      {/* Home Page */}
      {/* <Subject title="Data Communication and Networking" desc="nothing just study" />  */}
      <div className="home-page">
        <Navbar />
        <LandingPage />
        
      </div>
    </>
  )
}
