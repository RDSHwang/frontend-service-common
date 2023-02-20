import React from "react";
import BaseWireFrame from "../WireFrame";
import "../../styles/Base/Base.css";

export default function Template02(props: any) {
  return (
    <BaseWireFrame>
      <div className="flex-container">
        <div className="header">Header</div>
        <div className="main">
          <div className="sidebar">Sidebar</div>
          <div className="content">Main</div>
        </div>
        <div className="footer">Footer</div>
      </div>
    </BaseWireFrame>
  );
}
