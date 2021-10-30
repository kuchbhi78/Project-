import React from "react";
import Login from "./Form";
import Head from "./header";
import {Route,Switch} from react-router;
 
const Router=()=>{
       return(
           <>
           <Switch>
               <Router exact path="/" coponent={Head}/>
           </Switch>
           </>
       )
}
export default Router;