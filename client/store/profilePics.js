import axios from 'axios';

const initialState = {
  profilePics: [],
  profilePic: {},
};

const FETCH_PROFILE_PICS = 'FETCH_PROFILE_PICS';
const FETCH_PROFILE_PIC = 'FETCH_PROFILE_PIC';
const CREATE_PROFILE_PIC = 'CREATE_PROFILE_PIC';

export const _fetchProfilePics = pics => ({ type: FETCH_PROFILE_PICS, pics });
export const _fetchProfilePic = pic => ({ type: FETCH_PROFILE_PIC, pic });
export const _createProfilePic = pic => ({ type: CREATE_PROFILE_PIC, pic });

export const fetchProfilePics = () => {
  return async dispatch => {
    const { data: pics } = await axios.get('/api/profilePic');
    dispatch(_fetchProfilePics(pics));
  };
};
export const fetchProfilePic = id => {
  return async dispatch => {
    const { data: pic } = await axios.get(`/api/profilePic/${id}`);
    dispatch(_fetchProfilePic(pic));
  };
};

export const createProfilePic = imageFile => {
  return async dispatch => {
    const { data: pic } = await axios.post('/api/profilePic', imageFile);
    dispatch(_createProfilePic(pic));
  };
};

const profilePics = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PROFILE_PIC:
      return {
        ...state,
        profilePics: [...state.profilePics, action.profilePic],
      };
    case FETCH_PROFILE_PICS:
      return {
        ...state,
        profilePics: action.profilePics,
      };
    case FETCH_PROFILE_PIC:
      return {
        ...state,
        profilePic: action.profilePic,
      };
    default:
      return state;
  }
};

export default profilePics;
