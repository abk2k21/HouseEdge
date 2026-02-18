import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <div style={{ backgroundColor: "#fafafa" }}>
      <section className="py-5" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="container text-center py-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span style={{ color: "#c9a962", letterSpacing: "0.3em", fontSize: "0.75rem" }}>
              GET IN TOUCH
            </span>
            <h1 className="mt-3 text-white fw-light">Contact Us</h1>
            <p className="mt-3 text-white-50 mx-auto" style={{ maxWidth: 680 }}>
              Ready to transform your space? We&apos;d love to hear about your project.
            </p>
            <div className="mx-auto mt-3" style={{ width: 64, height: 1, backgroundColor: "#c9a962" }} />
          </motion.div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-5 align-items-stretch">
            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="fw-light mb-4">Let&apos;s Create Something Beautiful</h2>
              <p className="text-secondary mb-5" style={{ maxWidth: 520 }}>
                Whether it&apos;s a complete home renovation or a simple room makeover, our team is
                ready to help you create the perfect space.
              </p>

              <div className="d-flex flex-column gap-4">
                <a href="tel:+918848005218" className="d-flex align-items-center gap-3 text-decoration-none text-dark">
                  <div className="d-flex align-items-center justify-content-center" style={{ width: 56, height: 56, backgroundColor: "#1a1a1a" }}>
                    <Phone size={22} className="text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="mb-1 small text-secondary">Call Us</p>
                    <p className="mb-0">+91 8848 005 218</p>
                    <p className="mb-0">+91 8943 475 218</p>
                  </div>
                </a>

                <a href="mailto:houseedgebuilders@gmail.com" className="d-flex align-items-center gap-3 text-decoration-none text-dark">
                  <div className="d-flex align-items-center justify-content-center" style={{ width: 56, height: 56, backgroundColor: "#1a1a1a" }}>
                    <Mail size={22} className="text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="mb-1 small text-secondary">Email Us</p>
                    <p className="mb-0">houseedgebuilders@gmail.com</p>
                  </div>
                </a>

                <div className="d-flex align-items-center gap-3">
                  <div className="d-flex align-items-center justify-content-center" style={{ width: 56, height: 56, backgroundColor: "#1a1a1a" }}>
                    <MapPin size={22} className="text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="mb-1 small text-secondary">Based In</p>
                    <p className="mb-0">Kerala, India</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="h-100 p-4 p-md-5 d-flex flex-column justify-content-between" style={{ backgroundColor: "#1a1a1a" }}>
                <div>
                  <h3 className="text-white fw-light mb-4">Start Your Project Today</h3>
                  <p className="text-white-50 mb-4">
                    Get in touch with us and let&apos;s discuss how we can bring your vision to life.
                  </p>
                  <ul className="text-white-50 ps-3 mb-0">
                    <li className="mb-2">Free consultation and project assessment</li>
                    <li className="mb-2">Detailed quotations and transparent pricing</li>
                    <li>Professional team with years of experience</li>
                  </ul>
                </div>

                <div className="mt-4">
                  <a
                    href="https://wa.me/918848005218?text=Hi%20HouseEdge%2C%20I%20would%20like%20to%20discuss%20my%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{ backgroundColor: "#c9a962", color: "#1a1a1a" }}
                  >
                    <span className="me-2">WHATSAPP US</span>
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
