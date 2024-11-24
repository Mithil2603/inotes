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
import Linux from './Components/Linux';
import LinuxCommands from './Components/LinuxCommands';
import Php from './Components/Php';
import MyFooter from "./Components/MyFooter";
import Cia1DCN from './Components/Cia1DCN';
import Cia2DCN from './Components/Cia2DCN';
import Cia1Linux from './Components/Cia1Linux';
import Cia2Linux from './Components/Cia2Linux';
import Cia2MIS from './Components/Cia2MIS';
import Cia1PHP from './Components/Cia1PHP';
import MisNotes from './Components/MisNotes';
import Cia1MIS from './Components/Cia1MIS';
import SEM5 from './Components/Sem5';
import AspNotes from './Components/AspNotes';
import DA from './Components/DA';
import Python from './Components/Python';
import INF from './Components/INF';
import DC from './Components/DC';


export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes basename='/inotes'>
          <Route path="/" element={<LandingPage />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/notes/sem5" element={<SEM5 />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />

          <Route path='/asp' element={<AspNotes />} />
          <Route path='/da' element={<DA />} />
          <Route path='/python' element={<Python />} />
          <Route path='/inf' element={<INF />} />
          <Route path='/dc' element={<DC />} />

          <Route path='/dcn' element={<DcnNotes />} />
          <Route path='/mis' element={<MisNotes />} />
          <Route path='/php' element={<Php />} />
          <Route path="/linux" element={<Linux />} />
          <Route path="/linux_commands" element={<LinuxCommands />} />
          
          <Route path='/cia1mis' element={<Cia1MIS />} />
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