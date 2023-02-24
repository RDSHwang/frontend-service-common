import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useContext } from "react";
import {
  menuContext,
  popUpContext,
  popUpDispatchContext,
} from "../constants/GlobalContextProvider";
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
} from "./indexSx.tsx";
import { OutLinedButtonProps } from "./index.tsx";
import { ContentChange } from "./ContentChange";

//LayoutPopUp
export default function LayoutPopup1() {
  const popupDispatch = useContext(popUpDispatchContext);
  const open = useContext(popUpContext);
  const { name } = useContext(menuContext);

  function PopUpClose() {
    popupDispatch({ type: "Close" });
  }

  return (
    <Modal open={open}>
      <Box sx={OutPopStyle}>
        <Box sx={InPopTitleStyle}>
          <Typography variant="h6" sx={{ m: 2 }}>
            {name}
            <IconButton
              onClick={PopUpClose}
              sx={{ float: "right" }}
              size="small"
              edge="end"
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
            <Button {...OutLinedButtonProps}>오류</Button>
            <ButtonGroup color="warning" sx={{ float: "right" }}>
              <Button variant="contained">저장</Button>
              <Button variant="outlined" onClick={PopUpClose}>
                취소
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
