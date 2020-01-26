import React, {Fragment} from 'react';
import './App.css';
import LandingPage from './LandingPage'
import AppLayout from './AppLayout'
import ProtectedRoute from './ProtectedRoute';
import Dummy from './dummy'
import Sample from './Sample'
import auth from './auth'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () =>{
       console.log(auth.authonticated)
  return (
    <div className="App">
   <Router> 
   
      <Switch>
         <Route exact path='/' component={LandingPage} />
         <Fragment>
         <Dummy/>
         <Switch>
         <ProtectedRoute exact path='/app' component={AppLayout} />
         <ProtectedRoute exact path='/sample' component={Sample} />
         </Switch>
         </Fragment>
        
    
     
       </Switch>
       </Router>
    </div>
  );
}


export default App;
