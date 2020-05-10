function reducer(state, action) {
    switch (action.type) {
        case "SAVE_SHOVEL_STATE":
            return {
                ...state,
                value: action.payload.value,
                rows: action.payload.rows,
            };

        case "SAVE_SHOVEL_CURSOR":
            return {
                ...state,
                selectionStart: action.payload.selectionStart,
                selectionEnd: action.payload.selectionEnd,
            };
        
        default:
            return state;
    }
}


export default reducer;