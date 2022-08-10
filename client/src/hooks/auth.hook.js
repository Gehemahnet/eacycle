import {useCallback, useEffect} from "react";
import {useSelector} from "react-redux";

export const useAuth = () => {
    const token = useSelector(state => state.isAuth.token)
    const clientId = useSelector(state => state.isAuth.clientId)

    const login = useCallback((jwtToken, clientId) => {
        localStorage.setItem("token", JSON.stringify(jwtToken))
        localStorage.setItem("clientId", JSON.stringify(clientId))
    }, [])

    const logout = useCallback(() => {
        localStorage.removeItem("token")
        localStorage.removeItem("clientId")
    }, [])

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("token"))
        const clientId = JSON.parse(localStorage.getItem("clientId"))
        if (token && clientId) {
            login(token, clientId)
        }
    }, [login])
    return {login, logout, token, clientId}
}