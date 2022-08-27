import { createSlice } from "@reduxjs/toolkit";
import { getAllTask } from "../actions/getTaskAction";
import { getSingleTask } from "../actions/getTaskAction";


const initialState = {
  allTask: null,
  singleTask: null,
  isLoading: false,
  successful: false,
  message: null,
};

export const taskSlice = createSlice({
  name: "task",
  initialState,

  reducers: {},
  extraReducers: {
    [getAllTask.pending]: (state) => {
      state.isLoading = true;
    },
    [getSingleTask.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllTask.fulfilled]: (state, payload) => {
      state.isLoading = false;
      state.allTask = payload;
      state.successful = true;
    },
    [getSingleTask.fulfilled]: (state, payload) => {
      state.isLoading = false;
      state.singleTask = payload;
      state.successful = true;
    },
    [getAllTask.rejected]: (state, payload) => {
      state.successful = false;
      state.isLoading = false;
      state.message = payload;
    },
    [getSingleTask.rejected]: (state, payload) => {
      state.successful = false;
      state.isLoading = false;
      state.message = payload;
    },
  },
});

export default taskSlice.reducer;
