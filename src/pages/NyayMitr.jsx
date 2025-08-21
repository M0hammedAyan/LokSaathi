// src/pages/NyayMitr.jsx
import React from "react";
import ChatUI from "@/components/ChatUI";
import SuggestionsBox from "@/components/SuggestionsBox";
import logo from "@/assets/logo.png";

export default function NyayMitr() {
  return (
    <div className="page-container text-center">
      {/* Header */}
      <img src={logo} alt="NyayMitr Logo" className="mx-auto w-20 h-20 mb-4" />
      <h1 className="text-2xl font-bold mb-2">NyayMitr</h1>
      <p className="mb-4">Legal help for everyday people</p>

      {/* Suggestions */}
      <div className="mb-6">
        <SuggestionsBox title="Suggestions" suggestions={["File a Complaint", "Check Case Status", "Legal Aid Info"]} />
        <SuggestionsBox title="Emergency Contacts" suggestions={["Police - 100", "Legal Aid Helpline - 1516"]} />
      </div>

      {/* Chat UI */}
      <ChatUI title="NyayMitr" accent="text-green-400" bubble="bg-green-500" />
    </div>
  );
}
