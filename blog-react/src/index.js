import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './styles.css';

import Navbar from './components/blog/Navbar';
import Home from './components/blog/Home';
import Post from './components/blog/Post';
import Contact from './components/blog/Contact';
import Posts from './components/blog/Posts';
import ErrorPage from './components/blog/ErrorPage';

const App = () => {
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
                </Switch>
            </div>
        </Router>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
