import { useReducer } from "react";
import { createContext } from "react";
import userReducer from "../reducer/UserReducer";
import axios from "axios";

export const AllContext = createContext();
const INITIAL_STATE = {
    loading: false,
    error: null,
    data: [],
};

const AllContextProvider = ({ children }) => {
    const PK = process.env.REACT_APP_PUBLIC_API;
    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
    const getAllUsers = async (path) => {
        dispatch({
            type: "START",
        });
        try {
            const res = await axios.get(`${PK}/${path}`);
            if (res.data) {
                dispatch({
                    type: "GET_ALL_USERS",
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
    const AllContextData = {
        getAllUsers,
        state,
    };
    return (
        <AllContext.Provider value={AllContextData}>
            {children}
        </AllContext.Provider>
    );
};

export default AllContextProvider;
