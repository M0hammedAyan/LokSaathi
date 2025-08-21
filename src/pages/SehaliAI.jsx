// src/pages/SehaliAI.jsx
import React from "react";
import ChatUI from "@/components/ChatUI";
import SuggestionsBox from "@/components/SuggestionsBox";
import logo from "@/assets/logo.png";

export default function SehaliAI() {
  return (
    <div className="page-container text-center">
      {/* Header */}
      <img
        src={logo}
        alt="SehaliAI Logo"
        className="mx-auto w-20 h-20 mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">SehaliAI</h1>
      <p className="mb-4">Your AI friend for everyday help</p>

      {/* Suggestions */}
      <div className="mb-6">
        <SuggestionsBox
          title="Suggestions"
          suggestions={["Health Tips", "Daily Motivation"]}
        />
        <SuggestionsBox
          title="Emergency Contacts"
          suggestions={[
            "Police - 100",
            "Firefighter - 101",
            "Ambulance - 102",
            "Emergency Helpline - 112",
          ]}
        />
      </div>

      {/* Chat UI */}
      <ChatUI
        title="SehaliAI"
        accent="text-pink-400"
        bubble="bg-pink-500"
      />
    </div>
  );
}
