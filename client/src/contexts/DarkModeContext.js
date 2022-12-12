import { createContext, useState } from "react";

export const DarkContext = createContext();

const DarkContextProvider = ({ children }) => {
    const [dark, setDark] = useState(false);
    const DarkContextData = {
        dark,
        setDark,
    };
    return (
        <DarkContext.Provider value={DarkContextData}>
            {children}
        </DarkContext.Provider>
    );
};

export default DarkContextProvider;
