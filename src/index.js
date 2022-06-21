import React from "react";
import ReactDOM from "react-dom/client";
import { MainContextProvider } from "./context/Main";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
            <MainContextProvider>
                <App />
            </MainContextProvider>
        </ThemeProvider>
    </BrowserRouter>
);
