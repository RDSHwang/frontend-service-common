import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import FlowLogin from "./layouts/authentication/sign-in";
import FlowEdit from "./pages/FlowEdit/index";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<FlowLogin />} />
          <Route path="/Login" element={<FlowLogin />} />
          <Route path="/Flow" element={<FlowEdit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
