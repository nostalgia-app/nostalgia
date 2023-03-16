import axios from 'axios'
import Community from './community'

//STATE
const initialState = {
    userCommunities : [],
    //userCommunity : {}
}

//ACTION TYPES
//const SET_USERCOMMUNITY = "SET_USERCOMMUNITY"
const SET_USERCOMMUNITIES = "SET_USERCOMMUNITIES"
const ADD_USERCOMMUNITY = "ADD_USERCOMMUNITY"
const DELETE_USERCOMMUNITY = "DELETE_USERCOMMUNITY"

//ACTION CREATORS
// export const _setUserCommunity = userCommunity => ({
//     type: SET_USERCOMMUNITY,
//     userCommunity,
//     });
export const _setUserCommunities = userCommunities => ({
    type: SET_USERCOMMUNITIES,
    userCommunities,        
    });
export const _addUserCommunity = userCommunity => ({
    type: ADD_USERCOMMUNITY,
    userCommunity,
    });
export const _deleteUserCommunity = userCommunity => ({
    type: DELETE_USERCOMMUNITY,
    userCommunity,
    });



//get all of a user's communities
export const setCommunities = (user) => {
    return async (dispatch) => {
      try {
        const res = await axios.get(`/api/userCommunity/${user}`);
        const communities = res.data;
        dispatch(_setCommunities(communities));
      } catch (error) {
        console.log(error);
      }
    };
  };



//add user to a community
export const addUserToCommunity =(user)=>{
    return async (dispatch) => {
        try {
        const res = await axios.post("/api/communities/:id", newComm);
        const community = res.data;
        dispatch(_addCommunity(community));
        } catch (error) {
        console.log(error);
        }
    };
    };

   
