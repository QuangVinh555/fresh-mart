const ProductReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "START":
            return {
                loading: true,
                error: null,
            };
        case "ADD_PRODUCT":
            return {
                loading: false,
                category: payload,
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

export default ProductReducer;
