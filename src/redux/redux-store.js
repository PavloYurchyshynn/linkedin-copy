import { combineReducers, createStore } from "redux";
import homeReducer from "./home-reducer";
import jobsReducer from "./jobs-reducer";
import messageReducer from "./message-reducer";
import networkReducer from "./network-reducer";
import notificationsReducer from "./notifications-reducer";

let reducers = combineReducers({
    homePage: homeReducer,
    networkPage: networkReducer,
    jobsPage: jobsReducer,
    notificationPage: notificationsReducer,
    dialogPage: messageReducer,
})

let store = createStore(reducers);

export default store