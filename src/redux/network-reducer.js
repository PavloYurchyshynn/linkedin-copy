import { networkAPI } from "../api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const CONNECT = 'CONNECT'
const DISCONNECT = 'DISCONNECT'
const SET_NETWORK_PAGES = 'SET_NETWORK_PAGES'
const SET_NETWORK_USERS = 'SET_NETWORK_USERS'

let initialState = {
    networkPages: [],
    networkUsers: [],
}

const networkReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                networkPages: state.networkPages.map(u => {
                    if (u.id === action.pageId) {
                        return { ...u, followStatus: true }
                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                networkPages: state.networkPages.map(u => {
                    if (u.id === action.pageId) {
                        return { ...u, followStatus: false }
                    }
                    return u
                })
            }
        }
        case CONNECT: {
            return {
                ...state,
                networkUsers: state.networkUsers.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, connectStatus: true }
                    }
                    return u
                })
            }
        }
        case DISCONNECT: {
            return {
                ...state,
                networkUsers: state.networkUsers.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, connectStatus: false }
                    }
                    return u
                })
            }
        }
        case SET_NETWORK_PAGES: {
            return { ...state, networkPages: action.networkPages }
        }
        case SET_NETWORK_USERS: {
            return { ...state, networkUsers: action.networkUsers }
        }
        default: {
            return state
        }
    }
}

export const followPage = (pageId) => ({ type: FOLLOW, pageId })
export const unfollowPage = (pageId) => ({ type: UNFOLLOW, pageId })
export const connectUser = (userId) => ({ type: CONNECT, userId })
export const disconnectUser = (userId) => ({ type: DISCONNECT, userId })
export const setNetworkPages = (networkPages) => ({ type: SET_NETWORK_PAGES, networkPages })
export const setNetworkUsers = (networkUsers) => ({ type: SET_NETWORK_USERS, networkUsers })

export const getNetworkPages = () => {

    return (dispatch) => {
        networkAPI.getNetworkPages().then(data => {
            dispatch(setNetworkPages(data))
        })
    }
}

export const getNetworkUsers = () => {

    return (dispatch) => {
        networkAPI.getNetworkUsers().then(data => {
            dispatch(setNetworkUsers(data))
        })
    }
}

export default networkReducer