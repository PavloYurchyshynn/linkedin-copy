import { profileAPI } from '../api/api';

const SET_PROFILE = 'SET_PROFILE';

let initialState = {
  profileInfo: {},
  mainProfile: 1
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE: {
      return { ...state, profileInfo: action.profileInfo };
    }
    default: {
      return state;
    }
  }
};

export const setProfile = (profileInfo) => ({ type: SET_PROFILE, profileInfo });

export const getProfile = (profileId) => {
  return (dispatch) => {
    profileAPI.getProfile(profileId).then((data) => {
      dispatch(setProfile(data));
    });
  };
};

export default homeReducer;
