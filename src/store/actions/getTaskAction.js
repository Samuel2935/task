import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllTask = createAsyncThunk(
  "task/getAllTask",
  async (data, { rejectWithValue }) => {
    console.log("getTask: ", data);
    try {
      const res = await axios.get(
        `task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=${data.company_id}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${data.token}`,
          },
        }
      );
      console.log(res.data.results);
      return res.data.results;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);


export const getSingleTask = createAsyncThunk(
  "task/getSingleTask",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=${data}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${data.token}`,
          },
        }
      );
      console.log(res);
      return res.data.results;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);
