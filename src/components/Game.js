import {gameReducer, gameActions} from "../reducers/gameReducer";
import {useContext, useReducer} from "react";
import {GameContext} from '../contexts/GameContext'

export const Game = () => {
    const [state, dispatch] = useContext(GameContext);
    const {game} = state;
    console.log(game);
    return (<div className="game">
        <button onClick={
            () => {
                dispatch({type: 'UPDATE', payload: {name: 'Barry Allen', plays: [{x: 100, y: 500}]}});
            }
        }>Update
        </button>
    </div>)
};
