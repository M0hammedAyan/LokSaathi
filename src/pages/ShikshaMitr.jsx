// src/pages/ShikshaMitr.jsx
import React from "react";
import ChatUI from "@/components/ChatUI";
import SuggestionsBox from "@/components/SuggestionsBox";
import logo from "@/assets/logo.png";

export default function ShikshaMitr() {
  return (
    <div className="page-container text-center">
      {/* Header */}
      <img src={logo} alt="ShikshaMitr Logo" className="mx-auto w-20 h-20 mb-4" />
      <h1 className="text-2xl font-bold mb-2">ShikshaMitr</h1>
      <p className="mb-4">Smart assistant for students and learners</p>

      {/* Suggestions */}
      <div className="mb-6">
        <SuggestionsBox title="Suggestions" suggestions={["Homework Help", "Exam Tips", "Scholarship Info"]} />
        <SuggestionsBox title="Emergency Contacts" suggestions={["Police - 100", "Ambulance - 102"]} />
      </div>

      {/* Chat UI */}
      <ChatUI title="ShikshaMitr" accent="text-blue-400" bubble="bg-blue-500" />
    </div>
  );
}
