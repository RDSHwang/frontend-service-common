import { useState } from "react";
import {
  Button,
  Container,
  TextField,
  FormControl,
  InputAdornment,
  IconButton,
  Typography,
  Link,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const NaverLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 로그인 처리 로직
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        네이버 로그인
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <TextField label="아이디" variant="outlined" required />
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <TextField
            label="비밀번호"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <Button type="submit" variant="contained" size="large" fullWidth>
            로그인
          </Button>
        </FormControl>
        <Typography align="center">
          <Link href="#" variant="body2">
            아이디/비밀번호 찾기
          </Link>
          {" | "}
          <Link href="#" variant="body2">
            네이버 회원 가입
          </Link>
        </Typography>
      </form>
    </Container>
  );
};

export default NaverLogin;
