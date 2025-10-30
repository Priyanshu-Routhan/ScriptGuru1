🚀 ScriptGuru — Team Collaboration Board
    A simple Trello-like app built with the MERN stack (MongoDB, Express, React, Node.js)

📋 Overview
      ScriptGuru is a minimal Team Collaboration Board that allows users to create boards, manage tasks, and track progress visually across To Do, In Progress, and Done columns — similar to Trello or Asana.
      💡 Designed to demonstrate full-stack skills — backend design, REST API structure, frontend React logic, and clean UI implementation.

🧠 Features
  🧾 Boards
      Create multiple boards (e.g., “Frontend Tasks”, “Marketing Plan”)
      View a list of all boards in the sidebar
  ✅ Tasks
      Each task includes:
      title (required)
      description
      status: To Do | In Progress | Done
      priority: Low | Medium | High
      assignedTo: Free text field
      dueDate
  🖥️ Board View
      View tasks grouped by status
      Create, edit, or delete tasks

🧩 Tech Stack
    | Layer    | Technology                                 |
    | -------- | ------------------------------------------ |
    | Frontend | React (Vite), Hooks, Conditional Rendering |
    | Backend  | Node.js, Express.js                        |
    | Database | MongoDB (Mongoose ORM)                     |
    | Styling  | Plain CSS / Inline styles                  |
    | Extras   | CORS, dotenv, nodemon                      |


📁 Folder Structure
    ScriptGuru/
    ├── backend/
    │   ├── server.js
    │   ├── config/
    │   │   └── db.js
    │   ├── models/
    │   │   ├── Board.js
    │   │   └── Task.js
    │   ├── routes/
    │   │   ├── boardRoutes.js
    │   │   └── taskRoutes.js
    │   └── controllers/
    │       ├── boardController.js
    │       └── taskController.js
    │
    └── frontend/
        ├── src/
        │   ├── api/api.js
        │   ├── components/
        │   │   ├── Sidebar.jsx
        │   │   ├── BoardView.jsx
        │   │   ├── TaskModal.jsx
        │   │   └── TaskCard.jsx
        │   ├── App.jsx
        │   └── main.jsx
        └── index.html


Change status via dropdown (or drag-and-drop if implemented)

Simple modal form for creating new tasks
