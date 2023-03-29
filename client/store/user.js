import axios from 'axios';

const initialState = {
  users: [],
  user: {},
};

const CREATE_USER = 'CREATE_USER';
const FETCH_USER = 'FETCH_USER';
const UPDATE_USER = 'UPDATE_USER';
const DELETE_USER = 'DELETE_USER';

const FETCH_USERS = 'FETCH_USERS';

export const _createNewUser = user => ({ type: CREATE_USER, user });
export const _fetchUser = user => ({ type: FETCH_USER, user });
export const _fetchUsers = users => ({ type: FETCH_USERS, users });
export const _updateUser = user => ({ type: UPDATE_USER, user });
export const _deleteUser = user => ({ type: DELETE_USER, user });

export const createNewUser = credentials => {
  return async dispatch => {
    const { data: user } = await axios.post('/api/users', credentials);
    dispatch(_createNewUser(user));
  };
};

export const fetchUser = id => {
  return async dispatch => {
    const { data: user } = await axios.get(`/api/users/${id}`);
    dispatch(_fetchUser(user));
  };
};

export const deleteUser = id => {
  return async dispatch => {
    const { data: deleted } = await axios.delete(`/api/users/${id}`);
    dispatch(_deleteUser(deleted));
  };
};

export const updateUser = user => {
  return async dispatch => {
    const { data: updated } = await axios.put(`/api/users/${user.id}`, user);
    dispatch(_updateUser(updated));
  };
};

export const fetchUsers = () => {
  return async dispatch => {
    const { data: users } = await axios.get('/api/users');
    dispatch(_fetchUsers(users));
  };
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.users,
      };
    case CREATE_USER:
      return {
        ...state,
        users: [...state.users, action.user],
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.user.id),
      };
    case FETCH_USER:
      return {
        ...state,
        user: action.user,
      };
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.user.id ? action.user : user
        ),
      };

    default:
      return state;
  }
};

export default user;
