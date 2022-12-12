import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles";
import DarkContextProvider from "./contexts/DarkModeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <DarkContextProvider>
            <GlobalStyles>
                <App />
            </GlobalStyles>
        </DarkContextProvider>
    </React.StrictMode>
);
