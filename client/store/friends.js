import axios from "axios";

/**
 * ACTION TYPES
 */
const SET_FRIENDS = "SET_FRIENDS";
const ADD_FRIEND = "ADD_FRIEND";
const DELETE_FRIEND = "DELETE_FRIEND";

/**
 * ACTION CREATORS
 */
const _setFriends = (friends) => ({
  type: SET_FRIENDS,
  friends,
});

const _addFriend = (friend) => ({
  type: ADD_FRIEND,
  friend,
});

const _deleteFriend = (friend) => ({
  type: DELETE_FRIEND,
  friend,
});

/**
 * THUNK CREATORS
 */

export const setFriends = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/api/userfriends/user/${id}`);
      const friends = res.data;
      dispatch(_setFriends(friends));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addFriend = (newFriend) => {
  return async (dispatch) => {
    try {
      await axios
        .post("/api/userfriends/", newFriend)
        .then((res) => axios.get(`/api/userfriends/${res.data.id}`))
        .then((res) => dispatch(_addFriend(res.data)));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteFriend = (userFriendId) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(
        `/api/userfriends/${userFriendId}`,
        deleteFriend
      );
      const friend = res.data;
      dispatch(_deleteFriend(friend));
    } catch (error) {
      console.log(error);
    }
  };
};

/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case SET_FRIENDS:
      return action.friends;
    case ADD_FRIEND:
      return [...state, action.friend];
    case DELETE_FRIEND:
      const relationships = [...state];
      const relationshipsUpdated = relationships.filter(
        (relationship) => relationship.id !== action.friend.id
      );
      return relationshipsUpdated;
    default:
      return state;
  }
}
