import { applyMiddleware, combineReducers, createStore } from 'redux';
import homeReducer from './home-reducer';
import jobsReducer from './jobs-reducer';
import messageReducer from './message-reducer';
import networkReducer from './network-reducer';
import notificationsReducer from './notifications-reducer';
import userReducer from './user-reducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
  homePage: homeReducer,
  networkPage: networkReducer,
  jobsPage: jobsReducer,
  notificationPage: notificationsReducer,
  dialogPage: messageReducer,
  profilePage: userReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
