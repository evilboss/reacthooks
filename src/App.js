import React, {useState} from "react";
import ReactPlayer from "react-player"
import {ClientContextProvider} from 'react-fetching-library';

import logo from './logo.svg';
import './App.css';

import {Game} from './components/Game';
import {Game2} from "./components/Game2";
import {GameContextProvider} from "./contexts/GameContext";
import {Display} from "./components/Display";
import {AppRouter} from "./routes/AppRouter";
import {AppContext, AppContextProvider} from "./contexts/AppContext";
import {UserList} from "./components/UserList";

function App() {

    return (
        <div className="App">
            <AppContextProvider>
                <AppRouter/>
            </AppContextProvider>

        </div>
    );
}

export default App;
