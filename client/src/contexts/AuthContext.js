import axios from "axios";
import { createContext, useReducer } from "react";
import AuthReducer from "../reducer/AuthReducer";

export const AuthContext = createContext();

const INITIAL_STATE = {
    user: null,
    loading: false,
    error: null,
};
const AuthContextProvider = ({ children }) => {
    const PK = process.env.REACT_APP_PUBLIC_API;
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    const register = async (user) => {
        dispatch({
            type: "START",
        });
        try {
            const res = await axios.post(`${PK}/auth/register`, user);
            if (res.data) {
                dispatch({
                    type: "SUCCESSFULlY",
                    payload: res.data,
                });
            }
        } catch (error) {
            dispatch({
                type: "FAILURED",
                payload: error,
            });
        }
    };
    const AuthContextData = {
        state,
        register,
    };
    return (
        <AuthContext.Provider value={AuthContextData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
