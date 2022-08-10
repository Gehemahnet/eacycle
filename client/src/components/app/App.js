import './App.sass'
import {Routes, Route} from "react-router-dom"
import Layout from "../layout/Layout"
import Home from "../../pages/home/Home"
import Contact from "../../pages/contact/Contact"
const App = () => {

    return (
        <Routes>
            <Route path='/' element={
                <Layout/>
            }>
                <Route index element={<Home/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Route>
        </Routes>
    );
}

export default App;
