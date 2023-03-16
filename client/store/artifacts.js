import axios from 'axios';

export const setArtifacts = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/api/communities/${id}/artifacts`);
      const artifacts = res.data;
      dispatch({ type: "SET_ARTIFACTS", artifacts });
    } catch (error) {
      console.log(error);
    }
  }
}

export const createArtifact = (data, communityId) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`/api/communities/${communityId}/artifacts`, data);
      const artifact = res.data;
      dispatch({ type: "CREATE_ARTIFACT", artifact });
    } catch (error) {
      console.log(error);
    }
  }
}

export const removeArtifact = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/artifacts/${id}`);
      dispatch({ type: "REMOVE_ARTIFACT", id });
    } catch (error) {
      console.log(error);
    }
  }
}

export default function (state = [], action) {
  switch (action.type) {
    case "SET_ARTIFACTS":
      return action.artifacts;
    case "CREATE_ARTIFACT":
      return [...state, action.artifact];
    case "REMOVE_ARTIFACT":
      return state.filter((artifact) => artifact.id !== action.id);
    default:
      return state;
  }
}
