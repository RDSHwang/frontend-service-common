import React from "react";
import BaseWireFrame from "../WireFrame";
import { Button, Box, Grid, Paper } from "@mui/material";
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
            }}
          >
            <Grid container sx={{ display: "flex" }}>
              <Grid item xs={12} sx={{ width: "30px" }}>
                <Box sx={{ height: "6vh" }}>
                  <Paper
                    elevation={4}
                    sx={{
                      bgcolor: "green",
                      borderRadius: "4",
                      margin: "10px"
                    }}
                  >
                    
                  </Paper>
                </Box>
              </Grid>
              <Grid item xs={12} sx={{ flexGrow: 1 }}>
                <Box sx={{ height: "97vh", bgcolor: "yellow" }}>
                  <List>
                    {[0, 1, 2, 3].map((value) => {
                      const labelId = `checkbox-list-label-${value}`;
                      return (
                        <ListItem key={value}>
                          <Paper
                            elevation={4}
                            sx={{
                              backgroundColor: "whitesmoke",
                              borderRadius: "5px",
                              height: "60px",
                              width: "100%",
                              display: "flex",
                              alignItems: "stretch",
                            }}
                          >
                            <ListItemButton onClick={handleToggle(value)}>
                              <Box
                                sx={{ display: "flex", alignItems: "center" }}
                              >
                                <ListItemText
                                  primary={`${value + 1}`}
                                  sx={{
                                    width: "40px",
                                    textAlign: "center",
                                  }}
                                />
                                <ListItemIcon sx={{ justifyContent: "left" }}>
                                  <SendIcon />
                                </ListItemIcon>
                                <ListItemText
                                  id={labelId}
                                  primary={`Line item ${value + 1}`}
                                  secondary={`Index ${value}`}
                                />
                              </Box>
                            </ListItemButton>
                          </Paper>
                        </ListItem>
                      );
                    })}
                  </List>
                </Box>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </BaseWireFrame>
  );
}
