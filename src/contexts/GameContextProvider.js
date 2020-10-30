import React, {useState} from 'react';

export const GameContextProvider = props => {
    const [count, setCount] = useState(0);

    return (
        <GameContextProvider.Provider value={[count, setCount]}>
            {props.children}
        </GameContextProvider.Provider>
    );
}
