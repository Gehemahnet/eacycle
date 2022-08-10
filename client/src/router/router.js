import {Route, Redirect} from "react-router-dom";
import Contact from "../components/contact/Contact";
import Cases from "../components/cases/Cases";
import CaseDetail from "../components/cases/CaseDetail";
import Officers from "../components/officers/Officers";

export const useRoutes = isAuth => {
    if (isAuth) {
        return (
            <Route path='/'>
                <Route path='contact' element={<Contact/>}/>
                <Route path='cases' element={<Cases/>}/>
                <Route path='cases/:id' element={<CaseDetail/>}/>
                <Route path='officers' element={<Officers/>}/>
                <Redirect to='/'/>
                {/*<Route path='/officers/:id' element={<Officers/>}/>*/
                }
            </Route>
        )
    }
}
