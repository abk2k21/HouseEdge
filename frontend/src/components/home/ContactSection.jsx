import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-5" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container py-lg-5">
        <div className="row g-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-lg-6"
          >
            <span style={{ color: "#c9a962", letterSpacing: "0.3em", fontSize: "0.75rem" }}>GET IN TOUCH</span>
            <h2 className="mt-3 fw-light" style={{ color: "#1a1a1a" }}>Let&apos;s Create Something Beautiful</h2>
            <div className="mt-3" style={{ width: 64, height: 1, backgroundColor: "#c9a962" }} />

            <p className="mt-4" style={{ color: "#666", maxWidth: 560 }}>
              Ready to transform your space? We&apos;d love to hear about your project. Reach out to us and let&apos;s bring your vision to life.
            </p>

            <div className="mt-4 d-flex flex-column gap-4">
              <a href="tel:+918848005218" className="d-flex align-items-center gap-3 text-decoration-none text-dark">
                <div className="d-flex align-items-center justify-content-center" style={{ width: 48, height: 48, backgroundColor: "#1a1a1a" }}>
                  <Phone size={20} className="text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="mb-0" style={{ fontSize: "0.8rem", color: "#999", letterSpacing: "0.08em" }}>Call Us</p>
                  <p className="mb-0">+91 8848 005 218</p>
                  <p className="mb-0">+91 8943 475 218</p>
                </div>
              </a>

              <a href="mailto:housedgebuilders@gmail.com" className="d-flex align-items-center gap-3 text-decoration-none text-dark">
                <div className="d-flex align-items-center justify-content-center" style={{ width: 48, height: 48, backgroundColor: "#1a1a1a" }}>
                  <Mail size={20} className="text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="mb-0" style={{ fontSize: "0.8rem", color: "#999", letterSpacing: "0.08em" }}>Email Us</p>
                  <p className="mb-0">housedgebuilders@gmail.com</p>
                </div>
              </a>

              <div className="d-flex align-items-center gap-3">
                <div className="d-flex align-items-center justify-content-center" style={{ width: 48, height: 48, backgroundColor: "#1a1a1a" }}>
                  <MapPin size={20} className="text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="mb-0" style={{ fontSize: "0.8rem", color: "#999", letterSpacing: "0.08em" }}>Based In</p>
                  <p className="mb-0">Kerala, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-lg-6"
          >
            <div className="position-relative p-4 p-md-5 h-100 d-flex flex-column justify-content-between" style={{ backgroundColor: "#1a1a1a", minHeight: 400 }}>
              <div>
                <h3 className="text-white fw-light">Start Your Project Today</h3>
                <p className="text-white-50 mt-3">
                  Whether it&apos;s a complete home renovation or a simple room makeover, our team is ready to help you create the perfect space.
                </p>
              </div>

              <div className="mt-4">
                <a
                  href="https://wa.me/918848005218?text=Hi%20housedge%2C%20I%20would%20like%20to%20discuss%20my%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn d-inline-flex align-items-center gap-2"
                  style={{ backgroundColor: "#c9a962", color: "#1a1a1a" }}
                >
                  <span>WHATSAPP US</span>
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
