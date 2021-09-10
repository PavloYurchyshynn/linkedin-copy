const SAVE = 'SAVE'
const NOTSAVE = 'NOTSAVE'

let initialState = {
    recommendedJobs: [
        {
            id: 1,
            jobJogo: 'data:image/png;base64,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',
            jobName: 'React Developer',
            companyName: 'elopage GmbH',
            cityAndCountry: 'Lviv, Ukraine',
            activelyRecruitingStatus: true,
            applicants: 1,
            saveStatus: false,
        },
        {
            id: 2,
            jobJogo: 'https://upload.wikimedia.org/wikipedia/ru/5/54/Wix.com_Logo.png',
            jobName: 'Fullstack JavaScript Engineer',
            companyName: 'Wix.com',
            cityAndCountry: 'Lviv, Ukraine',
            activelyRecruitingStatus: true,
            applicants: 1,
            saveStatus: false,
        },
        {
            id: 3,
            jobJogo: 'https://media-exp1.licdn.com/dms/image/C560BAQH7G4ppO5H97A/company-logo_200_200/0/1557483616368?e=2159024400&v=beta&t=ue5J5IOXiVSwhGXTrfXH9Ucn1hXX2F0zaLDK3Yxk0Wo',
            jobName: 'Middle/Senior React Native Developer',
            companyName: 'EPAM Systems',
            cityAndCountry: 'Lviv, Ukraine',
            activelyRecruitingStatus: true,
            applicants: 1,
            saveStatus: false,
        },
        {
            id: 4,
            jobJogo: 'https://habrastorage.org/getpro/moikrug/uploads/company/100/006/954/6/logo/2cd73e86cf92491242692a7c16cb8317.png',
            jobName: 'Full-stack Engineer',
            companyName: 'Toptal',
            cityAndCountry: 'Lviv, Ukraine',
            activelyRecruitingStatus: true,
            applicants: 0,
            saveStatus: false,
        },
        {
            id: 5,
            jobJogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxUblc--yhDfK_KW1Z4FM4vwx8FYH2jYeTKg&usqp=CAU',
            jobName: 'Junior React Developer',
            companyName: 'Windmill',
            cityAndCountry: 'Mykolaiv, Lviv, Ukraine',
            activelyRecruitingStatus: false,
            applicants: 6,
            saveStatus: false,
        },
        {
            id: 6,
            jobJogo: 'data:image/png;base64,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',
            jobName: 'Junior Developer - Web UI IRC128719',
            companyName: 'GlobalLogic',
            cityAndCountry: 'Mykolaiv, Lviv, Ukraine',
            activelyRecruitingStatus: true,
            applicants: 3,
            saveStatus: false,
        },
    ],
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
        default: {
            return state
        }
    }
}

export const save = (jobId) => ({ type: SAVE, jobId })
export const notSave = (jobId) => ({ type: NOTSAVE, jobId })

export default jobsReducer