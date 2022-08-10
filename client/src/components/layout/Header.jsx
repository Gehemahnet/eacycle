import {NavLink, Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {useAuth} from "../../hooks/auth.hook"
import {setTokenAction} from "../../store/authReducer"
import Auth from "../auth/Auth"
import Avatar from "../../images/icons/avatar.svg"
import './header.sass'

const Header = () => {
    //Redux actions
    const dispatch = useDispatch()
    //States
    const isAuthenticated = useSelector(state => state.isAuth.isAuthenticated)
    const userDropCalled = useSelector(state => state.userDrop.userDropCalled)

    const toggleAuthPopup = () => {
        dispatch({type: "toggleAuthPopup"})
    }
    const toggleUserDrop = () => {
        dispatch({type: "toggleUserDrop"})
    }
    //Other functions
    const auth = useAuth()
    const logout = () => {
        auth.logout()
        dispatch(setTokenAction({token: null, clientId: null}))
        toggleAuthPopup()
        window.location.reload()
    }
    return (
        <header className="header">
            <div className="wrapper">
                <h1 className="header__logo">
                    Eacycle
                </h1>
                <nav className="header__navigation">
                    <NavLink to='/'
                             className={({isActive}) => isActive ? "header__link _active" : "header__link"}
                    >
                        Домашняя
                    </NavLink>
                    {
                        isAuthenticated
                            ?
                            <>
                                <NavLink to='/contact'
                                         className={({isActive}) => isActive ? "header__link _active" : "header__link"}
                                >
                                    Связаться
                                </NavLink>
                                <NavLink to='/cases'
                                         className={({isActive}) => isActive ? "header__link _active" : "header__link"}
                                >
                                    Случаи
                                </NavLink>
                                <NavLink to='/officers'
                                         className={({isActive}) => isActive ? "header__link _active" : "header__link"}
                                >
                                    Сотрудники
                                </NavLink>
                            </>
                            :
                            <NavLink to='/public/contact'
                                     className={({isActive}) => isActive ? "header__link _active" : "header__link"}
                            >
                                Связаться
                            </NavLink>

                    }
                </nav>
                {
                    isAuthenticated
                        ?
                        <div className="header__user-profile" onClick={toggleUserDrop}>
                            <div className="header__user-profile-main">
                                <img className="header__user-avatar" src={Avatar} alt="avatar"/>
                            </div>
                            <div className={userDropCalled ? "header__user-profile-additional" : "hidden"}
                                 onClick={event => event.stopPropagation()}>
                                <Link to="/profile" className="header__user-profile-link">
                                    Профиль
                                </Link>
                                <button
                                    className="header__user-button"
                                    onClick={logout}
                                >
                                    Выйти
                                </button>
                            </div>
                        </div>
                        :
                        <div className="header__user">
                            <Auth
                                toggleAuth={toggleAuthPopup}
                            />
                            <button
                                className="header__user-action"
                                type="button"
                                onClick={() => {
                                    toggleAuthPopup()
                                }}
                            >
                                Войти
                            </button>
                        </div>
                }
            </div>
        </header>
    )
}

export default Header