import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Drawer } from "@mui/material";

export default function Template01() {
  const drawerWidth = 240;

  const DrawerPaper = styled(Drawer)(({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: drawerWidth,
      boxSizing: "border-box",
      background: "yellow",
    },
  }));

  return (
    <div>
        <div>
            
        </div>
    </div>
  );
}
