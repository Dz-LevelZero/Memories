import { combineReducers } from "redux";
import { postsReducer } from "./posts"
import { authReducer } from "./auth";

export default combineReducers({
  posts: postsReducer,
  auth: authReducer
})