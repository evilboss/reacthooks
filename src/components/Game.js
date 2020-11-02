import {gameReducer, gameActions} from "../reducers/gameReducer";
import React, {useContext, useReducer} from "react";
import {GameContext} from '../contexts/GameContext';
import {AppContext} from "../contexts/AppContext";



export const Game = () => {
    const [state, dispatch] = useContext(AppContext);
    console.log(state);
    return (<div className="game">
        <button onClick={
            () => {
                dispatch({type: 'UPDATE', payload: {name: 'Barry Allen', plays: [{x: 100, y: 500}]}});
            }
        }>Update
        </button>
        <button onClick={
            () => {
                dispatch({type: 'UPDATE', payload: {name: 'Clark Kent', plays: [{x: 150, y: 500}]}});
            }
        }>Change
        </button>
    </div>)
};
