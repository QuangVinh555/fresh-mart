const UserReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "START":
            return {
                loading: true,
                error: null,
            };

        case "GET_USER":
            return {
                loading: false,
                user: payload,
                error: null,
            };

        case "UPDATE_USER":
            return {
                loading: false,
                user: payload,
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

export default UserReducer;
