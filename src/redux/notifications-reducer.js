import { notificationsAPI } from '../api/api';

const SET_NOTIFICATIONS = 'SET_NOTIFICATIONS';

let initialState = {
  notifications: []
};

const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTIFICATIONS: {
      return { ...state, notifications: action.notifications };
    }
    default: {
      return state;
    }
  }
};

export const setNotifications = (notifications) => ({ type: SET_NOTIFICATIONS, notifications });

export const getNotifications = () => {
  return (dispatch) => {
    notificationsAPI.getNotifications().then((data) => {
      dispatch(setNotifications(data));
    });
  };
};

export default notificationsReducer;
