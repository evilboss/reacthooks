export const gameActions = {
    UPDATE: 'UPDATE'
}
export const gameReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE':
            return {
                ...state,
                game: {}
            };
        default:
            return {...state};
    }
};

