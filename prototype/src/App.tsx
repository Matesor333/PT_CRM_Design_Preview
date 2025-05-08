
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import DashBoard from "./assets/Pages/DashBoard/DashBoard.tsx";
import Clients from "./assets/Pages/Clients/Clients.tsx";
import SpecificClientPage from "./assets/Pages/Clients/SpecificClient/SpecificClientPage.tsx";
import Layout from "./assets/Layout.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="prototype/src/assets/Pages/Clients/SpecificClient/SpecificClientPage.tsx" element={<SpecificClientPage/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App
