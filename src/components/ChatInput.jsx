import React, { useState } from "react";
import { Send, Mic, Paperclip, Camera } from "lucide-react";

export default function ChatInput({ onSend }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;
    if (onSend) onSend(message);
    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex items-center gap-2 p-3 bg-white shadow rounded-xl">
      {/* Attachments */}
      <button className="p-2 rounded-full hover:bg-gray-100">
        <Paperclip size={20} />
      </button>
      <button className="p-2 rounded-full hover:bg-gray-100">
        <Camera size={20} />
      </button>

      {/* Input */}
      <textarea
        className="flex-1 resize-none border rounded-xl px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-400"
        rows="1"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      {/* Mic */}
      <button className="p-2 rounded-full hover:bg-gray-100">
        <Mic size={20} />
      </button>

      {/* Send */}
      <button
        onClick={handleSend}
        className="p-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600"
      >
        <Send size={20} />
      </button>
    </div>
  );
}
