import axios from 'axios';

const initialState = {
  userPics: [],
  userPic: {},
};

const FETCH_USER_PICS = 'FETCH_USER_PICS';
const FETCH_USER_PIC = 'FETCH_USER_PIC';
const CREATE_USER_PIC = 'CREATE_USER_PIC';

export const _fetchUserPics = pics => ({
  type: FETCH_USER_PICS,
  pics,
});

export const _fetchUserPic = pic => ({ type: FETCH_USER_PIC, pic });

export const _createUserPic = pic => ({
  type: CREATE_USER_PIC,
  pic,
});

// FETCH ALL
export const fetchUserPics = () => {
  return async dispatch => {
    const { data: pics } = await axios.get('/api/userPics');
    dispatch(_fetchUserPics(pics));
  };
};

// FETCH SINGLE
export const fetchUserPic = id => {
  return async dispatch => {
    const { data: pic } = await axios.get(`/api/userPics/${id}`);
    dispatch(_fetchUserPic(pic));
  };
};

// CREATE NEW
export const createUserPic = profilePic => {
  return async dispatch => {
    const { data: pic } = await axios.post('/api/userPics/single', profilePic);
    dispatch(_createUserPic(pic));
  };
};

const userPic = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_PICS:
      return {
        ...state,
        userPics: action.userPics,
      };
    case FETCH_USER_PIC:
      return {
        ...state,
        userPic: action.userPic,
      };
    case CREATE_USER_PIC:
      return {
        ...state,
        userPics: [...state.userPics, action.userPic],
      };
    default:
      return state;
  }
};

export default userPic;
