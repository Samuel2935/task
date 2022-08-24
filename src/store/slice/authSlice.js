import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../actions/authAction";

const initialState = {
    user: null,
    isLoading: false,
    successfull: false,
    message: null
  };

export const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {},
  extraReducers: {
    [getUser.pending]: (state) => {
      state.isLoading = true
    },
    [getUser.fulfilled]: (state, payload) => {
      state.isLoading = false;
      state.user = payload;
      console.log("extraReducer: ", payload);
      state.successfull = true
    },
    [getUser.rejected]: (state, payload) => {
      state.isLoading = false;
      state.user = null;
      state.successfull = false
      state.message = payload
    }
  }
});

// export const {} = authSlice.actions;
export default authSlice.reducer;