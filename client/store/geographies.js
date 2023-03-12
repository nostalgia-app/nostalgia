import axios from "axios";
import history from "../history";

/**
 * ACTION TYPES
 */
const SET_GEOGRAPHY = "SET_GEOGRAPHY";

/**
 * ACTION CREATORS
 */

const _setGeography = (geographies) => ({
  type: SET_GEOGRAPHY,
  geographies,
});

/**
 * THUNK CREATORS
 */

export const setGeography = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("/api/communities/geography");
      const geographies = res.data;
      dispatch(_setGeography(geographies));
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
    case SET_GEOGRAPHY:
      return action.geographies;
    default:
      return state;
  }
}
