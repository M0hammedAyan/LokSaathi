import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center p-6">
      <h2 className="text-2xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="mb-4">Oops! The page you are looking for doesn’t exist.</p>
      <Link to="/" className="text-blue-600">Go back Home</Link>
    </div>
  );
}

export default NotFound;
