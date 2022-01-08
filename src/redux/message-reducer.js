import { dialogsAPI } from "../api/api"

const SET_DIALOG_USERS = 'SET_DIALOG_USERS'
const SET_MESSAGE = 'SET_MESSAGE'

let initialState = {
    dialogUsers: [],
    message: []
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DIALOG_USERS: {
            return { ...state, dialogUsers: action.dialogUsers }
        }
        case SET_MESSAGE: {
            return { ...state, message: action.message }
        }
        default: {
            return state
        }
    }
}

export const setDialogUsers = (dialogUsers) => ({ type: SET_DIALOG_USERS, dialogUsers })
export const setMessages = (message) => ({ type: SET_MESSAGE, message })

export const getDialogUsers = () => {

    return (dispatch) => {
        dialogsAPI.getDialogUsers().then(data => {
            dispatch(setDialogUsers(data))
        })
    }
}

export const getMessages = (id) => {

    return (dispatch) => {
        dialogsAPI.getMessages(id).then(data => {
            dispatch(setMessages(data.messages))
        })
    }
}

export default messageReducer