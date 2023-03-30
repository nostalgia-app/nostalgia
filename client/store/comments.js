import axios from 'axios';

const initialState = {
  comments: [],
  comment: {},
};

const FETCH_COMMENTS = 'FETCH_COMMENTS';
const FETCH_COMMENT = 'FETCH_COMMENT';
const CREATE_COMMENT = 'CREATE_COMMENT';
const UPDATE_COMMENT = 'UPDATE_COMMENT';

export const _fetchComments = comments => ({ type: FETCH_COMMENTS, comments });
export const _fetchComment = comment => ({ type: FETCH_COMMENT, comment });
export const _createComment = comment => ({ type: FETCH_COMMENT, comment });
export const _updateComment = comment => ({ type: UPDATE_COMMENT, comment });

export const fetchComments = id => {
  return async dispatch => {
    const { data: comments } = await axios.get(`/api/comment/${id}`);
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
    const { data: comment } = await axios.post(`/api/comment`, {
      comment: data,
      artifactId: artifactId,
      userId: userId,
    });
    dispatch(_createComment(comment));
  };
};

export const updateComment = comment => {
  return async dispatch => {
    const { data: updated } = await axios.put(
      `/api/comment/${comment.id}`,
      comment
    );
    dispatch(_updateComment(updated));
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
    case UPDATE_COMMENT:
      return {
        ...state,
        comments: state.comments.map(comment =>
          comment.id === action.comment.id ? action.comment : comment
        ),
      };
    default:
      return state;
  }
};

export default comment;
