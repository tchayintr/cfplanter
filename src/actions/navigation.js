export const saveNavigationIndicator = (indicator) => {
    return {
        type: "SAVE_NAVIGATION_INDICATOR",
        payload: {
            indicatorState: indicator,
        }
    }
};