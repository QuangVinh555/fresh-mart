import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles";
import DarkContextProvider from "./contexts/DarkModeContext";
import AllContextProvider from "./contexts/AllContext";
import AuthContextProvider from "./contexts/AuthContext";
import CategoryContextProvider from "./contexts/CategoryContext";
import ProductContextProvider from "./contexts/ProductContext";
import UserContextProvider from "./contexts/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <UserContextProvider>
            <ProductContextProvider>
                <CategoryContextProvider>
                    <AuthContextProvider>
                        <AllContextProvider>
                            <DarkContextProvider>
                                <GlobalStyles>
                                    <App />
                                </GlobalStyles>
                            </DarkContextProvider>
                        </AllContextProvider>
                    </AuthContextProvider>
                </CategoryContextProvider>
            </ProductContextProvider>
        </UserContextProvider>
    </React.StrictMode>
);
