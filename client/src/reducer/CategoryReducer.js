const CategoryReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "START":
            return {
                loading: true,
                error: null,
            };
        case "GET_ALL_CATEGORIES":
            return {
                loading: false,
                categories: payload,
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

export default CategoryReducer;
