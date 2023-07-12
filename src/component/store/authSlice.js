import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  token: null, // Added token property
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload; // Set the token from action payload
    },
    logout(state) {
      state.isLoggedIn = false;
      state.token = null; // Clear the token
      localStorage.removeItem("email");
    localStorage.removeItem("token");
    console.log('logout succsesfully')
    },
  },
});

export const { login, logout } = authSlice.actions;
export const openWithLogin=(state)=>state.auth.isLoggedIn

export default authSlice.reducer;
