import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { useLocation } from "react-router-dom";

const categoryLabels = {
  interior_design: "Interior Design",
  construction: "Construction",
  landscape: "Landscape",
  interior_work: "Interior Work",
  roofing: "Roofing",
};

const defaultProjects = [
  { id: "1", title: "Modern Villa", category: "construction", location_id: "1", images: ["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"] },
  { id: "2", title: "Luxury Living Room", category: "interior_design", location_id: "2", images: ["https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80"] },
  { id: "3", title: "Garden Oasis", category: "landscape", location_id: "3", images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"] },
  { id: "4", title: "Contemporary Kitchen", category: "interior_work", location_id: "4", images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"] },
  { id: "5", title: "Terracotta Roofing", category: "roofing", location_id: "5", images: ["https://images.unsplash.com/photo-1632759145351-1d592919f522?w=800&q=80"] },
  { id: "6", title: "Minimalist Bedroom", category: "interior_design", location_id: "6", images: ["https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80"] },
];

export function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [allImages, setAllImages] = useState([]);
  const location = useLocation();

  const locationFilter = useMemo(() => new URLSearchParams(location.search).get("location"), [location.search]);

  let filteredProjects = defaultProjects;
  if (locationFilter) {
    filteredProjects = filteredProjects.filter((project) => project.location_id === locationFilter);
  }
  if (selectedCategory !== "all") {
    filteredProjects = filteredProjects.filter((project) => project.category === selectedCategory);
  }

  const openLightbox = (projectImages, imageIndex) => {
    setAllImages(projectImages);
    setCurrentImage(imageIndex);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <div style={{ backgroundColor: "#fafafa" }}>
      <section className="py-5" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="container text-center py-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span style={{ color: "#c9a962", letterSpacing: "0.3em", fontSize: "0.75rem" }}>OUR PORTFOLIO</span>
            <h1 className="mt-3 text-white fw-light">Project Gallery</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-3 bg-white border-bottom sticky-top" style={{ top: 68, zIndex: 40 }}>
        <div className="container d-flex align-items-center gap-2 flex-wrap">
          <Filter size={18} className="text-secondary" />
          <button type="button" className={`btn btn-sm ${selectedCategory === "all" ? "btn-dark" : "btn-outline-secondary"}`} onClick={() => setSelectedCategory("all")}>
            All Projects
          </button>
          {Object.entries(categoryLabels).map(([key, label]) => (
            <button
              key={key}
              type="button"
              className={`btn btn-sm ${selectedCategory === key ? "btn-dark" : "btn-outline-secondary"}`}
              onClick={() => setSelectedCategory(key)}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <motion.div layout className="row g-4">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="col-md-6 col-lg-4"
                >
                  <div className="position-relative overflow-hidden" style={{ aspectRatio: "4 / 3", cursor: "pointer" }} onClick={() => openLightbox(project.images || [], 0)}>
                    <img
                      src={project.images?.[0] || "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"}
                      alt={project.title}
                      className="w-100 h-100 object-fit-cover"
                    />
                    <div className="position-absolute bottom-0 start-0 end-0 p-3" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72), rgba(0,0,0,0))" }}>
                      <span className="small" style={{ color: "#c9a962" }}>{categoryLabels[project.category]}</span>
                      <h3 className="text-white h5 mb-0 mt-1 fw-light">{project.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-5">
              <p className="text-secondary mb-0">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {lightboxOpen && allImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="position-fixed top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.95)", zIndex: 1050 }}
            onClick={() => setLightboxOpen(false)}
          >
            <button
              type="button"
              className="btn position-absolute top-0 end-0 m-3 text-white"
              onClick={() => setLightboxOpen(false)}
            >
              <X size={28} strokeWidth={1.5} />
            </button>

            {allImages.length > 1 && (
              <>
                <button
                  type="button"
                  className="btn position-absolute start-0 top-50 translate-middle-y text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                >
                  <ChevronLeft size={40} strokeWidth={1} />
                </button>
                <button
                  type="button"
                  className="btn position-absolute end-0 top-50 translate-middle-y text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                >
                  <ChevronRight size={40} strokeWidth={1} />
                </button>
              </>
            )}

            <motion.img
              key={currentImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={allImages[currentImage]}
              alt="Project"
              style={{ maxHeight: "85vh", maxWidth: "90vw", objectFit: "contain" }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
