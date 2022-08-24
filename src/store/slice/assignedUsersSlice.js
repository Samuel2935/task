import { createSlice } from "@reduxjs/toolkit";
import { getAssignedUser } from "../actions/assignedUserAction";

 const initialState = {
  assignedUers: null,
  isLoading: false,
  successful: false,
  message: null,
};

export const assignUserSlice = createSlice({
  name: "assignedUser",
  initialState,

  reducers: {},
  extraReducers: {
    [getAssignedUser.pending]: (state) => {
        state.isLoading = true;
    },
    [getAssignedUser.fulfilled]: (state, payload) => {
        state.isLoading = false;
        state.assignedUers = payload;
        state.successful = true
    },
    [getAssignedUser.rejected]: (state, payload) => {
        state.successful = false;
        state.isLoading = false;
        state.message = payload
    }
  },
});

// export const {} = authSlice.actions;
export default assignUserSlice.reducer;
