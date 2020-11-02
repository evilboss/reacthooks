import {useReducer, createContext} from 'react';
import combineReducers from 'react-combine-reducers';
import {gameReducer} from './GameContext';

const initialIdentity = {
    name: 'Harry'
}

const initialLocation = {
    country: 'UK',
    city: 'London'
}

const initialGameState = {
    loading: true,
    error: null
};


const identityReducer = (state, action) => {
    switch (action.type) {
        case 'ACTION_A':
            return {...state, name: 'Puli'};
        case 'CLEAR':
        case 'CLEAR_ALL':
            return {...state, name: ''}
        default:
            return state;
    }
}

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'ACTION_B':
            return {...state, city: 'Manchester'};
        case 'CLEAR':
        case 'CLEAR_ALL':
            return {...state, name: '', country: '', city: ''}
        default:
            return state;
    }
}

const [profileReducer, initialProfile] = combineReducers({
    identity: [identityReducer, initialIdentity],
    location: [locationReducer, initialLocation],
    game: [gameReducer, initialGameState]
});


export const AppContext = createContext();
export const AppContextProvider = (props) => {
    const [state, dispatch] = useReducer(profileReducer, initialProfile);
    return (
        <AppContext.Provider value={[state, dispatch]}>
            {props.children}
        </AppContext.Provider>
    );
}

