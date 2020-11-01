import {gameReducer, gameActions} from "../reducers/gameReducer";
import {useContext, useReducer} from "react";
import {GameContext} from '../contexts/GameContext'

export const Game = () => {
    const [state, dispatch] = useContext(GameContext);
    const {game} = state;
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
