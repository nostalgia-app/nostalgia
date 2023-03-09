import axios from "axios";
import history from "../history";

/**
 * ACTION TYPES
 */
const SET_COMMUNITIES = "SET_COMMUNITIES";
const ADD_COMMUNITY = "ADD_COMMUNITY";

/**
 * ACTION CREATORS
 */

const _setCommunities = (communities) => ({
  type: SET_COMMUNITIES,
  communities,
});

const _addCommunity = (community) => ({
  type: ADD_COMMUNITY,
  community,
});

/**
 * THUNK CREATORS
 */

export const setCommunities = () => {
  return async (dispatch) => {
    console.log("thunk");
    try {
      const res = await axios.get("/api/communities");
      const communities = res.data;
      dispatch(_setCommunities(communities));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addCommunity = (community) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("/api/communities/", community);
      const community = res.data;
      dispatch(addCommunity(community));
    } catch (error) {
      console.log(error);
    }
  };
};

/**
 * REDUCER
 */
export default function (state = {}, action) {
  switch (action.type) {
    case SET_COMMUNITIES:
      return action.communities;
    case ADD_COMMUNITY:
      return action.communities;
    default:
      return state;
  }
}
