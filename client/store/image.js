import axios from "axios";

const initialState = {
  images: [],
  image: {},
};

const FETCH_IMAGES = "FETCH_IMAGES";
const FETCH_IMAGE = "FETCH_IMAGE";
const CREATE_IMAGE = "CREATE_IMAGE";
const UPDATE_IMAGE = "UPDATE_IMAGE";

export const _fetchImages = (images) => ({
  type: FETCH_IMAGES,
  images,
});
export const _fetchImage = (image) => ({ type: FETCH_IMAGE, image });
export const _createNewImage = (image) => ({
  type: CREATE_IMAGE,
  image,
});
export const _updateImage = (image) => ({ type: UPDATE_IMAGE, image });

// FETCH ALL
export const fetchImages = () => {
  return async (dispatch) => {
    const { data: images } = await axios.get("/api/images");
    dispatch(_fetchImages(images));
  };
};

// FETCH SINGLE
export const fetchImage = (id) => {
  return async (dispatch) => {
    const { data: image } = await axios.get(`/api/images/${id}`);
    dispatch(_fetchImage(image));
  };
};

// CREATE NEW
export const createNewImage = (imageFile) => {
  return async (dispatch) => {
    const { data: image } = await axios.post("/api/images/single", imageFile);
    dispatch(_createNewImage(image));
  };
};

// UPDATE
export const updateImage = (image) => {
  return async (dispatch) => {
    const { data: updated } = await axios.put(`/api/images/${image.id}`, image);
    dispatch(_updateImage(updated));
  };
};

const image = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES:
      return {
        ...state,
        images: action.images,
      };
    case FETCH_IMAGE:
      return {
        ...state,
        image: action.image,
      };
    case CREATE_IMAGE:
      return {
        ...state,
        images: [...state.images, action.image],
      };
    case UPDATE_IMAGE:
      return {
        ...state,
        images: state.images.map((image) =>
          image.id === action.image.id ? action.image : image
        ),
      };
    default:
      return state;
  }
};

export default image;
