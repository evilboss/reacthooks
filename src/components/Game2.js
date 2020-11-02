import {gameReducer, gameActions} from "../reducers/gameReducer";
import {useContext, useReducer} from "react";
import {AppContext} from "../contexts/AppContext";

export const Game2 = () => {
    const [state, dispatch] = useContext(AppContext);

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
                dispatch({type: 'CLEAR_ALL'});
            }
        }>Delete
        </button>

    </div>)
};
