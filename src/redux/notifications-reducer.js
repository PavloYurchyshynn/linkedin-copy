let initialState = {
    jobAdvertisement: 'https://media-exp1.licdn.com/dms/image/C4D22AQHl2DmZdNREqw/feedshare-shrink_2048_1536/0/1587055561625?e=1633564800&v=beta&t=GabjF2uxXIv7Cpk43VcARAyY4ZP8yrGhsFM4Do5UpNg',
    notifications: [
        {
            id: 1,
            photo: 'https://image.flaticon.com/icons/png/512/1632/1632670.png',
            text: 'Do you have the back-to-work jitters? These tips may help you get reacquainted with your colleagues.',
        },
        {
            id: 2,
            photo: 'https://image.flaticon.com/icons/png/512/3050/3050452.png',
            text: '2 people viewed your profile',
        },
        {
            id: 3,
            photo: 'https://image.flaticon.com/icons/png/512/1632/1632670.png',
            text: 'DAILY RUNDOWN: MONDAY Shipping needs drop dead date; Has tech left the building for good?; and other top news for you',
        },
        {
            id: 4,
            photo: 'https://image.flaticon.com/icons/png/512/1632/1632670.png',
            text: 'Does a part-time job develop or distract students? Join the debate.',
        },
        {
            id: 5,
            photo: 'https://image.flaticon.com/icons/png/512/1632/1632670.png',
            text: `Why it's vital to include short breaks during the working day.`,
        },
        {
            id: 6,
            photo: 'https://image.flaticon.com/icons/png/512/1632/1632670.png',
            text: 'Writing down your long-term plan is the first step to making it a reality. This author explains why.',
        },
        {
            id: 7,
            photo: 'https://image.flaticon.com/icons/png/512/1632/1632670.png',
            text: 'DAILY RUNDOWN: SATURDAY Workers want purpose, not perks; Career ladders are so passé; and other top news for you',
        },
    ]
}

const notificationsReducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return state
        }
    }
}

export default notificationsReducer