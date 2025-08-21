import React from "react";
import ChatInput from "../components/ChatInput";
import SuggestionsBox from "../components/SuggestionsBox";
import logo from "../assets/logo.png";

function Sahayak() {
  return (
    <div className="page-container text-center">
      <img src={logo} alt="Sahayak Logo" className="mx-auto w-20 h-20 mb-4" />
      <h1 className="text-2xl font-bold mb-2">Sahayak</h1>
      <p className="mb-4">Assistance at your fingertips</p>

      <ChatInput />

      <SuggestionsBox
        title="Quick Actions"
        suggestions={["Generate Bill", "Business Help", "Send via WhatsApp"]}
      />
    </div>
  );
}

export default Sahayak;
