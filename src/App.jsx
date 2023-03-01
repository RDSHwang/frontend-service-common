import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import FlowLogin from "./layouts/authentication/sign-in";
import routes from "./routes";

const getRoutes = (allRoutes) =>
  allRoutes.map((route) => {
    return (
      <Route
        exact
        path={route.route}
        element={route.component}
        key={route.key}
      />
    );
  });

function App() {
  return (
    <Routes>
      {getRoutes(routes)}
      <Route path="/" element={<FlowLogin />} />
    </Routes>
  );
}

export default App;
