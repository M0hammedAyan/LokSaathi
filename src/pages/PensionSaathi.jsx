// src/pages/PensionSaathi.jsx
import React from "react";
import ChatUI from "@/components/ChatUI";
import SuggestionsBox from "@/components/SuggestionsBox";
import logo from "@/assets/logo.png";

export default function PensionSaathi() {
  return (
    <div className="page-container text-center">
      {/* Header */}
      <img src={logo} alt="PensionSaathi Logo" className="mx-auto w-20 h-20 mb-4" />
      <h1 className="text-2xl font-bold mb-2">PensionSaathi</h1>
      <p className="mb-4">Smart help with retirement</p>

      {/* Suggestions */}
      <div className="mb-6">
        <SuggestionsBox title="Suggestions" suggestions={["New Pension Schemes", "Scheme Updates"]} />
        <SuggestionsBox title="Emergency Contacts" suggestions={["Police - 100", "Firefighter - 101", "Ambulance - 102", "Emergency Helpline - 112"]} />
      </div>

      {/* Chat UI */}
      <ChatUI title="PensionSaathi" accent="text-yellow-400" bubble="bg-yellow-500" />
    </div>
  );
}
