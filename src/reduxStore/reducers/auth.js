import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    success: false,
    error: false,
    message: "",
    isLoggedIn: false,
    token: null,
    //user: InitialValues,
  },
  reducers: {
    signIn(state, action) {
      state.push({
        success: action.payload.success,
      });
    },
  },
});

export const { signIn } = authSlice.actions;
export default authSlice.reducer;
