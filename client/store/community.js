import axios from "axios";
import history from "../history";

/**
 * ACTION TYPES
 */
const SET_COMMUNITY = "SET_COMMUNITY";

/**
 * ACTION CREATORS
 */

const _setCommunity = (community) => ({
  type: SET_COMMUNITY,
  community,
});

/**
 * THUNK CREATORS
 */

export const setCommunity = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/api/communities/${id}`);
      const community = res.data;
      dispatch(_setCommunity(community));
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
    case SET_COMMUNITY:
      return action.community;
    default:
      return state;
  }
}
