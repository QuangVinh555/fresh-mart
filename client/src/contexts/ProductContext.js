import axios from "axios";
import { useReducer } from "react";
import { createContext } from "react";
import ProductReducer from "../reducer/ProductReducer";

export const ProductContext = createContext();

const INITIAL_STATE = {
    loading: false,
    error: null,
    category: null,
};

const ProductContextProvider = ({ children }) => {
    const PK = process.env.REACT_APP_PUBLIC_API;
    const [state, dispatch] = useReducer(ProductReducer, INITIAL_STATE);
    const addProduct = async (data) => {
        dispatch({
            type: "START",
        });
        try {
            const res = await axios.post(`${PK}/product/create`, data);
            if (res.data) {
                dispatch({
                    type: "ADD_PRODUCT",
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

    const getProduct = async (id) => {
        try {
            await axios.get(`${PK}/product/${id}`);
        } catch (error) {
            console.log(error);
        }
    };
    const ProductContextData = {
        state,
        addProduct,
        getProduct,
    };
    return (
        <ProductContext.Provider value={ProductContextData}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;
