import React from "react";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div className="bg-white">
      <section className="py-5 text-white" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="container py-4 text-center">
          <h1 className="display-5 fw-light">HomeEdge</h1>
          <p className="lead text-white-50 mx-auto" style={{ maxWidth: 700 }}>
            Design, build, and transform spaces with our complete range of services.
          </p>
          <Link to="/services" className="btn mt-2" style={{ backgroundColor: "#c9a962", color: "#1a1a1a" }}>
            Explore Services
          </Link>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h5>Services</h5>
                  <p className="text-secondary">Interior design, construction, landscape, and more.</p>
                  <Link to="/services" className="btn btn-outline-dark btn-sm">View</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h5>Locations</h5>
                  <p className="text-secondary">Projects delivered across key locations in Kerala.</p>
                  <Link to="/locations" className="btn btn-outline-dark btn-sm">View</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h5>Gallery</h5>
                  <p className="text-secondary">See our recent project work and curated portfolio.</p>
                  <Link to="/gallery" className="btn btn-outline-dark btn-sm">View</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h5>Contact</h5>
                  <p className="text-secondary">Reach out for consultations and project planning.</p>
                  <Link to="/contact" className="btn btn-outline-dark btn-sm">View</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
