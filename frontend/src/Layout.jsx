import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <header id="main-header">
        <nav className="navbar navbar-expand-lg navbar-dark py-1" style={{ backgroundColor: "#1a1a1a" }}>
          <div className="container-fluid px-3 px-lg-5">
            <NavLink className="navbar-brand" to="/">
              <img width="117" src="/images/logo.png" alt="HouseEdge Logo" />
            </NavLink>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/services">
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/locations">
                    Locations
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/gallery">
                    Gallery
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main aria-live="polite">
        <Outlet />
      </main>

      <footer className="bg-dark text-light mt-5 pt-4 pb-4 text-center">
        <h4>Contact Us</h4>
        <p>Ready to transform your space? We&apos;d love to hear about your project.</p>
        <p className="mb-1">Based In: Kerala, India</p>
        <p className="mb-1">
          Call: <a className="text-warning" href="tel:+918848005218">+91 8848 005 218</a> /{" "}
          <a className="text-warning" href="tel:+918943475218">+91 8943 475 218</a>
        </p>
        <p>
          Email:{" "}
          <a className="text-warning" href="mailto:houseedgebuilders@gmail.com">
            houseedgebuilders@gmail.com
          </a>
        </p>

        <hr className="border-light" />
        <p className="mb-0">
          &copy; {new Date().getFullYear()} HouseEdge. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}