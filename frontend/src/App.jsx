// frontend/src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./Layout";
import { HomePage } from "./pages/HomePage";
import { ProductPage } from "./ProductPage";
import { SearchPage } from "./pages/SearchPage";
import Contact from "./pages/Contact";
import { ServicesPage } from "./pages/ServicesPage";
import { LocationsPage } from "./pages/LocationsPage";
import { GalleryPage } from "./pages/GalleryPage";
//import { Login } from "./components/Login";   // <- we use this
import LoginPage from "./pages/LoginPage";

import FeedbackPage from "./pages/FeedbackPage";


export default function App() {
  console.log("DEBUG: App.jsx is rendering");
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="/feedback" element={<FeedbackPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
