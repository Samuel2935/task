import { combineReducers } from "redux";
import { assignUserSlice } from "./slice/assignedUsersSlice";
import {authSlice} from "./slice/authSlice";

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  assignedUser: assignUserSlice.reducer,
});

export default rootReducer;
