import axios from "axios";
import { createContext, useReducer } from "react";
import CartReducer from "../reducer/CartReducer";

export const CartContext = createContext();

const INITIAL_STATE = {
    cart: null,
    carts: [],
    loading: false,
    error: null,
};
const CartContextProvider = ({ children }) => {
    const PK = process.env.REACT_APP_PUBLIC_API;
    const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE);
    const addCart = async (newProduct) => {
        dispatch({
            type: "START",
        });
        try {
            const res = await axios.post(`${PK}/cart/create`, newProduct);
            if (res.data) {
                dispatch({
                    type: "ADD_CART",
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

    const getCartofUser = async (userId) => {
        try {
            dispatch({
                type: "START",
            });

            const res = await axios.get(`${PK}/cart?userId=${userId}`);
            if (res.data) {
                dispatch({
                    type: "GET_ALL_CARTS",
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

    const deleteCart = async (cartId) => {
        try {
            const res = await axios.delete(`${PK}/cart/${cartId}`);
            if (res.data) {
                dispatch({
                    type: "DELETE_CART",
                    payload: cartId,
                });
            }
        } catch (error) {}
    };

    const CartContextData = {
        state,
        addCart,
        getCartofUser,
        deleteCart,
    };
    return (
        <CartContext.Provider value={CartContextData}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
