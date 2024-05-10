import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import WebRouter from "./routes/web_router";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={WebRouter.router} />
    </ChakraProvider>
  );
}

export default App;
