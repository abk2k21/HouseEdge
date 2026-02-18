import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const defaultGalleryImages = [
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
  "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
];

export default function GalleryPreview() {
  return (
    <section id="gallery" className="py-5 bg-white">
      <div className="container py-lg-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="d-flex flex-column flex-md-row align-items-md-end justify-content-between mb-5"
        >
          <div>
            <span style={{ color: "#c9a962", letterSpacing: "0.3em", fontSize: "0.75rem" }}>OUR WORK</span>
            <h2 className="mt-3 fw-light" style={{ color: "#1a1a1a" }}>Featured Projects</h2>
          </div>

          <Link to="/gallery" className="mt-3 mt-md-0 d-inline-flex align-items-center gap-2 text-decoration-none" style={{ color: "#1a1a1a" }}>
            <span style={{ fontSize: "0.85rem", letterSpacing: "0.08em" }}>View All Projects</span>
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        <div className="home-gallery-grid">
          {defaultGalleryImages.map((image, index) => (
            <motion.div
              key={`preview-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`home-gallery-item ${index === 0 ? "home-gallery-item--featured" : ""}`}
            >
              <div
                className="position-relative overflow-hidden"
                style={{
                  height: "100%",
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="position-absolute top-0 start-0 end-0 bottom-0" style={{ backgroundColor: "rgba(0,0,0,0)", transition: "background-color .3s" }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
