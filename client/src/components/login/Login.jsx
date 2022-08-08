import {useState} from "react"
import {useHttp} from "../../hooks/http.hook"
import {useAuth} from "../../hooks/auth.hook"
import AuthField from "../auth/Auth-field"
import AuthButton from "../auth/Auth-button"
import {authenticateAction, setTokenAction} from "../../store/authReducer"
import {useDispatch} from "react-redux"


const Login = ({className, chooseRegistration, toggleAuth}) => {
    //Local state
    const [form, setForm] = useState({email: '', password: ''})
    //Use hooks
    const {request} = useHttp()
    const auth = useAuth()
    //Redux actions
    const dispatch = useDispatch()
    const formHandler = e => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    //Other functions
    const login = async () => {
        try {
            const data = await request("/api/auth/sign_in", "POST", {...form})
            auth.login(data.token)
            dispatch(setTokenAction(data.token))
            dispatch(authenticateAction(true))
        } catch (e) {
            console.log(e)
        }
        toggleAuth()
    }
    return (
        <div className={className} onClick={toggleAuth}>
            <form className="auth__form" onClick={event => event.stopPropagation()}>
                <h2 className="auth__title">Войти в систему</h2>
                <AuthField
                    name={"email"}
                    label={"Ваш E-mail"}
                    type={"email"}
                    onChange={formHandler}
                />
                <AuthField
                    name={"password"}
                    label={"Ваш пароль"}
                    type={"password"}
                    onChange={formHandler}

                />
                <div className="auth__buttons">
                    <AuthButton
                        type={"button"}
                        onClick={chooseRegistration}
                        text={"Регистрация"}
                    />
                    <AuthButton
                        type={"button"}
                        onClick={login}
                        text={"Войти"}
                    />
                </div>
            </form>
        </div>
    )
}

export default Login;