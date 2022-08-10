import {Routes, Route} from "react-router-dom"
import './App.sass'
import Layout from "../layout/Layout"
import Home from "../home/Home"
import Contact from "../contact/Contact"
import Officers from "../officers/Officers"
import CaseDetail from "../cases/CaseDetail"
import Cases from "../cases/Cases"

const App = () => {

    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='contact' element={<Contact/>}/>
                <Route path='cases' element={<Cases/>}/>
                <Route path='cases/:id' element={<CaseDetail/>}/>
                <Route path='officers' element={<Officers/>}/>
                {/*<Route path='/officers/:id' element={<Officers/>}/>*/}
            </Route>
        </Routes>
    );
}

export default App;
