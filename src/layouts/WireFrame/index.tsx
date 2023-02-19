import React, { useState } from "react";
import Template01 from "../template01/index";

const divStyle = {
  container: {
    margin: "10px",
    height: "calc(100vh - 20px)", // 브라우저 높이에서 margin 값만큼 뺀 값
    overflow: "auto", // 스크롤 없애기
    background: "skyblue",
  },
};

export default function Base_WireFrame() {
  return (
    <div style={divStyle.container}>
      <Template01 />
    </div>
  );
}
