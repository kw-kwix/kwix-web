import { Routes, Route, Link } from "react-router-dom";

import "./bootstrap.css";
import "./styles.css";
import "./fontawesome-all.css";

import { Home } from "./Home";
import { Input } from "./Input";
import { Login } from "./Login";

export function Main() {
  return (
    <div data-spy="scroll" data-target=".fixed-top">
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
        <div className="container">
          <Link to="/" className="navbar-brand logo-text page-scroll">
            KWIX
          </Link>
          <button
            className="navbar-toggler p-0 border-0"
            type="button"
            data-toggle="offcanvas"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="navbar-collapse offcanvas-collapse"
            id="navbarsExampleDefault"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#header">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#services">
                  Services
                </a>
              </li>

              <li className="nav-item">
                <Link to="/login" className="nav-link page-scroll">
                  login
                </Link>
              </li>
            </ul>
            <span className="nav-item social-icons">
              <span className="fa-stack">
                <a href="#your-link">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-facebook-f fa-stack-1x"></i>
                </a>
              </span>
              <span className="fa-stack">
                <a href="#your-link">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-twitter fa-stack-1x"></i>
                </a>
              </span>
            </span>
          </div>
        </div>
      </nav>

      <header id="header" className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-container">
                <h1 className="h1-large">
                  Human activity recognition and recommendation system
                </h1>
                <Link to="/input" className="btn-solid-lg page-scroll">
                  Start
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div id="services" className="basic-2">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/input" element={<Input />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>

      <div className="footer bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-12"></div>
          </div>
        </div>
      </div>

      <div className="copyright bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="p-small">
                Copyright ©{" "}
                <a className="no-line" href="#your-link">
                  KWIX
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="p-small">
                Distributed By{" "}
                <a className="no-line" href="https://themewagon.com/">
                  Themewagon
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
