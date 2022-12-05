export const editTaskReducer = (state = {}, action) => {
    switch (action.type) {
        case "EDIT_TASK_SUCCESS":
            return {}
        case "EDIT_TASK_FAIL":
            return { error: action.payload }
        default:
            return state;
    }
}
