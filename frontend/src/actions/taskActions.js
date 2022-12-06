import axios from "axios"

export const updateTask = (task, key, id) => async (dispatch, getState) => {
    try {
        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            }
        }

        const { data } = await axios.put(
            `/editTask/${id}`,
            {task, key},
            config
        )
        console.log("data", data)
        data["key"] = key;

        dispatch({
            type: "EDIT_TASK_SUCCESS",
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: "EDIT_TASK_FAIL",
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }   
}

