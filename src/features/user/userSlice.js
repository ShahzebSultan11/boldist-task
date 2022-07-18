import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { getUser } from "./userAPI";
import { apiCallBegan } from "../../app/middlewares/actions";
const initialState = {
  user: "",
  staus: "idle",
  loading: false,
  randomUser: ""
};

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    addUser: (state, action) => {
      state.user = [...state.user, action.user];
    },
    userRequested: (state, action) => {
      state.loading = true;
    },

    userReceived: (state, action) => {
      state.randomUser = action.payload;
      state.loading = false;
    },

    userRequestFailed: (state, action) => {
      state.loading = false;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase("pending", (state) => {
        state.status = "loading";
      })
      .addCase("fulfilled", (state, action) => {
        state.status = "idle";
        state.user = action.payload;
      });
  },
});

export const { addUser, userRequested,
  userReceived,
  userRequestFailed } = userSlice.actions;

// const url = "https://randomuser.me/api/";
const url = "user";

export const getUserData = () => (dispatch) => {
  return dispatch(
    apiCallBegan({
      url,
      onStart: userRequested.type,
      onSuccess: userReceived.type,
      onError: userRequestFailed.type,
    })
  );
};

export default userSlice.reducer;
