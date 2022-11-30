import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AnyARecord } from "dns";
import { act } from "react-dom/test-utils";

let setbookingurl = process.env.REACT_APP_URl_SETBOOKING || "";
let gettimeurl = process.env.REACT_APP_URl_GETTIME || "";
let getcitynameurl = process.env.REACT_APP_URl_CITYNAME || "";
let getbookdataurl = process.env.REACT_APP_URl_GETBOOKDATA || "";
let statusupdateurl = process.env.REACT_APP_URl_STATUSUPDATE || "";
let getbookinddatabyidurl = process.env.REACT_APP_URl_GETBOOKINGBYID || "";
let setcity = process.env.REACT_APP_URl_CITY || "";

export const createbooking = createAsyncThunk(
  "createbooking",
  async (user: FormData) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      };
      const response = await axios.post(setbookingurl, user, config);

      return response.data;
    } catch (e: any) {
      console.log("eroor,,,,", e.response.data);
      return e.response.data;
    }
  }
);
export const gettime = createAsyncThunk("gettime", async () => {
  try {
    const response = await axios.get(gettimeurl);

    return response.data;
  } catch (e: any) {
    console.log("eroor,,,,", e.response.data);
    return e.response.data;
  }
});
export const getcityname = createAsyncThunk("getcityname", async () => {
  try {
    const response = await axios.get(getcitynameurl);

    return response.data;
  } catch (e: any) {
    return e.response.data;
  }
});
export const getbookingdata = createAsyncThunk("getbookingdata", async () => {
  try {
    const response = await axios.get(getbookdataurl);

    return response.data;
  } catch (e: any) {
    return e.response.data;
  }
});
export const statusupdate = createAsyncThunk(
  "statusupdate",
  async (data: { id: any; user: FormData }) => {
    try {
      const response = await axios.patch(statusupdateurl + data.id, data.user);

      return response.data;
    } catch (e: any) {
      return e.response.data;
    }
  }
);
export const getbookingdatabyid = createAsyncThunk(
  "getbookingdatabyid",
  async (id: any) => {
    try {
      const response = await axios.get(getbookinddatabyidurl + id);

      return response.data;
    } catch (e: any) {
      return e.response.data;
    }
  }
);
export const setcitydata = createAsyncThunk(
  "setcitydata",
  async (user: FormData) => {
    try {
      const response = await axios.post(setcity, user);

      return response.data;
    } catch (e: any) {
      return e.response.data;
    }
  }
);

const bookingSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    createBooking: [],
    getcityName: [],
    getTime: [],
    getbookingData: [],
    statusUpdate: [],
    getbookingdatabyId: [],
    setcityData: [],
    isAuthenticated: false,
    token: "",
    error: "",
  },
  reducers: {
    clearState: (state: any) => {
      state.createBooking = [];
      state.error = "";
      state.isAuthenticated = false;
      state.token = "";
    },
    clearcityState: (state: any) => {
      state.setcitydata = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createbooking.fulfilled, (state: any, action: any) => {
      state.createBooking = action.payload;
      state.loading = false;
      state.isLogin = true;
    });
    builder.addCase(createbooking.rejected, (state: any, action: any) => {
      state.createBooking = action.payload;
      state.loading = false;
      state.isLogin = false;
    });
    builder.addCase(createbooking.pending, (state: any, action: any) => {
      state.createBooking = action.payload;
      state.loading = false;
      state.isLogin = true;
    });
    builder.addCase(gettime.fulfilled, (state: any, action: any) => {
      state.getTime = action.payload;
      state.loading = false;
      state.isLogin = true;
    });
    builder.addCase(gettime.rejected, (state: any, action: any) => {
      state.getTime = action.payload;
      state.loading = false;
      state.isLogin = false;
    });
    builder.addCase(gettime.pending, (state: any, action: any) => {
      state.getTime = action.payload;
      state.loading = false;
      state.isLogin = true;
    });
    builder.addCase(getcityname.fulfilled, (state: any, action: any) => {
      state.getcityName = action.payload;
      state.loading = false;
      state.isLogin = true;
    });
    builder.addCase(getcityname.rejected, (state: any, action: any) => {
      state.getcityName = action.payload;
      state.loading = false;
      state.isLogin = false;
    });
    builder.addCase(getcityname.pending, (state: any, action: any) => {
      state.getcityName = action.payload;
      state.loading = false;
      state.isLogin = true;
    });
    builder.addCase(getbookingdata.fulfilled, (state: any, action: any) => {
      state.getbookingData = action.payload;
      state.loading = false;
      state.isLogin = true;
    });
    builder.addCase(getbookingdata.rejected, (state: any, action: any) => {
      state.getbookingData = action.payload;
      state.loading = false;
      state.isLogin = false;
    });
    builder.addCase(getbookingdata.pending, (state: any, action: any) => {
      state.getbookingData = action.payload;
      state.loading = false;
      state.isLogin = true;
    });
    builder.addCase(statusupdate.fulfilled, (state: any, action: any) => {
      state.statusUpdate = action.payload;
      state.loading = false;
      state.isLogin = true;
    });
    builder.addCase(statusupdate.rejected, (state: any, action: any) => {
      state.statusUpdate = action.payload;
      state.loading = false;
      state.isLogin = false;
    });
    builder.addCase(statusupdate.pending, (state: any, action: any) => {
      state.statusUpdate = action.payload;
      state.loading = false;
      state.isLogin = true;
    });
    builder.addCase(getbookingdatabyid.fulfilled, (state: any, action: any) => {
      state.getbookingdatabyId = action.payload;
      state.loading = false;
      state.isLogin = true;
    });
    builder.addCase(getbookingdatabyid.rejected, (state: any, action: any) => {
      state.getbookingdatabyId = action.payload;
      state.loading = false;
      state.isLogin = false;
    });
    builder.addCase(getbookingdatabyid.pending, (state: any, action: any) => {
      state.getbookingdatabyId = action.payload;
      state.loading = false;
      state.isLogin = true;
    });
    builder.addCase(setcitydata.fulfilled, (state: any, action: any) => {
      state.setcityData = action.payload;
      state.loading = false;
      state.isLogin = true;
    });
    builder.addCase(setcitydata.rejected, (state: any, action: any) => {
      state.setcityData = action.payload;
      state.loading = false;
      state.isLogin = false;
    });
    builder.addCase(setcitydata.pending, (state: any, action: any) => {
      state.setcityData = action.payload;
      state.loading = false;
      state.isLogin = true;
    });
  },
});

export const { clearState, clearcityState } = bookingSlice.actions;
export default bookingSlice.reducer;
