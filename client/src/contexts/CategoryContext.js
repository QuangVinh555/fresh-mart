import axios from "axios";
import { createContext, useReducer } from "react";
import CategoryReducer from "../reducer/CategoryReducer";

export const CategoryContext = createContext();

const INITIAL_STATE = {
    categories: [],
    loading: false,
    error: null,
};
const CategoryContextProvider = ({ children }) => {
    const PK = process.env.REACT_APP_PUBLIC_API;
    const [state, dispatch] = useReducer(CategoryReducer, INITIAL_STATE);
    console.log(state);
    const getAllCategories = async () => {
        dispatch({
            type: "START",
        });
        try {
            const res = await axios.get(`${PK}/category`);
            if (res.data) {
                dispatch({
                    type: "GET_ALL_CATEGORIES",
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

    const CategoryContextData = {
        state,
        getAllCategories,
    };
    return (
        <CategoryContext.Provider value={CategoryContextData}>
            {children}
        </CategoryContext.Provider>
    );
};

export default CategoryContextProvider;
