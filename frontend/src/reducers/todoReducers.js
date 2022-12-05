export const editTodoReducer = (state = {}, action) => {
    switch (action.type) {
        case "EDIT_TODO_SUCCESS":
            return {}
        default:
            return state;
    }
}