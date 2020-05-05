function reducer(state, action) {
    switch (action.type) {
        case "SAVE_SETTINGS_STATE":
            return {
                ...state,
                alignment: action.payload.alignment,
                colour: action.payload.colour,
                subscript: action.payload.subscript,
                triangles: action.payload.triangles,
                enlarge: action.payload.enlarge,
            };

        default:
            return state;
    }
}


export default reducer;