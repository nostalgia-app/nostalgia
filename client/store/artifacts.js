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
};

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
};

export const removeArtifact = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/artifacts/${id}`);
      dispatch({ type: "REMOVE_ARTIFACT", id });
    } catch (error) {
      console.log(error);
    }
  }
};

export const updateArtifact = (data) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(`/api/artifacts/${data.id}`, data);
      const artifact = res.data;
      dispatch({ type: "UPDATE_ARTIFACT", artifact });
    } catch (error) {
      console.log(error);
    }
  }
};

const initialState = {
  artifacts: [],
  artifact: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "SET_ARTIFACTS":
      return { ...state, artifacts: action.artifacts };
    case "CREATE_ARTIFACT":
      return { ...state, artifacts: [action.artifact, ...state.artifacts] };
    case "REMOVE_ARTIFACT":
      return {
        ...state,
        artifacts: state.artifacts.filter((artifact) => artifact.id !== action.id),
      };
    case "UPDATE_ARTIFACT":
      return {
        artifacts: state.artifacts.map((a) =>
          a.id === action.artifact.id ? action.artifact : a
        ),
        artifact: action.artifact,
      };
    default:
      return state;
  }
};
