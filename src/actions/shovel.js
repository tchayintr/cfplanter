export const saveShovelState = (state) => {
    return {
        type: "SAVE_SHOVEL_STATE",
        payload: {
            value: state.value,
            rows: state.rows,
        }
    }
};

export const saveShovelCursor = (state) => {
    return {
        type: "SAVE_SHOVEL_CURSOR",
        payload: {
            selectionStart: state.selectionStart,
            selectionEnd: state.selectionEnd,
        }
    }
};