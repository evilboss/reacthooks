import React, {createContext, useContext, useReducer} from 'react';
export const gameReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE":
            return {...state, ...action.payload};
        case "DELETE":
            return {
                game: {}
            }

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
    }
};
export const GameContext = createContext();
export const GameContextProvider = (props) => {
    return (
        <h1></h1>
    );
}

