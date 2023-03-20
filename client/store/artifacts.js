import axios from 'axios';

const FETCH_ARTIFACT = 'FETCH_ARTIFACT';

export const _fetchArtifact = artifact => ({ type: FETCH_ARTIFACT, artifact });

export const setArtifacts = id => {
  return async dispatch => {
    try {
      const res = await axios.get(`/api/communities/${id}/artifacts`);
      const artifacts = res.data;
      dispatch({ type: 'SET_ARTIFACTS', artifacts });
    } catch (error) {
      console.log(error);
    }
  };
};

// SINGLE
export const fetchArtifact = id => {
  return async dispatch => {
    try {
      const { data: artifact } = await axios.get(`/api/artifacts/${id}`);
      dispatch(_fetchArtifact(artifact));
    } catch (error) {
      console.log(error);
    }
  };
};

export const createArtifact = (data, communityId) => {
  return async dispatch => {
    try {
      const res = await axios.post(
        `/api/communities/${communityId}/artifacts`,
        data
      );
      const artifact = res.data;
      dispatch({ type: 'CREATE_ARTIFACT', artifact });
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeArtifact = artifact => {
  return async dispatch => {
    try {
      const { id } = artifact;
      await axios.delete(`/api/artifacts/${id}`);
      dispatch({ type: 'REMOVE_ARTIFACT', id });
    } catch (error) {
      console.log(error);
    }
  };
};

// UPDATE
export const updateArtifact = artifact => {
  return async dispatch => {
    const { data: updated } = await axios.put(
      `/api/artifacts/${artifact.id}`,
      artifact
    );
    dispatch({ type: 'UPDATE_ARTIFACT', updated });
  };
};

export default function (state = [], action) {
  switch (action.type) {
    case 'SET_ARTIFACTS':
      return action.artifacts;
    case 'FETCH_ARTIFACT':
      return action.artifact;
    case 'CREATE_ARTIFACT':
      return [...state, action.artifact];
    case 'REMOVE_ARTIFACT':
      return state.filter(artifact => artifact.id !== action.id);
    case 'UPDATE_ARTIFACT':
      return state.artifacts.map(artifact =>
        artifact.id === action.artifact.id ? action.artifact : artifact
      );

    default:
      return state;
  }
}
