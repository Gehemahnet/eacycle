import {useCallback, useEffect} from "react";
import {useSelector} from "react-redux";

const storageName = 'userData'

export const useAuth = () => {
    const token = useSelector(state => state.isAuth.token)
    const login = useCallback((jwtToken) => {
        localStorage.setItem(storageName, JSON.stringify({token: jwtToken}))
    }, [])

    const logout = useCallback(() => {
        localStorage.removeItem(storageName)
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))
        if (data && data.token) {
            login(data.token)
        }
    }, [login])
    return {login, logout, token}
}