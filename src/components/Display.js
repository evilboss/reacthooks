import {gameReducer, gameActions} from "../reducers/gameReducer";
import {useContext, useReducer} from "react";
import {GameContext, gameContext} from '../contexts/GameContext'

export const Display = () => {
    const [state, dispatch] = useContext(GameContext);
    const {game} = state;

    return (<div className="display">
        <pre>
                    {JSON.stringify(game)}

        </pre>

    </div>)
};
