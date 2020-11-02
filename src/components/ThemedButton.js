import React, {useContext} from "react";

const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};

const ThemeContext = React.createContext();

export const ThemeContextProvider = ({theme = 'light'}) => {
    return (
        <ThemeContext.Provider value={themes[theme]}>
            <Toolbar/>
        </ThemeContext.Provider>
    );

}


function Toolbar(props) {
    return (
        <div>
            <ThemedButton/>
        </div>
    );
}


export const ThemedButton = () => {
    const theme = useContext(ThemeContext);
    return (
        <button style={{background: theme.background, color: theme.foreground}}>
            I am styled by theme context!
        </button>
    );
};
