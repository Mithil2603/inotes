import React from 'react';
import "./App.css";
import "./index.css";
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import Notes from './Components/Notes';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import DcnNotes from './Components/DcnNotes';
import MyFooter from "./Components/MyFooter";
import Cia1DCN from './Components/Cia1DCN';


export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes basename='/inotes'>
          <Route path="/" element={<LandingPage />} />
          <Route path="/notes" element={<Notes />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dcn' element={<DcnNotes />} />
          <Route path='/cia1dcn' element={<Cia1DCN />} />
        </Routes>
        <MyFooter />
      </Router>
    </>
  )
}