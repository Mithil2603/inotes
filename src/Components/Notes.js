import React from 'react'
import './Notes.css';
import { Link } from "react-router-dom";

export default function Notes() {
  return (
    <>
      <div className="container">
        <h1 className='text-center mb-5'>Sem 5 Notes</h1>
        <div className="d-flex align-items-center flex-wrap gap-3 justify-content-space-around">
          <div class="card text-center">
            <div class="card-header">
              Featured
            </div>
            <div class="card-body">
              <h5 class="card-title">Internal Exam Papers with Solution</h5>
              <p class="card-text">BCA CIA1 and CIA2 papers, click below button to choose.</p>
              {/* <Link href="#" class="btn btn-primary">Go somewhere</Link> */}
              <button class="btn btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">View Papers</button>
              <div class="offcanvas offcanvas-start bg-dark text-light" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel"><b>CIA1 and CIA2 Papers with Solution</b></h5>
                  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                  <ul class="list-group">
                    <li class="list-group-item active1" aria-current="true">CIA1 Papers with Solution</li>
                    <Link to="/cia1linux"><li class="list-group-item secondary-color">Linux [BCA-5501]</li></Link>
                    <Link to="/cia1php"><li class="list-group-item secondary-color">PHP [BCA-5502]</li></Link>
                    <Link to="/cia1dcn"><li class="list-group-item secondary-color">DCN [BCA-5503]</li></Link>
                  </ul>
                  <ul class="list-group mt-5">
                  <li class="list-group-item active1" aria-current="true">CIA2 Papers with Solution</li>
                    <Link to="/cia2mis"><li class="list-group-item secondary-color">MIS [FC-5033]</li></Link>
                    <Link to="/cia2linux"><li class="list-group-item secondary-color">Linux [BCA-5501]</li></Link>
                    <Link to="/cia2dcn" class=""><li class="list-group-item secondary-color">DCN [BCA-5503]</li></Link>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card-footer">
              From Current Year 2024
            </div>
          </div>
          <div class="card">
            <img src="https://res.cloudinary.com/drpcouvle/image/upload/v1730194143/dcn_wd0rqp.jpg" class="card-img-top" alt="Data Communication and Networking" />
            <div class="card-body">
              <h5 class="card-title"><b>Data Communication and Networking</b></h5>
              <p class="card-text">Data communication is the process of transferring data between two or more devices, while networking is the connection between those devices.</p>
              <Link to="/dcn" class="btn btn-dark">View Notes</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
