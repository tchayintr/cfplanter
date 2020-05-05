function reducer(state, action) {
    switch (action.type) {
        case "SAVE_SHOVEL_STATE":
            return {
                ...state,
                value: action.payload.value,
                rows: action.payload.rows,
            };

        default:
            return state;
    }
}


export default reducer;