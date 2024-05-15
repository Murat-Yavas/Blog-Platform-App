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
  isUserLoading: boolean;
  isUserError: boolean;
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
  isUserLoading: false,
  isUserError: false,
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

    toggleIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isUserLoading = action.payload;
    },

    toggleIsError: (state, action: PayloadAction<boolean>) => {
      state.isUserError = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
