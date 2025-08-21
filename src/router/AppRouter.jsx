// src/router/AppRouter.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Login from "@/pages/Login";
import Sahayak from "@/pages/Sahayak";
import SehaliAI from "@/pages/SehaliAI";
import ShikshaMitr from "@/pages/ShikshaMitr";
import NyayMitr from "@/pages/NyayMitr";
import BazaarBot from "@/pages/BazaarBot";
import PensionSaathi from "@/pages/PensionSaathi";

export default function AppRouter() {
  return (
    <>
      <Navbar />
      <div className="pt-16"> {/* spacing for fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />

          {/* Assistants */}
          <Route path="/sahayak" element={<Sahayak />} />
          <Route path="/sehali-ai" element={<SehaliAI />} />
          <Route path="/shiksha-mitr" element={<ShikshaMitr />} />
          <Route path="/nyay-mitr" element={<NyayMitr />} />
          <Route path="/bazaar-bot" element={<BazaarBot />} />
          <Route path="/pension-saathi" element={<PensionSaathi />} />
        </Routes>
      </div>
    </>
  );
}
