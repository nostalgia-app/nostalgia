import axios from 'axios'
import Community from './community'

//STATE


//ACTION TYPES
//const SET_USERCOMMUNITY = "SET_USERCOMMUNITY"
const SET_USERCOMMUNITIES = "SET_USERCOMMUNITIES"
const ADD_USERCOMMUNITY = "ADD_USERCOMMUNITY"
const DELETE_USERCOMMUNITY = "DELETE_USERCOMMUNITY"
const SET_SPECIFICUSERCOMMUNITY = "SET_SPECIFICUSERCOMMUNITY"

//ACTION CREATORS
// export const _setUserCommunity = userCommunity => ({
//     type: SET_USERCOMMUNITY,
//     userCommunity,
//     });
export const _setUserCommunities = userCommunity => ({
    type: SET_USERCOMMUNITIES,
    userCommunity,        
    });
export const _addUserCommunity = userCommunities => ({
    type: ADD_USERCOMMUNITY,
    userCommunities,
    });
export const _deleteUserCommunity = userCommunities => ({
    type: DELETE_USERCOMMUNITY,
    userCommunities,
    });
export const _setSpecificUserCommunity = userCommunity =>({
  type: SET_SPECIFICUSERCOMMUNITY,
  userCommunity
})



//get all of a user's communities
export const setUserCommunities = (user) => {
    return async (dispatch) => {
      try {
        const res = await axios.get(`/api/userCommunity/${user}`);
        const communities = res.data;
        dispatch(_setUserCommunities(communities));
      } catch (error) {
        console.log(error);
      }
    };
  };

//get all of a user's communities
export const setSpecificUserCommunity = (commId, userId) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/api/userCommunity/${commId}/${userId}`);
      const communities = res.data;
      dispatch(_setUserCommunities(communities));
    } catch (error) {
      console.log(error);
    }
  };
};

//add user to a community
export const addUserToCommunity =(commId,userId)=>{
    return async (dispatch) => {
        try {
        const res = await axios.post(`/api/userCommunity/${commId}/${userId}` );
        const community = res.data;
        dispatch(_addUserCommunity(community));
        } catch (error) {
        console.log(error);
        }
    };
    };

//remove user from community
export const removeUserFromCommunity = (userCommId, userId) => {
  return async (dispatch) => {
    const userComm = await axios.delete(`/api/userCommunity/${userCommId}/${userId}`);
    dispatch(_deleteUserCommunity(userCommId));
    //history.push('/userCommunity');
  };
};

    export default function (state = [], action) {
        switch (action.type) {
        
        case SET_USERCOMMUNITIES:
            return action.userCommunity;
        case SET_SPECIFICUSERCOMMUNITY:
            return action.userCommunity;
        case ADD_USERCOMMUNITY:
            return [...state, action.userCommunity]
        case DELETE_USERCOMMUNITY:
          console.log('heress state', state)
         
          return state.filter(
              userCommunity => userCommunity.communityId !== action.userCommunities
            )
          default:
            return state;
        }
      }
   
