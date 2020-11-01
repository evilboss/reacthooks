import logo from './logo.svg';
import './App.css';
import ReactPlayer from "react-player"
import React, {useState} from "react";
import {Game} from './components/Game';
import {Game2} from "./components/Game2";
import {GameContextProvider} from "./contexts/GameContext";
import {Display} from "./components/Display";
import {AppRouter} from "./routes/AppRouter";

function App() {
    const [youtubeLink, setYoutubeLink] = useState('');

    return (
        <div className="App">
            <GameContextProvider>
                <AppRouter/>
            </GameContextProvider>
        </div>
    );
}

export default App;
