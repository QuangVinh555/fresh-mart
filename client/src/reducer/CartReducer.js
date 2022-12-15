const CartReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "START":
            return {
                loading: true,
                error: null,
            };
        case "ADD_CART":
            return {
                ...state,
                loading: false,
                carts: payload,
                error: null,
            };

        case "FAILURED":
            return {
                loading: false,
                error: payload,
            };

        default:
            return state;
    }
};

export default CartReducer;
