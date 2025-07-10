import React from 'react';

export default function CrosshairCard({ title, description, code }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4 w-64 shadow-md">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-sm text-gray-400 mb-2">{description}</p>
      <div className="bg-black h-20 flex items-center justify-center rounded mb-2">
        <span className="text-green-400">+</span>
      </div>
      <input
        readOnly
        value={code}
        className="w-full text-sm bg-gray-700 p-1 rounded mb-2"
      />
      <button
        onClick={copyToClipboard}
        className="bg-blue-500 hover:bg-blue-600 w-full py-1 rounded"
      >
        Kopyala
      </button>
    </div>
  );
}
