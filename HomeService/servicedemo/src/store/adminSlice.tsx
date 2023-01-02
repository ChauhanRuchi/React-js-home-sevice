import { createAsyncThunk, createSlice,PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AnyARecord } from "dns";
import { act } from "react-dom/test-utils";
import { bool, string } from "yup";
import { boolean } from "yup/lib/locale";
import {admin,changePassword} from "../Types/adminslice.type"

let adminloginurl = process.env.REACT_APP_URl_ADMINLOGIN || "";
let changepassurl = process.env.REACT_APP_URl_CHANGEPASS || "";

export const adminlogin = createAsyncThunk(
  "admin/loginapi",
  async (user: Object, getState) => {
    try {
      const response = await axios.post(adminloginurl, user);

      return response.data;
    } catch (e: any) {
      console.log("eroor,,,,", e.response.data);
      return getState.rejectWithValue(e.response.data);
    }
  }
);
export const changepassword = createAsyncThunk(
  "admin/changepassword",
  async (user: FormData) => {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
        },
      };
      const response = await axios.patch(changepassurl, user, config);

      return response.data;
    } catch (e: any) {
      console.log("eroor,,,,", e.response.data);
      return e.response.data;
    }
  }
);
const initialState:{adminData: admin, loading: boolean,changePassword:changePassword,isAuthenticated:boolean,token:string,isLogin:boolean}={
    adminData:{} as admin,
    loading: false,
    changePassword: {}as changePassword,
    isAuthenticated: false,
    token: "",
    isLogin: false,
}
const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    clearState: (state: any) => {
      state.isLogin = false;
      state.adminData = [];
      state.isAuthenticated = false;
      state.token = "";
    },
    clearpasswordState: (state: any) => {
      state.isLogin = false;
      state.changePassword = [];
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(adminlogin.fulfilled, (state, action:PayloadAction<admin> ) => {
      state.adminData = action.payload;
      state.loading = false;
      state.isLogin = true;
    });
    builder.addCase(adminlogin.rejected, (state, action:any) => {
      state.adminData = action.payload;
      state.loading = false;
      state.isLogin = false;
    });
    builder.addCase(adminlogin.pending, (state, action: any) => {
      state.adminData = action.payload;
      state.loading = false;
      state.isLogin = true;
    });
    builder.addCase(changepassword.fulfilled, (state: any, action: PayloadAction<changePassword>) => {
      state.changePassword = action.payload;
      state.loading = false;
      state.isLogin = true;
    });
    builder.addCase(changepassword.rejected, (state: any, action: any) => {
      state.changePassword = action.payload;
      state.loading = false;
      state.isLogin = false;
    });
    builder.addCase(changepassword.pending, (state: any, action: any) => {
      state.changePassword = action.payload;
      state.loading = false;
      state.isLogin = true;
    });
  },
});

export const { clearState, clearpasswordState } = adminSlice.actions;
export default adminSlice.reducer;
