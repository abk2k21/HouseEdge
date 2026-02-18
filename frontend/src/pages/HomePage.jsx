import React from "react";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import LocationsSection from "../components/home/LocationsSection";
import GalleryPreview from "../components/home/GalleryPreview";
import ContactSection from "../components/home/ContactSection";

export function HomePage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <ServicesSection />
      <LocationsSection />
      <GalleryPreview />
      <ContactSection />
    </div>
  );
}
