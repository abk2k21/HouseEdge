import React from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const defaultLocations = [
  {
    id: "1",
    name: "Thiruvananthapuram",
    description: "Coastal elegance with contemporary architectural marvels",
    cover_image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    id: "2",
    name: "Kollam",
    description: "Lakeside charm meeting modern living spaces",
    cover_image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
  },
  {
    id: "3",
    name: "Pathanamthitta",
    description: "Hillside retreats with serene architectural designs",
    cover_image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
  },
  {
    id: "4",
    name: "Alappuzha",
    description: "Backwater beauty with elegant residential projects",
    cover_image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
  },
  {
    id: "5",
    name: "Kottayam",
    description: "Heritage meets contemporary in our signature designs",
    cover_image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
  },
  {
    id: "6",
    name: "Idukki",
    description: "Mountain homes blending nature with modern comfort",
    cover_image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
  },
  {
    id: "7",
    name: "Ernakulam",
    description: "Luxury residences and commercial spaces in the heart of Kerala",
    cover_image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80",
  },
  {
    id: "8",
    name: "Thrissur",
    description: "Traditional meets modern in our heritage-inspired designs",
    cover_image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    id: "9",
    name: "Palakkad",
    description: "Gateway to Kerala with elegant architectural solutions",
    cover_image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    id: "10",
    name: "Malappuram",
    description: "Crafting modern homes with cultural sensitivity",
    cover_image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
  },
  {
    id: "11",
    name: "Kozhikode",
    description: "Blending Malabar charm with modern sophistication",
    cover_image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
  },
  {
    id: "12",
    name: "Wayanad",
    description: "Eco-friendly designs amidst nature paradise",
    cover_image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
  {
    id: "13",
    name: "Kannur",
    description: "Coastal living with contemporary elegance",
    cover_image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
  },
  {
    id: "14",
    name: "Kasaragod",
    description: "Northern beauty with innovative architectural designs",
    cover_image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80",
  },
];

export function LocationsPage() {
  return (
    <div style={{ backgroundColor: "#fafafa" }}>
      <section className="py-5" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="container text-center py-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span style={{ color: "#c9a962", letterSpacing: "0.3em", fontSize: "0.75rem" }}>OUR PRESENCE</span>
            <h1 className="mt-3 text-white fw-light">Project Locations</h1>
            <p className="mt-3 text-white-50 mx-auto" style={{ maxWidth: 760 }}>
              Transforming spaces across Kerala with our signature blend of elegance and functionality.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {defaultLocations.map((location, index) => (
              <motion.div
                key={location.id}
                className="col-md-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.28, delay: index * 0.02 }}
              >
                <div className="position-relative overflow-hidden" style={{ height: 420 }}>
                  <img src={location.cover_image} alt={location.name} className="w-100 h-100 object-fit-cover" />
                  <div className="position-absolute top-0 start-0 end-0 bottom-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3))" }} />
                  <div className="position-absolute bottom-0 start-0 p-4 text-white w-100">
                    <div className="d-flex align-items-center gap-2 mb-2" style={{ color: "#c9a962" }}>
                      <MapPin size={16} strokeWidth={1.5} />
                      <span className="small">Kerala</span>
                    </div>
                    <h3 className="fw-light mb-2" style={{ minHeight: 38 }}>{location.name}</h3>
                    <p className="text-white-50 mb-3" style={{ minHeight: 48 }}>{location.description}</p>
                    <Link to={`/gallery?location=${location.id}`} className="text-decoration-none" style={{ color: "#c9a962" }}>
                      <span className="me-2">View Projects</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
