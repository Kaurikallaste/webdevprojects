import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/blog/Navbar';
import Home from './components/blog/Home';
import Post from './components/blog/Post';
import Contact from './components/blog/Contact';
import Posts from './components/blog/Posts';
import ErrorPage from './components/blog/ErrorPage';

const Routes = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Navbar />
                        <Home />
                    </Route>
                    <Route exact path="/posts">
                        <Navbar />
                        <Posts />
                    </Route>
                    <Route exact path="/contact">
                        <Navbar />
                        <Contact />
                    </Route>
                    <Route exact path="/post/:id">
                        <Navbar />
                        <Post />
                    </Route>
                    <Route exact path="*">
                        <ErrorPage />
                    </Route>
                    <Route exact path="/adminlogin">
                        <ErrorPage />
                    </Route>
                    <Route exact path="/admin">
                        <ErrorPage />
                    </Route>
                    <Route exact path="/posteditor">
                        <ErrorPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

/** 
 * adminlogin - login leht adminpaneeli jaoks
 * admin - list kus saab olemasolevaid postitusi muuta/kustutada ja nupp kust saab minna uue postituse loomise juurde
 * posteditor - md editor kus saab postitusi muuta ja uusi positusi luua 
 */

export default Routes;