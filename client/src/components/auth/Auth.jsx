import './Auth.sass'
import Login from "../login/Login"
import Registration from "../registration/Registration"
import {useDispatch, useSelector} from "react-redux";


const Auth = ({toggleAuth}) => {
    //Redux
    const dispatch = useDispatch()
        //States
    const authPopupCalled = useSelector(state => state.authPopup.authPopupCalled)
    const typeOfAuth = useSelector(state => state.typePopup.typeOfAuth)
        //Actions
    console.log(authPopupCalled)
    const chooseLogin = () => {
        dispatch({type: "ChooseLogin"})
    }
    const chooseRegistration = () => {
        dispatch({type: "ChooseRegistration"})
    }
    return (
        <>
            {
                typeOfAuth === "Login"
                    ?
                    <Login
                        className={authPopupCalled && typeOfAuth === "Login"? "auth" : "hidden"}
                        chooseRegistration={chooseRegistration}
                        toggleAuth={toggleAuth}
                    />
                    :
                    <Registration
                        className={authPopupCalled && typeOfAuth === "Registration"? "auth" : "hidden"}
                        chooseLogin={chooseLogin}
                        toggleAuth={toggleAuth}
                    />
            }
        </>
    )
}

export default Auth