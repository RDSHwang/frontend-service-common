import React from "react";
import BaseWireFrame from "../WireFrame";
import { Button, Paper, Box } from "@mui/material";
import SideBar from "../../components/SideBar";
import "../../styles/Base/Base.css";

import { Drawer } from "@mui/material";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { WorkList } from "../../constants/Works";

const drawerWidth = 220;

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
            <Box sx={{ backgroundColor: "lightblue", height: "100%", margin: "10px" }}>
              <Drawer
                sx={{
                  color: "blue",
                  width: drawerWidth,
                  flexShrink: 0,
                  "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                  },
                }}
                variant="permanent"
                anchor="left"
              >
                <Toolbar />
                <Divider />
                <List>
                  {WorkList.map((text, index) => (
                    <ListItem key={text} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
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
