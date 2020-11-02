import React, {useContext, useReducer} from "react";
import {AppContext} from "../contexts/AppContext";

export const Identity = () => {
    const [state, dispatch] = useContext(AppContext);
    console.log(state);
    return (<div className="game">
        <button onClick={
            () => {
                dispatch({type: 'ACTION_B'});
            }
        }>ACTION_B
        </button>

        <button onClick={
            () => {
                dispatch({type: 'ACTION_A'});
            }
        }>ACTION_A
        </button>
        <button onClick={
            () => {
                dispatch({type: 'CLEAR'});
            }
        }>CLEAR
        </button>

    </div>)
};
