import { combineReducers, createStore } from "redux";
import homeReducer from "./home-reducer";
import jobsReducer from "./jobs-reducer";
import networkReducer from "./network-reducer";

let reducers = combineReducers({
    homePage: homeReducer,
    networkPage: networkReducer,
    jobsPage: jobsReducer,
})

let store = createStore(reducers);

export default store