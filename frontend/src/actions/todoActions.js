import axios from "axios"

export const updateTodoTitle = (id, title) => async (dispatch, getState) => {
    try {
        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.put(
            `/editTodo/${id}`,
            { title },
            config
        )

        console.log("data.title", data)

        dispatch({
            type: "EDIT_TODO_SUCCESS",
            payload: data.todo.title,
        })
    } catch (error) {
        dispatch({
            type: "EDIT_TODO_FAIL",
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const deleteTodo = (id) => async (dispatch, getState) => {
    try {
        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        await axios.delete(`/deleteTodo/${id}`, config)

        dispatch({ type: "DELETE_TODO_SUCCESS" })
    } catch (error) {
        dispatch({
            type: "DELETE_TODO_FAIL",
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}