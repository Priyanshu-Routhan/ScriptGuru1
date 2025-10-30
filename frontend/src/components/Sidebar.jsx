// src/components/Sidebar.jsx
import React, { useState, useEffect } from "react";
import { getBoards, createBoard } from "../api/api";

const Sidebar = ({ onSelectBoard }) => {
  const [boards, setBoards] = useState([]);
  const [newBoardName, setNewBoardName] = useState("");

  useEffect(() => {
    loadBoards();
  }, []);

  const loadBoards = async () => {
    const data = await getBoards();
    setBoards(data);
  };

  const handleCreateBoard = async (e) => {
    e.preventDefault();
    if (!newBoardName.trim()) return;
    await createBoard({ name: newBoardName });
    setNewBoardName("");
    loadBoards();
  };

  return (
    <div style={{ width: "220px", borderRight: "1px solid #ccc", padding: "10px" }}>
      <h3>Boards</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {boards.map((board) => (
          <li key={board._id} onClick={() => onSelectBoard(board)} style={{ cursor: "pointer", margin: "8px 0" }}>
            🗂️ {board.name}
          </li>
        ))}
      </ul>

      <form onSubmit={handleCreateBoard}>
        <input
          value={newBoardName}
          onChange={(e) => setNewBoardName(e.target.value)}
          placeholder="New board name"
          style={{ width: "100%", padding: "6px" }}
        />
        <button type="submit" style={{ width: "100%", marginTop: "5px" }}>
          ➕ Add
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
