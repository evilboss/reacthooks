import React, {createContext, useContext, useReducer} from 'react';

const initialState = {
    game: {},
    loading: true,
    error: null
};
const reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE":
            return {
                game: {...state.game, ...action.payload}
            };
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
        default:
            throw new Error();
    }
};
export const GameContext = createContext();
export const GameContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <GameContext.Provider value={[state, dispatch]}>
            {props.children}
        </GameContext.Provider>
    );
}

