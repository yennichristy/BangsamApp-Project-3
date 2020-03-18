import { combineReducers } from "redux";
import branchesReducer from "./branchesReducers";
import userReducer from "./userReducer";

export default combineReducers({
  user: userReducer,
  branches: branchesReducer
});
