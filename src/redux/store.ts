import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./blog-slice";
import commentSlice from "./comment-slice";

export const store = configureStore({
  reducer: { blog: blogSlice.reducer, comment: commentSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
