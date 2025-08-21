// src/pages/BazaarBot.jsx
import React from "react";
import ChatUI from "@/components/ChatUI";
import SuggestionsBox from "@/components/SuggestionsBox";
import logo from "@/assets/logo.png";

export default function BazaarBot() {
  return (
    <div className="page-container text-center">
      {/* Header */}
      <img src={logo} alt="BazaarBot Logo" className="mx-auto w-20 h-20 mb-4" />
      <h1 className="text-2xl font-bold mb-2">BazaarBot</h1>
      <p className="mb-4">Helping you shop smarter</p>

      {/* Suggestions */}
      <div className="mb-6">
        <SuggestionsBox 
          title="Suggestions" 
          suggestions={["Best Deals", "Nearby Shops", "Price Comparison"]} 
        />
        <SuggestionsBox 
          title="Emergency Contacts" 
          suggestions={["Consumer Helpline - 1800-11-4000"]} 
        />
      </div>

      {/* Chat UI */}
      <ChatUI 
        title="BazaarBot" 
        accent="text-orange-400" 
        bubble="bg-orange-500" 
      />
    </div>
  );
}
