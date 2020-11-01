import {gameReducer, gameActions} from "../reducers/gameReducer";
import {useContext, useReducer} from "react";
import {GameContext, gameContext} from '../contexts/GameContext'

export const Game2 = () => {
    const [state, dispatch] = useContext(GameContext);
    const {game} = state;

    return (<div className="game">
        <button onClick={
            () => {
                dispatch({type: 'UPDATE', payload: {status: true}});
            }
        }>Set
        </button>

        <button onClick={
            () => {
                dispatch({type: 'UPDATE', payload: {status: false}});
            }
        }>Dont set
        </button>
        <button onClick={
            () => {
                dispatch({type: 'DELETE'});
            }
        }>Delete
        </button>

    </div>)
};
