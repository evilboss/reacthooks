import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Game} from "../components/Game";
import {Game2} from "../components/Game2";
import {Display} from "../components/Display";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/game">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>

                <Switch>
                    <Route exact path="/">
                        <Game/>
                    </Route>
                    <Route path="/game">
                        <Game2/>
                    </Route>

                </Switch>
                <Display/>
            </div>
        </Router>
    )
}
