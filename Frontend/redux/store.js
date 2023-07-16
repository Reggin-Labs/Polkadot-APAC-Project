"use client";
import { configureStore } from "@reduxjs/toolkit";
import { defaultSlice } from "./defaultSlice";

export const store = configureStore({
  reducer: {
    default: defaultSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});