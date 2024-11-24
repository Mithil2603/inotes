import React from "react";
import "./Notes.css";
import { Link } from "react-router-dom";

export default function Notes() {
  return (
    <>
      <div className="container">
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
        <h1 className="text-center mb-5">Sem 6 Notes</h1>
        <div className="d-flex align-items-center flex-wrap gap-3 justify-content-space-around mb-5">
          <div class="card">
            <img
              src="https://www.pragimtech.com/wp-content/uploads/2019/02/asp.net_.jpg"
              class="card-img-top"
              alt="asp.net"
            />
            <div class="card-body">
              <h5 class="card-title">
                <b>Web-Site Development- 1 (ASP.NET)</b>
              </h5>
              <p class="card-text">
                ASP.NET is an open source web framework, created by Microsoft,
                for building modern web apps and services with . NET. ASP.NET is
                cross platform and runs on Linux, Windows, macOS, and Docker.
              </p>
              <Link to="/asp" class="btn btn-dark">
                View Notes
              </Link>
            </div>
          </div>
          <div class="card">
            <img
              src="https://datascientest.com/en/files/2024/04/database-admin.webp"
              class="card-img-top"
              alt="Database Administrator"
            />
            <div class="card-body">
              <h5 class="card-title">
                <b>
                  Database <br />
                  Administrator
                </b>
              </h5>
              <p class="card-text">
                A database administrator, or DBA, is responsible for
                maintaining, securing, and operating databases and also ensures
                that data is correctly stored and retrieved. In addition, DBAs
                often work with developers to design and implement new features
                and troubleshoot any issues.
              </p>
              <Link to="/da" class="btn btn-dark">
                View Notes
              </Link>
            </div>
          </div>
          <div class="card">
            <img
              src="https://devblogs.microsoft.com/python/wp-content/uploads/sites/12/2018/08/pythonfeature.png"
              class="card-img-top"
              alt="Python"
            />
            <div class="card-body">
              <h5 class="card-title">
                <b>Python for Big Data & Machine Learning</b>
              </h5>
              <p class="card-text">
                Python is one of the most popular programming languages today,
                known for its simplicity and ease of use. Whether you're just
                starting with coding or looking to pick up another language,
                Python is an excellent choice. Its clean and straightforward
                syntax makes it beginner-friendly, while its powerful libraries
                and frameworks are perfect for advanced projects.
              </p>
              <Link to="/python" class="btn btn-dark">
                View Notes
              </Link>
            </div>
          </div>
          <div class="card">
            <img
              src="https://www.gbb.co.in/wp-content/uploads/2017/02/Firewall-companies-in-hyderabad.png"
              class="card-img-top"
              alt="Information and Network Security"
            />
            <div class="card-body">
              <h5 class="card-title">
                <b>Information and Network Security</b>
              </h5>
              <p class="card-text">
                Information and network security are important for protecting
                sensitive data and ensuring that networks are usable and
                trustworthy.
              </p>
              <Link to="/inf" class="btn btn-dark">
                View Notes
              </Link>
            </div>
          </div>
          <div class="card">
            <img
              src="https://images.ctfassets.net/wowgx05xsdrr/1WucJn2iYf5gxUtBVRi0DR/3e0697cc62700a07739a11c88c5c75ec/article-headers-illustration-computer-store-seo-generic.png"
              class="card-img-top"
              alt="Digital Commerce"
            />
            <div class="card-body">
              <h5 class="card-title">
                <b>
                  Digital
                  <br />
                  Commerce
                </b>
              </h5>
              <p class="card-text">
                Digital commerce is the process of buying and selling products
                and services online, and the entire ecosystem that enables it.
                It includes the people, processes, and technologies that support
                the customer journey, from discovery to purchase and beyond.
              </p>
              <Link to="/dc" class="btn btn-dark">
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
