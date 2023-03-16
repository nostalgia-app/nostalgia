import axios from 'axios';

const initialState = {
  comments: [],
  comment: {},
};

const FETCH_COMMENTS = 'FETCH_COMMENTS';
const FETCH_COMMENT = 'FETCH_COMMENT';
const CREATE_COMMENT = 'CREATE_COMMENT';

export const _fetchComments = comments => ({ type: FETCH_COMMENTS, comments });
export const _fetchComment = comment => ({ type: FETCH_COMMENT, comment });
export const _createComment = comment => ({ type: FETCH_COMMENT, comment });

export const fetchComments = () => {
  return async dispatch => {
    const { data: comments } = await axios.get('/api/comment');
    dispatch(_fetchComments(comments));
  };
};

export const fetchComment = id => {
  return async dispatch => {
    const { data: comment } = await axios.get(`/api/comment/${id}`);
    dispatch(_fetchComment(comment));
  };
};

export const createComment = ({ data, artifactId, userId }) => {
  return async dispatch => {
    console.log('before thunk', artifactId, userId);
    const { data: comment } = await axios.post(`/api/comment`, {
      comment: data,
      // artifactId: artifactId,
      artifactId: '569e4e8d-4298-4cf3-b62f-218040fc672c',
      userId: userId,
    });
    console.log('after thunk');
    dispatch(_createComment(comment));
  };
};

const comment = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return {
        ...state,
        comments: action.comments,
      };
    case FETCH_COMMENT:
      return {
        ...state,
        comment: action.comment,
      };
    case CREATE_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.comment],
      };
    default:
      return state;
  }
};

export default comment;
