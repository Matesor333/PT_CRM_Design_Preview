import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import DashBoard from "./assets/Pages/DashBoard/DashBoard.tsx";
import Clients from "./assets/Pages/Clients/Clients.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
}

export default App
