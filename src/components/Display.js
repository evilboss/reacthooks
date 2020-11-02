import {gameReducer, gameActions} from "../reducers/gameReducer";
import {useContext, useReducer} from "react";
import {AppContext} from "../contexts/AppContext";

export const Display = () => {
    const [state, dispatch] = useContext(AppContext);
    return (<div className="display">
        <pre>
                    {JSON.stringify(state)}
        </pre>

    </div>)
};
