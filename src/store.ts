import { configureStore, createSlice } from "@reduxjs/toolkit"

// example for Redux toolkit
const initialState = { value: {username: ""}}
const userSlice = createSlice({
  name: "user",
  initialState: {value: {username: ""}},
  reducers: {
    // function to modify username
    login: (state, action) => {
      state.value = action.payload;
    },

    logout: (state) => {
      state.value = initialState.value;
    },
  }
});

export const {login, logout} = userSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,

  },
});