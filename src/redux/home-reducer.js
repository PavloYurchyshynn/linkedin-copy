import userPhoto from '../images/user.png'

let initialState = {
    profileInfo: {
        id: 1,
        userBackground: 'https://s3.amazonaws.com/thumbnails.venngage.com/template/10d4dd8e-178e-44c0-b848-e7189399231a.png',
        userPhoto: userPhoto,
        userName: 'Pavlo Yurchyshyn',
        userPosition: 'Trainee-junior React.js developer',
        userLocation: 'Ivano-Frankivsk, Ukraine',
    }
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {

        default: {
            return state
        }
    }
}

export default homeReducer