import { createSlice } from "@reduxjs/toolkit";
import { getUserById } from "./user.actions";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    isLoadinig: false,
    error: null,
    user: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserById.pending, (state) => {
        state.isLoadinig = true;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.isLoadinig = false;
        state.user = action.payload;
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.isLoadinig = false;
        state.error = action.payload;
        state.user = {};
      });
  },
});
