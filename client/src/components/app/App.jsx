import {Routes, Route} from "react-router-dom"
import {useSelector} from "react-redux"
import './App.sass'
import Layout from "../layout/Layout"
import Home from "../home/Home"
import Contact from "../contact/Contact"
import Officers from "../officers/Officers"
import CaseDetail from "../cases/CaseDetail"
import Cases from "../cases/Cases"
import {useRoutes} from "../../router/router";

const App = () => {
    const isAuth = useSelector(state => state.isAuth.isAuthenticated)
    const routes = useRoutes(isAuth)
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='public/contact' element={<Contact/>}/>
                {isAuth && routes}
            </Route>
        </Routes>
    );
}

export default App;
