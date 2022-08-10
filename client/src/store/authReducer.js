const defaultState = {
    token:null,
    clientId:null,
    login: function noop() {},
    logout: function noop() {},
    isAuthenticated: Boolean(localStorage.getItem('userData'))
}

export const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "setToken":
            return {
                ...state,
                token: action.payload.token,
                clientId: action.payload.clientId,
                isAuthenticated: Boolean(action.payload.token)
            }
        default:
            return state
    }
}
export const setTokenAction = payload => ({type:"setToken", payload})