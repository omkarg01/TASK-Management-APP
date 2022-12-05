import axios from "axios"

export const updateTodoTitle = (title, id) => async (dispatch, getState) => {
    try {
        const {
            userLogin: { userInfo },
        } = getState()

        console.log("userInfo", userInfo)

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.put(
            `/editTodo/${id}`,
            {title},
            config
        )

        dispatch({
            type: "EDIT_TODO_SUCCESS",
            payload: data,
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
