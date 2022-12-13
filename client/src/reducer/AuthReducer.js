const AuthReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "START":
            return {
                user: null,
                loading: true,
                error: null,
            };
        case "SUCCESSFULlY":
            return {
                loading: false,
                user: payload,
                error: null,
            };

        case "FAILURED":
            return {
                loading: false,
                user: null,
                error: payload,
            };
        default:
            return state;
    }
};
export default AuthReducer;
