import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Blog {
  content: string;
  createDate: Date;
  id: number;
  title: string;
  updateDate: string | Date;
}

interface BlogState {
  blogs: Blog[];
}

const initialState: BlogState = { blogs: [] };

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    addBlogs: (state, action: PayloadAction<Blog[]>) => {
      state.blogs = action.payload;
    },
  },
});

export const blogActions = blogSlice.actions;
export default blogSlice;
