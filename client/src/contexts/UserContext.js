import axios from "axios";
import { useReducer } from "react";
import { createContext } from "react";
import UserReducer from "../reducer/UserReducer";

export const UserContext = createContext();

const INITIAL_STATE = {
    loading: false,
    error: null,
    user: null,
};

const UserContextProvider = ({ children }) => {
    const PK = process.env.REACT_APP_PUBLIC_API;
    const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);
    const getUser = async (id, user) => {
        dispatch({
            type: "START",
        });
        try {
            const res = await axios.get(`${PK}/user/${id}`, user);
            if (res.data) {
                dispatch({
                    type: "GET_USER",
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

    const updateUser = async (id, user) => {
        dispatch({
            type: "START",
        });
        try {
            const res = await axios.put(`${PK}/user/${id}`, user);
            if (res.data) {
                dispatch({
                    type: "UPDATE_USER",
                    payload: res.data,
                });
            }
        } catch (error) {
            dispatch({ type: "FAILURED", payload: error });
        }
    };
    const UserContextData = {
        state,
        getUser,
        updateUser,
    };
    return (
        <UserContext.Provider value={UserContextData}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
