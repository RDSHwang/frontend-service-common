import React from "react";
import SignIn from "./layouts/authentication/sign-in/index";
import FlowEdit from "./pages/FlowEdit/index";

const routes = [
  {
    name: "Sign In",
    route: "/sign-in",
    component: <SignIn />,
  },
  {
    name: "My Flow",
    route: "/myflow",
    component: <FlowEdit />,
  },
];

export default routes;
