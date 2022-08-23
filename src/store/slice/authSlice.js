import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    user: null
  };

export const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    loginUser : (state, action) => {
        state.user = action.payload
    }
  },
});

export const { loginUser } = authSlice.actions;
export default authSlice.reducer;