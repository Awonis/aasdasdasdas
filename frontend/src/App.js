import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import DownloadPage from "./components/DownloadPage";
import CatalogPage from "./components/CatalogPage";
import Navigation from "./components/Navigation";
import CookieConsent from "./components/CookieConsent";

function App() {
  return (
    <div className="App bg-gray-900 min-h-screen text-white">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
        </Routes>
        <CookieConsent />
      </BrowserRouter>
    </div>
  );
}

export default App;