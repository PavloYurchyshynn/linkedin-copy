import { combineReducers, createStore } from "redux";
import homeReducer from "./home-reducer";
import networkReducer from "./network-reducer";

let reducers = combineReducers({
    homePage: homeReducer,
    networkPage: networkReducer,
})

let store = createStore(reducers);

export default store