import axios from 'axios'

export const login = (email, password) => async (dispatch) => {
    try {

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        // console.log("login action in userActions.js")

        const { data } = await axios.post(
            '/login',
            { email, password },
            config
        )

        dispatch({
            type: "USER_LOGIN_SUCCESS",
            payload: data,
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: "USER_LOGIN_FAIL",
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}