import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Blog } from "./blog-slice";
import { Comment } from "./comment-slice";

interface User {
  id: number;
  password: string;
  username: string;
  blog: Blog[];
  comment: Comment[];
}

interface UserState {
  user: User;
}

const initialState: UserState = {
  user: {
    id: 0,
    password: "",
    username: "",
    blog: [],
    comment: [],
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserById: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
