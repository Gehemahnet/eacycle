import {Route} from "react-router-dom";
import Contact from "../pages/contact/Contact";
import Cases from "../pages/cases/Cases";
import CaseDetail from "../pages/cases/CaseDetail";
import Officers from "../pages/officers/Officers";
import Profile from "../pages/profile/Profile";

export const useRoutes = isAuth => {
    if (isAuth) {
        return (
            <Route path='/'>
                <Route path='contact' element={<Contact/>}/>
                <Route path='cases' element={<Cases/>}/>
                <Route path='cases/:id' element={<CaseDetail/>}/>
                <Route path='officers' element={<Officers/>}/>
                <Route path='profile' element={<Profile/>}/>
                {/*<Route path='/officers/:id' element={<Officers/>}/>*/
                }
            </Route>
        )
    }
}
