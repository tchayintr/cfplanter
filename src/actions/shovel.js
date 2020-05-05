export const saveShovelState = (state) => {
    return {
        type: "SAVE_SHOVEL_STATE",
        payload: {
            value: state.value,
            rows: state.rows,
        }
    }
};