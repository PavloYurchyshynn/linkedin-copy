import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://linkedin-copy.herokuapp.com/api'
})

export const usersAPI = {
    getConnections() {
        return instance.get('connections')
            .then(response => {
                return response.data
            })
    },
    getRecommendedUsers() {
        return instance.get('recommendedUsers')
            .then(response => {
                return response.data
            })
    },
    getViewedProfileUsers() {
        return instance.get('viewedProfileUsers')
            .then(response => {
                return response.data
            })
    },
}

export const profileAPI = {
    getProfile(profileId) {
        return instance.get(`connections/${profileId}`)
            .then(response => {
                return response.data
            })
    },
}

export const networkAPI = {
    getNetworkPages() {
        return instance.get('networkPages')
            .then(response => {
                return response.data
            })
    },
    getNetworkUsers() {
        return instance.get('networkUsers')
            .then(response => {
                return response.data
            })
    },
}

export const notificationsAPI = {
    getNotifications() {
        return instance.get('notifications')
            .then(response => {
                return response.data
            })
    },
}

export const jobsAPI = {
    getJobs() {
        return instance.get('recommendedJobs')
            .then(response => {
                return response.data
            })
    },
}

export const dialogsAPI = {
    getDialogUsers() {
        return instance.get('dialogUsers')
            .then(response => {
                return response.data
            })
    },
    getMessages(id) {
        return instance.get(`dialogUsers/${id}`)
            .then(response => {
                return response.data
            })
    },
}