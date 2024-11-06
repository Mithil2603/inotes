import React from 'react'
import './Notes.css';
import { Link } from "react-router-dom";

export default function Notes() {
  return (
    <>
      <div className="container">
        <h1 className='text-center'>Sem 5 Notes</h1>
        <div class="card">
          <img src="https://res.cloudinary.com/drpcouvle/image/upload/v1730194143/dcn_wd0rqp.jpg" class="card-img-top" alt="Data Communication and Networking" />
            <div class="card-body">
              <h5 class="card-title"><b>Data Communication and Networking</b></h5>
              <p class="card-text">Data communication is the process of transferring data between two or more devices, while networking is the connection between those devices.</p>
              <Link to="/dcn" class="btn btn-dark">View Notes</Link>
            </div>
        </div>
      </div>
    </>
  )
}
