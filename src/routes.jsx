import React from "react";
import SignIn from "./pages/authentication/sign-in/index";
import NaverLogin from "./pages/authentication/sign-in/naver";
import MyFlow from "./pages/MyFlow/MyFlow";

const routes = [
  {
    name: "Sign In",
    route: "/sign-in",
    component: <SignIn />,
  },
  {
    name: "My Flow",
    route: "/myflow",
    component: <MyFlow />,
  },
  {
    name: "Naver Login",
    route: "/naver",
    component: <NaverLogin />,
  },
];

export default routes;
