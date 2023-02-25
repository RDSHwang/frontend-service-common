import React, { useState } from "react";
import BaseWireFrame from "../WireFrame";
import { Box, Grid, Paper } from "@mui/material";
import DrawerBase from "../../components/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import SendIcon from "@mui/icons-material/Send";

import "../../styles/Base/Base.css";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import ButtonGroup from "@mui/material/ButtonGroup";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import {
  OutPopStyle,
  InPopTitleStyle,
  InPopInfoStyle,
  InPopContentStyle,
  InPopBottomStyle,
} from "../../HJW/SxProps";
import { ContentChange } from "../../HJW/ContentChange";
import { useStore } from "../../states/store";
import SDSideBar from "../../components/SideBar";

export default function Template01() {
  const { isPopupOpen, setIsPopupOpen } = useStore();

  const handleIsPopupOpen = () => {
    setIsPopupOpen(!isPopupOpen);
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
              <SDSideBar />
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
              <Grid item xs={12} sx={{ height: "65px", padding: "10px" }}>
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
                  {[
                    { index: 1, name: "웹 호출" },
                    { index: 2, name: "웹 호출2" },
                  ].map((value) => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                      <ListItem
                        onDoubleClick={handleIsPopupOpen}
                        key={value}
                        sx={{
                          bgcolor: "brown",
                          "&:hover": {
                            backgroundColor: "#f1f1f1",
                          },
                        }}
                      >
                        <Paper
                          elevation={4}
                          sx={{
                            backgroundColor: "whitesmoke",
                            borderRadius: "5px",
                            height: "60px",
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <ListItemText
                              primary={`${value.index}`}
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
                              primary={`${value.name}`}
                              secondary={`${value.index}`}
                            />
                          </Box>
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
      <Modal open={isPopupOpen}>
        <Box sx={OutPopStyle}>
          <Box sx={InPopTitleStyle}>
            <Typography variant="h6" sx={{ m: 2 }}>
              <IconButton
                sx={{ float: "right" }}
                size="small"
                edge="end"
                onClick={handleIsPopupOpen}
              >
                <CloseIcon />
              </IconButton>
            </Typography>
          </Box>
          <Box sx={InPopInfoStyle}>
            <Typography variant="body2" sx={{ m: 2 }}>
              웹 서비스를 호출하고 응답 텍스트를 저장합니다.
            </Typography>
          </Box>
          <Box sx={InPopContentStyle}>
            <Typography sx={{ m: 2, height: "2vh" }}>매개 변수 선택</Typography>
            <Box sx={{ m: 2 }}>
              <ContentChange />
            </Box>
          </Box>
          <Box sx={InPopBottomStyle}>
            <Divider />
            <Box sx={{ m: 2 }}>
              <Button>오류</Button>
              <ButtonGroup color="warning" sx={{ float: "right" }}>
                <Button variant="contained">저장</Button>
                <Button variant="outlined" onClick={handleIsPopupOpen}>
                  취소
                </Button>
              </ButtonGroup>
            </Box>
          </Box>
        </Box>
      </Modal>
    </BaseWireFrame>
  );
}
