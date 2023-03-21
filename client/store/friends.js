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
      const res = await axios.get(`/api/users/userfriends/user/${id}`);
      const friends = res.data[0];
      dispatch(_setFriends(friends));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addFriend = (newFriend) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("/api/userfriends/", newFriend);
      const friend = res.data;
      dispatch(_addFriend(friend));
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
      const addFriends = [...state];
      const addFriendsUpdated = addFriends.map((friend) => {
        if (friend.id === action.friend.friendId) {
          friend.friendInd = "Y";
          friend.userFriendId = action.friend.id;
        }
        return friend;
      });
      return addFriendsUpdated;
    case DELETE_FRIEND:
      const removeFriends = [...state];
      const removeFriendsUpdated = removeFriends.map((friend) => {
        if (friend.id === action.friend.friendId) {
          friend.friendInd = null;
          friend.userFriendId = null;
        }
        return friend;
      });
      return removeFriendsUpdated;
    default:
      return state;
  }
}
