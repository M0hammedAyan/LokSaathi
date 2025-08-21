import React from "react";
import ChatInput from "../components/ChatInput";
import SuggestionsBox from "../components/SuggestionsBox";
import logo from "../assets/logo.png";

function SehaliAI() {
  return (
    <div className="page-container text-center">
      <img src={logo} alt="Shiksha Mitr logo" className="mx-auto w-20 h-20 mb-4" />
      <h1 className="text-2xl font-bold mb-2">Shiksha Mitr</h1>
      <p className="mb-4">Learning, made simple</p>

      <ChatInput />

      <SuggestionsBox
        title="Suggestions"
        suggestions={["New Scholarships", "Career Tips", "Upcoming Govt Exams", "Study Abroad"]}
      />

      <SuggestionsBox
        title="Emergency Contacts"
        suggestions={["Police - 100", "Firefighter - 101", "Ambulance - 102", "Emergency Helpline - 112"]}
      />
    </div>
  );
}

export default SehaliAI;
