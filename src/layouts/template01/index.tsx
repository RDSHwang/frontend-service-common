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
  const [policyAssignFlag, setPolicyAssignFlag] = React.useState(false);

  const handleToggle = (value: number) => () => {
    if (policyAssignFlag === false) {
      alert("당사의 보안 정책 동의가 필요합니다.");
      return;
    }
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
            <Grid container>
              <Grid item xs={12} sx={{ height: "80px", padding: "10px" }}>
                <Paper
                  elevation={4}
                  sx={{
                    bgcolor: "red",
                    borderRadius: "4",
                    height: "100%",
                  }}
                >
                  sdf
                </Paper>
              </Grid>
              <Grid item xs={12} sx={{ height: "100%" }}>
                <List sx={{ bgcolor: "yellow" }}>
                  {[0, 1, 2, 3].map((value) => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                      <ListItem
                        key={value}
                        sx={{ margin: "0px", bgcolor: "brown" }}
                      >
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
                          <ListItemButton onDoubleClick={handleToggle(value)}>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
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
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </BaseWireFrame>
  );
}
