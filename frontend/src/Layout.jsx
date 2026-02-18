import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

export function Layout() {
  const [search, setSearch] = React.useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const term = search.trim();
    if (!term) return;

    // Always navigate to the global search page with query param
    navigate(`/search?q=${encodeURIComponent(term)}`);
  };

  return (
    <>
      <header id="main-header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              <img width="100" src="/images/logo.png" alt="OSAI Logo" />
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

              {/* NAV SEARCH */}
              <form className="nav-search d-flex me-3" onSubmit={handleSearchSubmit}>
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search products…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button className="btn profile-btn ms-2" type="submit">
                  Search
                </button>
              </form>

              <div className="d-flex align-items-center gap-3">
                <NavLink to="/login" className="btn btn-outline-light profile-btn">
                  <i className="bi bi-person-circle" /> Login / Profile
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main aria-live="polite">
        <Outlet />
      </main>

      <footer className="bg-dark text-light mt-5 pt-4 pb-4 text-center">
        <h4>Contact Us</h4>
        <p>Bringing authentic and stylish clothing to your wardrobe.</p>
        <p>Find us at 134a Aston Road, Birmingham, United Kingdom</p>
        <p>
          Email:{" "}
          <a className="text-warning" href="mailto:240365581@aston.ac.uk">
            OSAI@aston.ac.uk
          </a>
        </p>

        <hr className="border-light" />
        <p className="mb-0">
          &copy; {new Date().getFullYear()} OSAI Fashion. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}