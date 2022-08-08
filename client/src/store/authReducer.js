const defaultState = {
    token: JSON.parse(localStorage.getItem("userData")) || null,
    login: function noop() {},
    logout: function noop() {},
    isAuthenticated: Boolean(JSON.parse(localStorage.getItem("userData")))
}

export const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "setToken":
            return {
                ...state,
                token: action.payload
            }

        case "authenticate":
            return {
                ...state,
                isAuthenticated: true
            }
        default:
            return state
    }
}
export const setTokenAction = payload => ({type:"setToken", payload})
export const authenticateAction = payload => ({type:"authenticate", payload})