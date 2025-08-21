import React from "react";

function SuggestionsBox({ title, suggestions }) {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {suggestions.map((item, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SuggestionsBox;
