import axios from 'axios'

export const login = (email, password) => async (dispatch) => {
    try {

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

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

export const getUserProfile = () => async (dispatch, getState) => {
    try {
        const {
            userLogin: { userInfo },
        } = getState()
        // console.log("userInfo", userInfo)

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.get('/profile', config)

        console.log("data", data)

        dispatch({
            type: "USER_DETAILS_SUCCESS",
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: "USER_DETAILS_FAIL",
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}