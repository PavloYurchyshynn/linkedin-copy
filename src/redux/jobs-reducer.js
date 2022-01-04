import { jobsAPI } from "../api/api"

const SAVE = 'SAVE'
const NOTSAVE = 'NOTSAVE'
const SET_JOBS = 'SET_JOBS'

let initialState = {
    recommendedJobs: [],
}

const jobsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE: {
            return {
                ...state,
                recommendedJobs: state.recommendedJobs.map(e => {
                    if (e.id === action.jobId) {
                        return { ...e, saveStatus: true }
                    }
                    return e
                })
            }
        }
        case NOTSAVE: {
            return {
                ...state,
                recommendedJobs: state.recommendedJobs.map(e => {
                    if (e.id === action.jobId) {
                        return { ...e, saveStatus: false }
                    }
                    return e
                })
            }
        }
        case SET_JOBS: {
            return { ...state, recommendedJobs: action.recommendedJobs}
        }
        default: {
            return state
        }
    }
}

export const save = (jobId) => ({ type: SAVE, jobId })
export const notSave = (jobId) => ({ type: NOTSAVE, jobId })
export const setJobs = (recommendedJobs) => ({ type: SET_JOBS, recommendedJobs })

export const getJobs = () => {

    return (dispatch) => {
        jobsAPI.getJobs().then(data => {
            dispatch(setJobs(data))
        })
    }
}

export default jobsReducer