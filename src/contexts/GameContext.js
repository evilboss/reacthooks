import React, {createContext, useContext, useReducer} from 'react';

export const gameReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE":
            return {...state, ...action.payload};
        case "DELETE":
        case 'CLEAR_ALL':
            return {}

        case
        "START"
        :
            return {
                loading: true
            };
        case
        "COMPLETE"
        :
            return {
                loading: false
            };
        default:
            return state;

    }
};
export const GameContext = createContext();
export const GameContextProvider = (props) => {
    return (
        <h1></h1>
    );
}

