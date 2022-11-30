import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AnyARecord } from "dns";
import { act } from "react-dom/test-utils";

let signupurl = process.env.REACT_APP_URl_SIGNUP || "";
let signinurl = process.env.REACT_APP_URl_SIGNIN || "";
let userdata = process.env.REACT_APP_URl_GETUSERDATA || "";

export const userSignup = createAsyncThunk(
  "user/signup",
  async (user: Object, getState) => {
    try {
      const response = await axios.post(signupurl, user);

      return response.data;
    } catch (e: any) {
      console.log("eroor,,,,", e.response.data);
      return getState.rejectWithValue(e.response.data);
    }
  }
);
export const userSignin = createAsyncThunk(
  "user/signin",
  async (user: Object, getState) => {
    try {
      const response = await axios.post(signinurl, user);

      return response.data;
    } catch (e: any) {
      console.log("eroor,,,,", e.response.data);
      return getState.rejectWithValue(e.response.data);
    }
  }
);

export const getuserdata = createAsyncThunk("getuserdata", async () => {
  try {
    const response = await axios.get(userdata);

    return response.data;
  } catch (e: any) {
    console.log("eroor,,,,", e.response.data);
    return e.response.data;
  }
});

const authSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    userData: [],
    isAuthenticated: false,
    getuserData: [],
    token: "",
    isLogin: false,
    error: "",
  },
  reducers: {
    clearState: (state: any) => {
      state.isLogin = false;
      state.error = "";
      state.userData = [];
      state.isAuthenticated = false;
      state.token = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userSignup.fulfilled, (state: any, action: any) => {
      state.userData = action.payload;
      state.loading = false;
      state.isLogin = true;
    });
    builder.addCase(userSignup.rejected, (state: any, action: any) => {
      state.userData = action.payload;
      state.loading = false;
      state.isLogin = false;
    });
    builder.addCase(userSignup.pending, (state: any, action: any) => {
      state.userData = action.payload;
      state.loading = false;
      state.isLogin = true;
    });
    builder.addCase(userSignin.fulfilled, (state: any, action: any) => {
      state.userData = action.payload;
      state.loading = false;
      state.isLogin = true;
    });
    builder.addCase(userSignin.rejected, (state: any, action: any) => {
      state.userData = action.payload;
      state.loading = false;
      state.isLogin = false;
    });
    builder.addCase(userSignin.pending, (state: any, action: any) => {
      state.userData = action.payload;
      state.loading = false;
      state.isLogin = true;
    });

    builder.addCase(getuserdata.fulfilled, (state: any, action: any) => {
      state.getuserData = action.payload;
      state.loading = false;
      state.isLogin = true;
    });
    builder.addCase(getuserdata.rejected, (state: any, action: any) => {
      state.getuserData = action.payload;
      state.loading = false;
      state.isLogin = false;
    });
    builder.addCase(getuserdata.pending, (state: any, action: any) => {
      state.getuserData = action.payload;
      state.loading = false;
      state.isLogin = true;
    });
  },
});

export const { clearState } = authSlice.actions;
export default authSlice.reducer;
