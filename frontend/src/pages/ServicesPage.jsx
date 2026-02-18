import React from "react";
import { motion } from "framer-motion";
import { Paintbrush, Building2, TreePine, Sofa, House } from "lucide-react";

const services = [
  {
    icon: Paintbrush,
    title: "Interior Design",
    description:
      "Transforming spaces into stunning reflections of your personality with meticulous attention to detail.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    features: ["Space Planning", "Color Consultation", "Furniture Selection", "Custom Designs"],
  },
  {
    icon: Building2,
    title: "Construction",
    description:
      "Building dreams from the ground up with precision engineering and superior craftsmanship.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    features: ["New Construction", "Renovations", "Extensions", "Structural Work"],
  },
  {
    icon: TreePine,
    title: "Landscape",
    description:
      "Creating outdoor sanctuaries that blend natural beauty with architectural elegance.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    features: ["Garden Design", "Hardscaping", "Irrigation Systems", "Outdoor Lighting"],
  },
  {
    icon: Sofa,
    title: "Interior Work",
    description:
      "Expert finishing and furnishing that brings cohesion and comfort to every corner.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    features: ["Flooring", "Wall Treatments", "Ceiling Work", "Custom Carpentry"],
  },
  {
    icon: House,
    title: "Roofing",
    description:
      "Protecting your investment with durable, aesthetically pleasing roofing solutions.",
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=800&q=80",
    features: ["Roof Installation", "Repairs", "Waterproofing", "Maintenance"],
  },
];

export function ServicesPage() {
  return (
    <div style={{ backgroundColor: "#fafafa" }}>
      <section className="py-5" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="container text-center py-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span style={{ color: "#c9a962", letterSpacing: "0.3em", fontSize: "0.75rem" }}>WHAT WE DO</span>
            <h1 className="mt-3 text-white fw-light">Our Services</h1>
            <p className="mt-3 text-white-50">Comprehensive solutions for your construction and design needs.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="d-flex flex-column gap-5">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="row g-4 align-items-center"
              >
                <div className={`col-lg-6 ${index % 2 === 1 ? "order-lg-2" : ""}`}>
                  <div className="position-relative overflow-hidden" style={{ minHeight: 320 }}>
                    <img src={service.image} alt={service.title} className="w-100 h-100 object-fit-cover" />
                    <div className="position-absolute bottom-0 start-0 p-3">
                      <div className="d-flex align-items-center justify-content-center" style={{ width: 56, height: 56, backgroundColor: "#c9a962" }}>
                        <service.icon size={28} className="text-white" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`col-lg-6 ${index % 2 === 1 ? "order-lg-1" : ""}`}>
                  <h2 className="fw-light mb-3">{service.title}</h2>
                  <p className="text-secondary mb-4">{service.description}</p>
                  <h6 style={{ color: "#c9a962", letterSpacing: "0.08em" }}>KEY FEATURES</h6>
                  <ul className="mb-0">
                    {service.features.map((feature) => (
                      <li key={feature} className="mb-1 text-secondary">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
