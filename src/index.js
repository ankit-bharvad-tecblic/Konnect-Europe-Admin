import React from "react";
import ReactDOM from "react-dom/client";
import { extendTheme } from "@chakra-ui/react";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
const test = () => {
  window.addEventListener("storage", ({ oldValue, newValue }) => {
    // Note: For this app we don't have any server to verify role/roles, in your case you can verify role/roles from your server and update accordingly.
    alert(
      `You can not change role/roles from ${oldValue} to ${newValue}, if you want to change role/roles please log out and then log in with a different roles.`
    );
    localStorage.setItem("roles", oldValue);
  });
};

// test();

const theme = extendTheme({
  colors: {
    primary: "#F95700",
    secondary: "#0090C5",
    textPrimary: "#5E6282",
    borderPrimary: "#E7E7E7",
    success: "#0BBF33",
    textSuccess: "#128300",
    warning: "",
    danger: "",
    hoverBg: "rgba(249, 87, 0, 0.1);",
  },
  fonts: {},
  fontSizes: {},
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>
);
