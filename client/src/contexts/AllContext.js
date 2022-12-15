import { useReducer } from "react";
import { createContext } from "react";
import AllReducer from "../reducer/AllReducer";
import axios from "axios";

export const AllContext = createContext();
const INITIAL_STATE = {
    loading: false,
    error: null,
    data: [],
};

const AllContextProvider = ({ children }) => {
    const PK = process.env.REACT_APP_PUBLIC_API;
    const [state, dispatch] = useReducer(AllReducer, INITIAL_STATE);
    const getAlls = async (path) => {
        dispatch({
            type: "START",
        });
        try {
            const res = await axios.get(`${PK}/${path}`);
            if (res.data) {
                dispatch({
                    type: "GET_ALL_DATA",
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
    const deleteN = async (id, path) => {
        try {
            await axios.delete(`${PK}/${path}/${id}`);
        } catch (error) {}
    };
    const AllContextData = {
        getAlls,
        state,
        deleteN,
    };
    return (
        <AllContext.Provider value={AllContextData}>
            {children}
        </AllContext.Provider>
    );
};

export default AllContextProvider;
