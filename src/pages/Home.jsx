import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Home() {
  const features = [
    { name: "Sahayak", path: "/sahayak" },
    { name: "Sehali AI", path: "/sehali-ai" },
    { name: "BazaarBot", path: "/bazaarbot" },
    { name: "Pension Saathi", path: "/pension-saathi" },
    { name: "Nyay Mitr", path: "/nyay-mitr" },
    { name: "Shiksha Mitr", path: "/shiksha-mitr" },
  ];

  return (
    <div className="page-container text-center p-6">
      {/* Logo */}
      <img
        src={logo}
        alt="LokSaathi Logo"
        className="logo mx-auto mb-6 rounded-full shadow-lg"
      />

      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">Welcome to LokSaathi</h1>
      <p className="mb-8">
        “One App, Many Solutions — Powered by AI, Built for India.”
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <Link
            key={index}
            to={feature.path}
            className="bg-white text-black p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform duration-300"
          >
            <h2 className="text-xl font-semibold">{feature.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
