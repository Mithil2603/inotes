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
import Cia2DCN from './Components/Cia2DCN';
import Cia1Linux from './Components/Cia1Linux';
import Cia2Linux from './Components/Cia2Linux';
import Cia2MIS from './Components/Cia2MIS';
import Cia1PHP from './Components/Cia1PHP';
import MisNotes from './Components/MisNotes';


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
          <Route path='/mis' element={<MisNotes />} />
          
          <Route path='/cia1linux' element={<Cia1Linux />} />
          <Route path='/cia1php' element={<Cia1PHP />} />
          <Route path='/cia1dcn' element={<Cia1DCN />} />

          <Route path='/cia2mis' element={<Cia2MIS />} />
          <Route path='/cia2dcn' element={<Cia2DCN />} />
          <Route path='/cia2linux' element={<Cia2Linux />} />
        </Routes>
        <MyFooter />
      </Router>
    </>
  )
}