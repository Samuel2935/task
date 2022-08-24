import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getUser = createAsyncThunk(
    "auth/getUserDetails", async (payload, {rejectWithValue}) =>{
        try {
            const user = await axios.post("login", payload, {
              header: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            });
            return user.data
        } catch (error) {
            rejectWithValue(error.response.data)
        }
    }
);
