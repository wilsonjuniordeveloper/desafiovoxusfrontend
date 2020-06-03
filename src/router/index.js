import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Create from '../page/create'

const router = ()=>{
    return(
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Create/>
                </Route>
            </Switch>
        </Router>    
    )
}
export default router