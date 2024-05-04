import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Blog {
  content: string;
  createDate: Date;
  id: number;
  title: string;
  updateDate: string | Date;
  authorName?: string;
  topic: string;
}

interface BlogState {
  blogs: Blog[];
  isModalOpen: boolean;
}

const initialState: BlogState = { blogs: [], isModalOpen: false };

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    getBlogs: (state, action: PayloadAction<Blog[]>) => {
      state.blogs = action.payload;
    },

    toggleBlogCreateModal: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload;
    },

    addOneBlog: (state, action: PayloadAction<Blog>) => {
      state.blogs.push(action.payload);
    },
  },
});

export const blogActions = blogSlice.actions;
export default blogSlice;
