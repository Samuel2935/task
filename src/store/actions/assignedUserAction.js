import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getAssignedUser = createAsyncThunk(
  "auth/getAssigedUserDetails",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `team?product=outreach&company_id=${data.company_id}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${data.token}`,
          },
        }
      );
      return res.data.results.data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);