import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Sahayak from "../pages/Sahayak";
import SehaliAI from "../pages/SehaliAI";
import BazaarBot from "../pages/BazaarBot";
import PensionSaathi from "../pages/PensionSaathi";
import NyayMitr from "../pages/NyayMitr";
import ShikshaMitr from "../pages/ShikshaMitr";
import About from "../pages/About.jsx";
import Services from "../pages/Services.jsx";
import NotFound from "../pages/NotFound.jsx";
import LoginSignup from "../pages/LoginSignup";
import AuthCard from "../pages/AuthCard";

function AppRouter() {
  return (
    <Routes>
      {/* Main Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />

      {/* Feature Pages */}
      <Route path="/sahayak" element={<Sahayak />} />
      <Route path="/sehali-ai" element={<SehaliAI />} />
      <Route path="/bazaarbot" element={<BazaarBot />} />
      <Route path="/pension-saathi" element={<PensionSaathi />} />
      <Route path="/nyay-mitr" element={<NyayMitr />} />
      <Route path="/shiksha-mitr" element={<ShikshaMitr />} />

      {/* Auth Pages */}
      <Route path="/auth" element={<AuthCard />} />
      <Route path="/login" element={<LoginSignup />} />
      <Route path="/signup" element={<LoginSignup />} />

      {/* Fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
