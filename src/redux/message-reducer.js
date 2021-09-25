let initialState = {
    dialogUsers: [
        {
            id: 1,
            photo: 'https://www.g20.org/wp-content/uploads/2021/01/people.jpg',
            name: 'Diane from LinkedIn Premium',
            messages: [
                { id: 1, message: `Hello` },
                { id: 2, message: `I'd like to offer you a free trial of LinkedIn Premium.` },
            ]
        },
        {
            id: 2,
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKX9ClIfHI7kdTOFYmEgKuEQ9GdyjjORLm2Q&usqp=CAU',
            name: 'Victoria Patsulya',
            messages: [
                { id: 1, message: `Hello` },
                { id: 2, message: `How are you` },
                { id: 3, message: `?` },
            ]
        },
        {
            id: 3,
            photo: 'https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2017/03/28/Local-Politics/Images/Supreme_Court_Gorsuch_Moments_22084-70c71-0668.jpg?t=20170517',
            name: 'Oleh Matsevych',
            messages: [
                { id: 1, message: `Bruh` },
            ]
        },
    ],
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return state
        }
    }
}

export default messageReducer