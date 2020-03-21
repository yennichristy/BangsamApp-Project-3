import { combineReducers } from "redux";
import branchesReducer from "./branchesReducers";
import userReducer from "./userReducer";
import customersReducer from "./customersReducer";
import pickupReducer from "./pickupReducer";

export default combineReducers({
  user: userReducer,
  branches: branchesReducer,
  customers: customersReducer,
  pickup: pickupReducer
});
