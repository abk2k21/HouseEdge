import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const heroImages = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80",
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80",
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="position-relative overflow-hidden" style={{ height: "100vh" }}>
      {heroImages.map((image, index) => (
        <motion.div
          key={image}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentImage ? 1 : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="position-absolute top-0 start-0 end-0 bottom-0"
        >
          <div
            className="position-absolute top-0 start-0 end-0 bottom-0"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(3px)",
            }}
          />
        </motion.div>
      ))}

      <div
        className="position-absolute top-0 start-0 end-0 bottom-0"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,.6), rgba(0,0,0,.4), rgba(0,0,0,.7))" }}
      />

      <div className="position-relative h-100 d-flex flex-column align-items-center justify-content-center px-3">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-4"
          >
            <img src="/images/logo.png" alt="houseedge Builders" className="mx-auto d-block" style={{ width: "min(190px, 45vw)", height: "auto" }} />
          </motion.div>

          <h1 className="fw-semibold text-white mb-3" style={{ letterSpacing: "0.35em", fontSize: "clamp(1rem, 2.8vw, 1.45rem)" }}>
            CRAFTING SPACES
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-white fw-medium"
            style={{ letterSpacing: "0.16em", fontSize: "clamp(.85rem, 2vw, 1.1rem)" }}
          >
            INTERIOR DESIGN • CONSTRUCTION • LANDSCAPE • ROOFING
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mx-auto mt-4"
            style={{ height: 1, background: "linear-gradient(to right, transparent, #c9a962, transparent)" }}
          />
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={scrollToServices}
          className="btn position-absolute start-50 translate-middle-x"
          style={{ bottom: 24, color: "rgba(255,255,255,.6)" }}
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ChevronDown size={32} strokeWidth={1} />
          </motion.div>
        </motion.button>

        <div className="position-absolute d-flex flex-column gap-2" style={{ right: 24, bottom: 24 }}>
          {heroImages.map((_, index) => (
            <button
              type="button"
              key={`hero-indicator-${index}`}
              onClick={() => setCurrentImage(index)}
              className="border-0"
              style={{
                width: 32,
                height: 2,
                backgroundColor: index === currentImage ? "#c9a962" : "rgba(255,255,255,.3)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
