import React from "react";
import "./Notes.css";
import { Link } from "react-router-dom";
import php from "./images/PHP-logo.png";
import linux from "./images/linux.jpg";

export default function SEM5() {
  return (
    <>
      <div className="container">
        <h1 className="text-center mb-5">Sem 5 Notes</h1>
        <div className="d-flex align-items-center flex-wrap gap-3 justify-content-space-around mb-5">
          <div class="card text-center">
            <div class="card-header">Featured</div>
            <div class="card-body">
              <h5 class="card-title">Internal Exam Papers with Solution</h5>
              <p class="card-text">
                BCA CIA1 and CIA2 papers, click below button to choose.
              </p>
              {/* <Link href="#" class="btn btn-primary">Go somewhere</Link> */}
              <button
                class="btn btn-dark"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions"
              >
                View Papers
              </button>
              <div
                class="offcanvas offcanvas-start bg-dark text-light"
                data-bs-scroll="true"
                tabindex="-1"
                id="offcanvasWithBothOptions"
                aria-labelledby="offcanvasWithBothOptionsLabel"
              >
                <div class="offcanvas-header">
                  <h5
                    class="offcanvas-title"
                    id="offcanvasWithBothOptionsLabel"
                  >
                    <b>CIA1 and CIA2 Papers with Solution</b>
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="offcanvas-body">
                  <ul class="list-group">
                    <li class="list-group-item active1" aria-current="true">
                      CIA1 Papers with Solution
                    </li>
                    <Link to="/cia1mis">
                      <li class="list-group-item secondary-color">
                        MIS [FC-5033]
                      </li>
                    </Link>
                    <Link to="/cia1linux">
                      <li class="list-group-item secondary-color">
                        Linux [BCA-5501]
                      </li>
                    </Link>
                    <Link to="/cia1php">
                      <li class="list-group-item secondary-color">
                        PHP [BCA-5502]
                      </li>
                    </Link>
                    <Link to="/cia1dcn">
                      <li class="list-group-item secondary-color">
                        DCN [BCA-5503]
                      </li>
                    </Link>
                  </ul>
                  <ul class="list-group mt-5">
                    <li class="list-group-item active1" aria-current="true">
                      CIA2 Papers with Solution
                    </li>
                    <Link to="/cia2mis">
                      <li class="list-group-item secondary-color">
                        MIS [FC-5033]
                      </li>
                    </Link>
                    <Link to="/cia2linux">
                      <li class="list-group-item secondary-color">
                        Linux [BCA-5501]
                      </li>
                    </Link>
                    <Link to="/cia2dcn" class="">
                      <li class="list-group-item secondary-color">
                        DCN [BCA-5503]
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card-footer">From Current Year 2024</div>
          </div>
          <div class="card">
            <img
              src="https://img.freepik.com/premium-vector/mis-management-information-system-concept-with-icon-set-with-big-word-text-center_25156-1323.jpg"
              class="card-img-top"
              alt="Data Communication and Networking"
            />
            <div class="card-body">
              <h5 class="card-title">
                <b>Management Information System</b>
              </h5>
              <p class="card-text">
                A management information system is an information system used
                for decision-making, and for the coordination, control,
                analysis, and visualization of information in an organization.
                The study of the management information systems involves people,
                processes and technology in an organizational context.
              </p>
              <Link to="/mis" class="btn btn-dark">
                View Notes
              </Link>
            </div>
          </div>
          <div class="card">
            <img src={php} class="card-img-top" alt="PHP" />
            <div class="card-body">
              <h5 class="card-title">
                <b>
                  PHP <br />
                  HyperText PreProcessor
                </b>
              </h5>
              <p class="card-text">
                PHP is a general-purpose scripting language geared towards web
                development. It was originally created by Danish-Canadian
                programmer Rasmus Lerdorf in 1993 and released in 1995. The PHP
                reference implementation is now produced by the PHP Group.
              </p>
              <Link to="/php" class="btn btn-dark">
                View Notes
              </Link>
            </div>
          </div>
          <div class="card">
            <img
              src="https://res.cloudinary.com/drpcouvle/image/upload/v1730194143/dcn_wd0rqp.jpg"
              class="card-img-top"
              alt="Data Communication and Networking"
            />
            <div class="card-body">
              <h5 class="card-title">
                <b>Data Communication and Networking</b>
              </h5>
              <p class="card-text">
                Data communication is the process of transferring data between
                two or more devices, while networking is the connection between
                those devices.
              </p>
              <Link to="/dcn" class="btn btn-dark">
                View Notes
              </Link>
            </div>
          </div>
          <div class="card">
            <img src={linux} class="card-img-top" alt="Linux" />
            <div class="card-body">
              <h5 class="card-title">
                <b>
                  Linux <br />
                  Programming
                </b>
              </h5>
              <p class="card-text">
                Linux is a powerful and flexible family of operating systems
                that are free to use and share. It was created by a person named
                Linus Torvalds in 1991. What's cool is that anyone can see how
                the system works because its source code is open for everyone to
                explore and modify. The Linux Operating System is a type of
                operating system that is similar to Unix, and it is built upon
                the Linux Kernel. The Linux Kernel is like the brain of the
                operating system because it manages how the computer interacts
                with its hardware and resources. It makes sure everything works
                smoothly and efficiently.
              </p>
              <Link to="/linux" class="btn btn-dark">
                View Notes
              </Link>
            </div>
          </div>
          <div class="card">
            <img src={linux} class="card-img-top" alt="Linux" />
            <div class="card-body">
              <h5 class="card-title">
                <b>Linux Programming Commands</b>
              </h5>
              <p class="card-text">
                Linux provides a vast set of commands used to operate the
                command-line interface, known as the Terminal, in Linux
                operating systems. These commands are often used in Shell
                scripting.
              </p>
              <Link to="/linux_commands" class="btn btn-dark">
                View Notes
              </Link>
            </div>
          </div>
        </div>
        <div aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item">
              <Link class="page-link" to="/notes">
                SEM6
              </Link>
            </li>
            <li class="page-item">
              <Link class="page-link" to="/notes/sem5">
                SEM5
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
