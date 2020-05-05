function reducer(state, action) {
    switch (action.type) {
        case "SAVE_NAVIGATION_INDICATOR":
            return {
                ...state,
                indicatorState: action.payload.indicatorState,
            };

        default:
            return state;
    }
}


export default reducer;