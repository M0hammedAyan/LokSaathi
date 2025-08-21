import React from "react";
import { Mic, Paperclip } from "lucide-react";

function ChatInput() {
  return (
    <div className="flex items-center bg-white rounded-lg shadow p-2 mt-4">
      <input
        type="text"
        placeholder="Type your message..."
        className="flex-grow p-2 border-none focus:outline-none"
      />
      <button className="p-2 text-purple-600">
        <Mic />
      </button>
      <button className="p-2 text-purple-600">
        <Paperclip />
      </button>
    </div>
  );
}

export default ChatInput;
