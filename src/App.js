import React from "react";
import "./App.css";
import WireFrame from "./layouts/WireFrame/index";
import Template01 from "./layouts/template01/index";
import FlowEdit from "./pages/FlowEdit/index";

const divStyle = {
  container: {
    margin: "10px",
    height: "calc(100vh - 20px)", // 브라우저 높이에서 margin 값만큼 뺀 값
    overflow: "auto", // 스크롤 없애기
    background: "skyblue",
  },
};

function App() {
  return (
    <div style={divStyle.container}>
      <FlowEdit></FlowEdit>
    </div>
  );
}

export default App;
