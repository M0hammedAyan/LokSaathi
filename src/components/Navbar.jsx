// src/components/Navbar.jsx
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-sky-400">
          LokSaathi
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-sky-400">
            Home
          </Link>
          <Link to="/services" className="hover:text-sky-400">
            Services
          </Link>
          <Link to="/about" className="hover:text-sky-400">
            About
          </Link>
          <Link to="/login" className="hover:text-sky-400">
            Login
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 px-4 py-3 space-y-2">
          <Link to="/" className="block hover:text-sky-400">
            Home
          </Link>
          <Link to="/services" className="block hover:text-sky-400">
            Services
          </Link>
          <Link to="/about" className="block hover:text-sky-400">
            About
          </Link>
          <Link to="/login" className="block hover:text-sky-400">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
