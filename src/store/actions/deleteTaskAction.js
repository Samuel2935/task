import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteTask = createAsyncThunk(
  "task/deleteTask",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.delete(
        `task/lead_465c14d0e99e4972b6b21ffecf3dd691/${data.task_id}?company_id=${data.company_id}`,
        JSON.stringify({}),
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${data.token}`,
          },
        }
      );
      console.log(res);
      return res;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);
