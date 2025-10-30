// src/App.jsx
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import BoardView from "./components/BoardView";

const App = () => {
  const [selectedBoard, setSelectedBoard] = useState(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* 🟣 ScriptGuru Header */}
      <header
        style={{
          backgroundColor: "#4B0082",
          color: "white",
          padding: "15px 25px",
          fontSize: "1.5rem",
          fontWeight: "bold",
          letterSpacing: "1px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
        }}
      >
        🚀 ScriptGuru — Team Collaboration Board
      </header>

      {/* 🧩 Main Layout */}
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar onSelectBoard={setSelectedBoard} />
        <BoardView board={selectedBoard} />
      </div>
    </div>
  );
};

export default App;
