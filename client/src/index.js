import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles";
import DarkContextProvider from "./contexts/DarkModeContext";
import AllContextProvider from "./contexts/AllContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <AllContextProvider>
            <DarkContextProvider>
                <GlobalStyles>
                    <App />
                </GlobalStyles>
            </DarkContextProvider>
        </AllContextProvider>
    </React.StrictMode>
);
