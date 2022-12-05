export const editTodoReducer = (state = {}, action) => {
    switch (action.type) {
        case "EDIT_TODO_SUCCESS":
            return { title: action.payload }
        case "EDIT_TODO_FAIL":
            return { error: action.payload }
        default:
            return state;
    }
}