import { usersAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CONNECTIONS = 'SET_CONNECTIONS';
const SET_RECOMMENDED_USERS = 'SET_RECOMMENDED_USERS';
const SET_VIEWED_PROFILE_USERS = 'SET_VIEWED_PROFILE_USERS';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  recommendedUsers: [],
  viewedProfileUsers: [],
  connections: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        recommendedUsers: state.recommendedUsers.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followingStatus: true };
          }
          return u;
        })
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        recommendedUsers: state.recommendedUsers.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followingStatus: false };
          }
          return u;
        })
      };
    }
    case SET_CONNECTIONS: {
      return { ...state, connections: action.connections };
    }
    case SET_RECOMMENDED_USERS: {
      return { ...state, recommendedUsers: action.recommendedUsers };
    }
    case SET_VIEWED_PROFILE_USERS: {
      return { ...state, viewedProfileUsers: action.viewedProfileUsers };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default: {
      return state;
    }
  }
};

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setConnections = (connections) => ({ type: SET_CONNECTIONS, connections });
export const setRecommendedUsers = (recommendedUsers) => ({
  type: SET_RECOMMENDED_USERS,
  recommendedUsers
});
export const setViewedProfileUsers = (viewedProfileUsers) => ({
  type: SET_VIEWED_PROFILE_USERS,
  viewedProfileUsers
});

export const getConnections = () => {
  return (dispatch) => {
    usersAPI.getConnections().then((data) => {
      dispatch(setConnections(data));
    });
  };
};

export const getRecommendedUsers = () => {
  return (dispatch) => {
    usersAPI.getRecommendedUsers().then((data) => {
      dispatch(setRecommendedUsers(data));
    });
  };
};

export const getViewedProfileUsers = () => {
  return (dispatch) => {
    usersAPI.getViewedProfileUsers().then((data) => {
      dispatch(setViewedProfileUsers(data));
    });
  };
};

export default userReducer;
