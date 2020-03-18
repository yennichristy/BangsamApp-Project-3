import { combineReducers } from "redux";
import registerReducer from "./registerReducers";
import branchesReducer from "./branchesReducers";
import signInReducer from "./signInReducer";

export default combineReducers({
  register: registerReducer,
  signIn: signInReducer,
  branches: branchesReducer
});
