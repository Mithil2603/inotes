import React from 'react';
import { useState, useEffect } from 'react';
import mylogo from './images/Book.svg'
import { Link } from 'react-router-dom';
import "../App.css"
import "./Navbar.css"

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update current year on component mount
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bd-footer py-4 py-md-5 footer-color">
      <div className="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
        <div className="row justify-content-center white">
          <div className="col-lg-3 mb-3">
            <Link className="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none" to="/" aria-label="iNotes">
              <img src={mylogo} alt="site-logo" width="60"/>
              <span className="fs-5 mx-3 myName white">iNotes</span>
            </Link>
            <ul className="list-unstyled small">
              <li className="mb-2">Designed and built for the SEM 5 Students of BCA & BSC CS by <a href="https://linkedin.com/in/sutharmithil">Mithil Suthar</a>.</li>
              <li className="mb-2">Copyright &copy; by <a href="https://linkedin.com/in/sutharmithil">Mithil Suthar</a><br></br>Webpage <a href="https://mithil2603.github.io/misblog/">iNOTES</a> | 2024 - <span id='copyright'>{currentYear}</span></li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 offset-lg-1 mb-3">
            <h5>Current Links</h5>
            <ul className="list-unstyled">
              <Link className="mb-2" to="/">Home</Link><br />
              {/* <Link className="mb-2" to="/php">PHP</Link><br />
              <Link className="mb-2" to="/basicfunctionsmanagement">Management Information System</Link><br /> */}
              <Link className="mb-2" to="/dcn">Data Communication & Networking</Link><br />
            </ul>
          </div>
          <div className="col-6 col-lg-2 mb-3">
            <h5>My Projects</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="https://mithil2603.github.io/Currency_Exchange/">Currency Exchanger</a></li>
              <li className="mb-2"><a href="https://mithil2603.github.io/misblog/">iNotes</a></li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 mb-3">
            <h5>Contact Me</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="https://linkedin.com/in/sutharmithil">LinkedIn Profile</a></li>
              <li className="mb-2"><a href="https://www.instagram.com/mithil__suthar/">Instagram Account</a></li>
              <li className="mb-2"><a href="https://github.com/Mithil2603">Github Account</a></li>
              <li className="mb-2"><a href="https://www.snapchat.com/add/mithil_suthar?share_id=DFU1Zrwk3IE&locale=en-US">Snapchat Account</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
