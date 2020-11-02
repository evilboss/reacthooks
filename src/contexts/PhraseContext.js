import React, {useContext, createContext} from "react";

const pageSentences = {
    home: {
        header: 'home page text',
        background: "#eeeeee"
    },
    play: {
        foreground: "#ffffff",
        background: "#222222"
    }
};

export const PhraseContext = createContext();

export const PhraseContextProvider = (props, {page = 'home'}) => {
    return (
        <PhraseContext.Provider value={pageSentences[page]}>
            {props.children}
        </PhraseContext.Provider>
    );

}
