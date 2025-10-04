
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import DashBoard from "./assets/Pages/DashBoard/DashBoard.tsx";
import Clients from "./assets/Pages/Clients/Clients.tsx";
import SpecificClientPage from "./assets/Pages/Clients/SpecificClient/SpecificClientPage.tsx";
import Layout from "./assets/Layout.tsx";

import Callendar from "./assets/Pages/Callendar/Callendar.tsx";
import Programs from "./assets/Pages/Programs/Programs.tsx";
import Program from "./assets/Pages/Programs/Specific Program/SpecificProgram.tsx";
import Messages from "./assets/Pages/Messages/Messages.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/programs" element={<Programs/>}/>
          <Route path="/programs/:programId" element={<Program/>}/>
          <Route path="/callendar" element={<Callendar/>}/>
          <Route path="/messages" element={<Messages/>}/>
          <Route path="prototype/src/assets/Pages/Clients/SpecificClient/SpecificClientPage.tsx" element={<SpecificClientPage/>}/>

        </Route>
      </Routes>
    </Router>
  );
}

export default App
