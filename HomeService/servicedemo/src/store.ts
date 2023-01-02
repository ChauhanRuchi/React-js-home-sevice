

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import adminSlice from "./store/adminSlice";
import categorySlice from "./store/categorySlice";
import authSlice from "./store/authSlice";
import bookingSlice from "./store/bookingSlice";

// Configure Slices
const store = configureStore({
  reducer: combineReducers({
    admin: adminSlice,
    category:categorySlice,
    userdata:authSlice,
    booking:bookingSlice
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { ignoredPaths: ["some.nested.path"] },
      serializableCheck: { ignoredPaths: ["some.nested.path"] }
    })
});

export default store;
export type RootState=ReturnType<typeof store.getState>
export type AppDispach=typeof store.dispatch

