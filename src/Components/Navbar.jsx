import { React, useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/all";
import menu_close from "./images/close.svg";
import open_menu from "./images/menu.svg";
import home_icon from "./images/home.svg";
import about from "./images/about.svg";
import notes from "./images/notes.svg";
import contact from "./images/contacts.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();

  console.log("Current User", user);
  gsap.registerPlugin(TextPlugin);

  const nameRef = useRef();

  const [nameText, setNameText] = useState("Study From?");

  useEffect(() => {
    if (nameRef.current) {
      gsap.to(nameRef.current, {
        duration: 1,
        x: 20,
        opacity: 0.5,
        onComplete: () => {
          if (nameRef.current) {
            nameRef.current.textContent = ""; // Ensure element exists before modifying

            gsap.to(nameRef.current, {
              duration: 2,
              text: "iNOTES",
              opacity: 1,
              ease: "power1.inOut",
            });

            setNameText("iNOTES");
          }
        },
      });
    }
  }, []); // Runs only once on mount

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
            <li onClick={closeSidebar} className="gap-3">
              <img src={menu_close} alt="close" className="sidebyside" />
              Close
            </li>
            <li>
              <Link to="/" className="gap-3" onClick={closeSidebar}>
                <img src={home_icon} alt="home" className="sidebyside" />
                Home
              </Link>
            </li>
            <li>
              <Link to="/notes" className="gap-3" onClick={closeSidebar}>
                <img src={notes} alt="about" className="sidebyside" />
                Notes
              </Link>
            </li>
            <li>
              <Link to="/about" className="gap-3" onClick={closeSidebar}>
                <img src={about} alt="about" className="sidebyside" />
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="gap-3" onClick={closeSidebar}>
                <img src={contact} alt="about" className="sidebyside" />
                Contact Me
              </Link>
            </li>
            {isAuthenticated ? (
              <Link to="/profile">
                <button className="btn btn-dark lastspan hideOnMobile">
                  Profile
                </button>
              </Link>
            ) : (
              <div className="d-flex gap-1 flex-wrap">
                <button className="btn btn-dark lastelement">
                  <Link to="signup" onClick={closeSidebar} className="btn-dark">
                    Sign Up
                  </Link>
                </button>
                <button className="btn btn-dark lastelement">
                  <Link to="login" onClick={closeSidebar} className="btn-dark">
                    Login
                  </Link>
                </button>
              </div>
            )}
          </ul>
          <div className="main-logo">
            <span ref={nameRef} className="myName">
              {nameText}
            </span>
          </div>
          <div className="li mr-auto">
            <Link to="/" className="hideOnMobile">
              Home
            </Link>
            <Link to="/notes" className="hideOnMobile">
              Notes
            </Link>
            <Link to="/about" className="hideOnMobile">
              About
            </Link>
            <Link to="/contact" className="hideOnMobile">
              Contact Me
            </Link>
          </div>
          {isAuthenticated ? (
            <Link to="/profile">
              <button className="btn btn-dark lastspan hideOnMobile">
                Profile
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button
                className="btn btn-dark lastspan hideOnMobile"
                onClick={() => loginWithRedirect()}
              >
                Login
              </button>
            </Link>
          )}
          <li className="menu-btn" onClick={showSidebar}>
            <Link to="#">
              <img src={open_menu} alt="menu" />
            </Link>
          </li>
        </nav>
      </header>
    </>
  );
}
