import { useState, useRef } from "react";
import { Send, Mic, Paperclip, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ChatUI({ title, accent = "text-sky-400", bubble = "bg-sky-500" }) {
  const [messages, setMessages] = useState([
    { from: "bot", text: `Hello 👋, I am ${title}. How can I help you today?` },
  ]);
  const [input, setInput] = useState("");
  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
  };

  const handleFileUpload = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      setMessages([
        ...messages,
        { from: "user", text: `📎 Uploaded: ${file.name}` },
      ]);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Header */}
      <div className="p-4 bg-slate-900 border-b border-slate-700 flex items-center justify-between">
        <h2 className={`text-lg font-semibold ${accent}`}>{title}</h2>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.from === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-2xl max-w-xs ${
                msg.from === "user"
                  ? `${bubble} text-white`
                  : "bg-slate-700 text-sky-100"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Bar */}
      <div className="p-3 bg-slate-900 border-t border-slate-700 flex items-center space-x-2">
        {/* Hidden inputs */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileUpload}
        />
        <input
          type="file"
          accept="image/*"
          capture="environment"
          ref={cameraInputRef}
          className="hidden"
          onChange={handleFileUpload}
        />

        {/* File upload */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => fileInputRef.current.click()}
        >
          <Paperclip className="h-5 w-5 text-sky-400" />
        </Button>

        {/* Camera */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => cameraInputRef.current.click()}
        >
          <Camera className="h-5 w-5 text-sky-400" />
        </Button>

        {/* Input */}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-2 rounded-lg bg-slate-800 text-white outline-none"
        />

        {/* Mic */}
        <Button variant="ghost" size="icon">
          <Mic className="h-5 w-5 text-sky-400" />
        </Button>

        {/* Send */}
        <Button onClick={sendMessage} className="bg-sky-500 hover:bg-sky-600">
          <Send className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
