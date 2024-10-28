import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { TextPlugin } from 'gsap/all';
import menu_close from "./images/close.svg";
import open_menu from "./images/menu.svg";
import home_icon from "./images/home.svg";
import about from './images/about.svg';
import notes from './images/notes.svg';
import contact from './images/contacts.svg';
import "./Navbar.css";

export default function Navbar() {
  // gsap.registerPlugin(TextPlugin);

  // const nameRef = useRef();

  // const [nameText, setNameText] = useState("Study From?");

  // useEffect(() => {
  //   gsap.to(nameRef.current, {
  //     delay: 1,
  //     duration: 2,
  //     text: {
  //       value: "iNOTES",
  //       // delimiter: "",
  //       oldClass: "start",
  //       newClass: "end",
  //     },
  //     onComplete: () => {
  //       // Animation complete; update state
  //       setNameText("iNOTES");
  //     },
  //   });
  // }, []);

  function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
  }

  function closeSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
  }
  return (
    <>
      <header>
        <nav className="d-flex justify-content-between align-items-center">
          <ul className="sidebar">
            <li onClick={closeSidebar}>
              <a href="#" className="gap-3">
                <img src={menu_close} alt="close" className="sidebyside" />
                Close
              </a>
            </li>
            <li>
              <a href="/" className="gap-3">
                <img src={home_icon} alt="home" className="sidebyside" />
                Home
              </a>
            </li >
            <li>
              <a href="/" className="gap-3">
                <img src={notes} alt="about" className="sidebyside" />
                Notes
                </a>
            </li>
            <li>
              <a href="/" className="gap-3">
                <img src={about} alt="about" className="sidebyside" />
                About
                </a>
            </li>
            <li>
              <a href="/" className="gap-3">
                <img src={contact} alt="about" className="sidebyside" />
                Contact Me</a>
            </li>
            <button className='btn btn-dark lastelement'>Sign Up</button>
          </ul>
          <div className="main-logo">
            <span className="myName">iNOTES</span>
          </div>
          <div className="li mr-auto">
            <a href="/" className="hideOnMobile">
              Home
            </a>
            <a href="/" className="hideOnMobile">
              Notes
            </a>
            <a href="/" className="hideOnMobile">
              About
            </a>
            <a href="/" className="hideOnMobile">
              Contact Me
            </a>
          </div>
          <div>
            <button className='btn btn-dark lastspan hideOnMobile'>Sign Up</button>
          </div>
            <li className="menu-btn" onClick={showSidebar}>
              <a href="#">
                <img src={open_menu} alt="menu" />
              </a>
            </li>
        </nav>
      </header>
    </>
  );
}
