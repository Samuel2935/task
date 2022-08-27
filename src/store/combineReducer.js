import { combineReducers } from "redux";
import { assignUserSlice } from "./slice/assignedUsersSlice";
import {authSlice} from "./slice/authSlice";
import {taskSlice} from "./slice/taskSlice";

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  assignedUser: assignUserSlice.reducer,
  task: taskSlice.reducer,
});

export default rootReducer;
