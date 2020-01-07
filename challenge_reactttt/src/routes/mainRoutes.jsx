import React from "react";
import { Route, Switch } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"

import News from "../page/news"
import SignIn from "../component/sign_in"
import Profile from "../component/profile"
import New from "../page/new"
// import NewsCategory from "../page/newsCategory"

const MainRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component = {News}/>
                <Route  path="/signin" component = {SignIn}/>
                <Route  path="/profile" component = {Profile}/>
                <Route exact path="/news-category/:category" component = {New}/>
            </Switch>
        </BrowserRouter>
    );
};

export default MainRoute;