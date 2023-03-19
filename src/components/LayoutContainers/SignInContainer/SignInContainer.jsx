import { Container } from "@mui/material";
import backgroundImage from "../../../assets/images/Login.png";

const SignInContainer = ({ children }) => {
  const containerStyles = {
    display: "flex",
    alignItems: "center",
    height: "100vh",
    justifyContent: "center",
  };

  return (
    <Container maxWidth="lg" sx={containerStyles}>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "50vh",
          borderRadius: "10px",
          boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.4)",
        }}
      >
        {children}
      </div>
    </Container>
  );
};

export default SignInContainer;
