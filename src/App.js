import React from 'react';
import "./App.css";
import "./index.css";
import Navbar from './Components/Navbar';
// import Subject from './Components/Subject';
import LandingPage from './Components/LandingPage';
import Notes from './Components/Notes';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from './Components/About';
import Contact from './Components/Contact';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import DcnNotes from './Components/DcnNotes';

export default function App() {
  return (
    <>
      <Router>
          <Navbar />
          <Routes basename='/inotes'>
            <Route path="/inotes" element={<LandingPage />} />
            <Route path="/notes" element={<Notes />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/inotes/dcn' element={<DcnNotes />} />
          </Routes>
      </Router>
    </>
  )
}