import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Blog {
  content: string;
  createDate: Date;
  id: number;
  title: string;
  updateDate: string | Date;
  username: string;
  topic: string;
}

interface BlogState {
  blogs: Blog[];
  isModalOpen: boolean;
  blogsByTopic: Blog[];
}

const initialState: BlogState = {
  blogs: [],
  isModalOpen: false,
  blogsByTopic: [],
};

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

    getBlogsByTopic: (state, action: PayloadAction<Blog[]>) => {
      state.blogsByTopic = action.payload;
    },
  },
});

export const blogActions = blogSlice.actions;
export default blogSlice;
