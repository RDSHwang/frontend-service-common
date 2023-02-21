import React from "react";
import BaseWireFrame from "../WireFrame";
import { Button, Box } from "@mui/material";
import DrawerBase from "../../components/Drawer";

import "../../styles/Base/Base.css";

export default function Template01(props: any) {
  return (
    <BaseWireFrame>
      <div className="flex-container">
        <div className="main">
          <div
            className="sidebar"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                backgroundColor: "lightblue",
                height: "100%",
              }}
            >
              <DrawerBase />
            </Box>
          </div>
          <div
            className="content"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button variant="contained">하이</Button>
          </div>
        </div>
      </div>
    </BaseWireFrame>
  );
}
