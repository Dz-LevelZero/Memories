import { COMMENT, CREATE, DELETE, END_LOADING, FETCH_ALL, FETCH_BY_SEARCH, FETCH_POST, START_LOADING, UPDATE } from "../constants/actionTypes"

export const postsReducer = (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case CREATE :
      return { ...state, posts: [...state, action.payload] }
    case UPDATE :
    //case LIKE :
      return { ...state, posts: state.posts.map((post) => post._id === action.payload._id ? action.payload : post)}
    case DELETE :
      return { ...state, posts: state.posts.filter((post) => post._id !== action.payload)}
    case FETCH_BY_SEARCH :
      return { ...state, posts: action.payload }
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_POST:
      return { ...state, post: action.payload };
    case COMMENT:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post._id === action.payload._id) {
            return action.payload;
          }
          return post;
        }),
      };
    default:
      return state
  }
}