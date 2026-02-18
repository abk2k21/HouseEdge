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
  },
  {
    icon: Building2,
    title: "Construction",
    description:
      "Building dreams from the ground up with precision engineering and superior craftsmanship.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
  },
  {
    icon: TreePine,
    title: "Landscape",
    description:
      "Creating outdoor sanctuaries that blend natural beauty with architectural elegance.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    icon: Sofa,
    title: "Interior Work",
    description:
      "Expert finishing and furnishing that brings cohesion and comfort to every corner.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
  },
  {
    icon: House,
    title: "Roofing",
    description:
      "Protecting your investment with durable, aesthetically pleasing roofing solutions.",
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=800&q=80",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-5" style={{ backgroundColor: "#fafafa" }}>
      <div className="container py-lg-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <span style={{ color: "#c9a962", letterSpacing: "0.3em", fontSize: "0.75rem" }}>WHAT WE DO</span>
          <h2 className="mt-3 fw-light" style={{ color: "#1a1a1a" }}>Our Expertise</h2>
          <div className="mx-auto mt-3" style={{ width: 64, height: 1, backgroundColor: "#c9a962" }} />
        </motion.div>

        <div className="row g-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`col-md-6 col-lg-4 ${index === 4 ? "md:col-span-2" : ""}`}
            >
              <div className="h-100 bg-white shadow-sm overflow-hidden">
                <div className="position-relative" style={{ height: 224 }}>
                  <div
                    className="position-absolute top-0 start-0 end-0 bottom-0"
                    style={{
                      backgroundImage: `url(${service.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="position-absolute top-0 start-0 end-0 bottom-0" style={{ background: "linear-gradient(to top, #1a1a1a, transparent)", opacity: 0.6 }} />
                  <div className="position-absolute" style={{ left: 16, bottom: 16, width: 48, height: 48, backgroundColor: "#c9a962" }}>
                    <div className="d-flex align-items-center justify-content-center w-100 h-100">
                      <service.icon className="text-white" size={24} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="h5 mb-3" style={{ color: "#1a1a1a" }}>{service.title}</h3>
                  <p className="mb-0" style={{ color: "#666", fontSize: "0.95rem" }}>{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
