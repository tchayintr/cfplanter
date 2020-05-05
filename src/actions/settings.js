export const saveSettingsState = (state) => {
    return {
        type: "SAVE_SETTINGS_STATE",
        payload: {
            alignment: state.alignment,
            colour: state.colour,
            subscript: state.subscript,
            triangles: state.triangles,
            enlarge: state.enlarge,
        }
    }
};