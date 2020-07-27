import React from "react";
import { Route, Redirect } from "react-router-dom";

//home import
import Home from "./home/Home";

const ApplicationViews = (props) => {

    return (
        <>
        <Route exact path="/" render={props=> {
            return <Home {...props}/>
        }}/>
        
        </>
    )
}

export default ApplicationViews;