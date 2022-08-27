import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const AddTask = createAsyncThunk(
  "auth/getAssigedUserDetails",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=${data.result.company_id}`,
        JSON.stringify(data.payload),
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${data.result.token}`,
          },
        }
      );
      console.log(res);
      return res.data.results.data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);
