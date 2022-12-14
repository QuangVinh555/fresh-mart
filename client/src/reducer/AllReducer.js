const AllReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "START":
            return {
                loading: true,
                error: null,
            };
        case "GET_ALL_DATA":
            return {
                loading: false,
                data: payload,
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

export default AllReducer;
