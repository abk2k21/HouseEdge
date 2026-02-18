import React from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const defaultLocations = [
  {
    id: "1",
    name: "Kochi",
    description: "Luxury residences and commercial spaces in the heart of Kerala",
    cover_image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80",
  },
  {
    id: "2",
    name: "Thrissur",
    description: "Traditional meets modern in our heritage-inspired designs",
    cover_image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    id: "3",
    name: "Trivandrum",
    description: "Coastal elegance with contemporary architectural marvels",
    cover_image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    id: "4",
    name: "Calicut",
    description: "Blending Malabar charm with modern sophistication",
    cover_image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
];

export default function LocationsSection() {
  return (
    <section id="locations" className="py-5" style={{ backgroundColor: "#1a1a1a" }}>
      <div className="container py-lg-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <span style={{ color: "#c9a962", letterSpacing: "0.3em", fontSize: "0.75rem" }}>OUR PRESENCE</span>
          <h2 className="mt-3 fw-light text-white">Project Locations</h2>
          <p className="text-white-50 mx-auto" style={{ maxWidth: 640 }}>
            Transforming spaces across Kerala with our signature blend of elegance and functionality
          </p>
          <div className="mx-auto mt-3" style={{ width: 64, height: 1, backgroundColor: "#c9a962" }} />
        </motion.div>

        <div className="row g-4">
          {defaultLocations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="col-md-6"
            >
              <div className="position-relative overflow-hidden" style={{ height: 320 }}>
                <div
                  className="position-absolute top-0 start-0 end-0 bottom-0"
                  style={{
                    backgroundImage: `url(${location.cover_image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="position-absolute top-0 start-0 end-0 bottom-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,.8), rgba(0,0,0,.3), transparent)" }} />

                <div className="position-absolute top-0 start-0 end-0 bottom-0 p-4 d-flex flex-column justify-content-end text-white">
                  <div className="d-flex align-items-center gap-2 mb-2" style={{ color: "#c9a962" }}>
                    <MapPin size={16} strokeWidth={1.5} />
                    <span style={{ fontSize: "0.75rem", letterSpacing: "0.2em" }}>KERALA</span>
                  </div>

                  <h3 className="fw-light mb-2">{location.name}</h3>
                  <p className="text-white-50 mb-3" style={{ maxWidth: 420 }}>{location.description}</p>

                  <Link
                    to={`/gallery?location=${location.id}`}
                    className="d-inline-flex align-items-center gap-2 text-decoration-none"
                    style={{ color: "#c9a962" }}
                  >
                    <span style={{ fontSize: "0.85rem", letterSpacing: "0.08em" }}>View Projects</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
