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

interface UserInfo {
  accessToken: string | null;
  message: string | null;
  username: string | null;
}

interface UserState {
  user: User;
  userCredentials: UserInfo;
}

const initialState: UserState = {
  user: {
    id: 0,
    password: "",
    username: "",
    blog: [],
    comment: [],
  },

  userCredentials: {
    accessToken: null,
    message: null,
    username: null,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserById: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },

    saveUser: (state, action: PayloadAction<UserInfo>) => {
      state.userCredentials = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
