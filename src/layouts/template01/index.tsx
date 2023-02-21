import React from "react";
import BaseWireFrame from "../WireFrame";
import { Button, Box } from "@mui/material";
import DrawerBase from "../../components/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import SendIcon from "@mui/icons-material/Send";

import "../../styles/Base/Base.css";

export default function Template01(props: any) {
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

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
              alignItems: "stretch",
              justifyContent: "stretch",
              margin: "10px",
            }}
          >
    <List sx={{ width: "100%" }}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-label-${value}`;
        return (
          <ListItem key={value}>
            <Box
              sx={{
                backgroundColor: "whitesmoke",
                borderRadius: "5px",
                boxShadow: "2px 4px 4px rgba(0, 0, 0, 0.3)",
                height: "60px",
                width: "100%",
                display: "flex",
                alignItems: "stretch"
              }}
            >
              <ListItemButton role={undefined} onClick={handleToggle(value)}>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText
                  id={labelId}
                  primary={`Line item ${value + 1}`}
                  secondary={`Index ${value}`}
                />
              </ListItemButton>
            </Box>
          </ListItem>
        );
      })}
    </List>
          </div>
        </div>
      </div>
    </BaseWireFrame>
  );
}
