import React from "react";
import { Route, Redirect } from "react-router-dom";
//home import
import Home from "./home/Home";
//login imports
import Login from "./auth/Login";
import Register from "./auth/Registration";
//search imports
import SearchList from './search/SearchList';
import SearchDetail from './search/SearchDetail';
// saved imports
import SavedList from './saved/SavedList';
import SavedDetail from './saved/SavedDetail';
import SavedEditForm from './saved/SavedEditForm';

const ApplicationViews = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;

  return (
    <>
    {/* home route */}
      <Route 
      exact path="/"
      render={props => {
        if (hasUser) {
          return <Home {...props} />
        } else {
          return <Redirect to="/login" />
        }}} />
    {/* login routes */}
      <Route 
      path="/login" 
      render={props => {
      return <Login setUser={setUser} {...props} /> }} />
    {/* Registration route */}
      <Route 
      path="/register" 
      render={props => {
        return <Register setUser={setUser} {...props} />
      }} />
    {/* search routes */}
      <Route
      exact path="/search"
      render={props => {
        if (hasUser) {
          return <SearchList {...props} hasUser={hasUser} setUser={setUser} />
        } else {
          return <Redirect to="/login" />  
        }
      }} />
      <Route 
      exact path="/search/:place_id" 
      render={(props) => {
        if(hasUser) {
          return (<SearchDetail place_id={props.match.params.place_id} {...props}/>)
        } else {
          return <Redirect to="/login" />  
        }
      }} />
    {/* saved searches routes */}
      <Route
      exact path="/saved"
      render={props => {
        if (hasUser) {
          return <SavedList {...props} hasUser={hasUser} setUser={setUser} />
        } else {
          return <Redirect to="/login" />  
        }
      }} />
      <Route 
      exact path="/saved/:place_id" 
      render={(props) => {
        if(hasUser) {
          return (<SavedDetail place_id={props.match.params.place_id} {...props}/>)
        } else {
          return <Redirect to="/login" />  
        }
      }} />
      <Route 
      path="/saved/:placeId(\d+)/edit"
      render={props => {
        if (hasUser) {
          return <SavedEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
    </>
  )
}

export default ApplicationViews;