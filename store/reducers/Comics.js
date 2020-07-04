import { FETCH_COMIC } from "../actions/comics";
const initialState = {
  comics: [],
};

const comicsReducer = (state = initialState, action) => {
  return {
    ...state,
    comics: action.comics,
  };
};

export default comicsReducer;
