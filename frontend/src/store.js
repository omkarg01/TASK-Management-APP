import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { userDetailsReducer, userLoginReducer, userRegisterReducer } from './reducers/userReducers'
import { editTodoReducer } from './reducers/todoReducers'
import { editTaskReducer } from './reducers/taskReducer'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userDetails: userDetailsReducer,
    userRegister: userRegisterReducer,
    editTodo: editTodoReducer,
    editTask: editTaskReducer,
})


const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

const initialState = {
    userLogin: {
        userInfo: userInfoFromStorage
    }
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;