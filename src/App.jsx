import React from 'react';
import CrosshairCard from './components/CrosshairCard';
import './App.css';

const crosshairs = [
  {
    title: "CS 1.6 Cross",
    code: String("0;p;c;1;h;0;0t;1;0l;6;0a;1;0f;0;1b;0")
  },
  {
    title: "Nokta Cross",
    code: String("0;p;0;1;d;1;0b;0;1b;0")
  }
];


function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Crosshair Listesi</h1>
      <div className="flex flex-wrap gap-6">
        {crosshairs.map((c, index) => (
          <CrosshairCard
            key={index}
            title={c.title}
            description={c.description}
            code={c.code}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
