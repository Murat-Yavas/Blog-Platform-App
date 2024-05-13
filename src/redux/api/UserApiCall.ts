import { userActions } from "../user-slice";

export const fetchOneUser = async (dispatch: any, userId: number) => {
  const response = await fetch(`http://localhost:8080/users/${userId}`, {
    method: "GET",
    headers: <any>{
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("tokenKey"),
    },
  });
  const result = await response.json();
  dispatch(userActions.getUserById(result));
};

export const createOneUser = async (
  dispatch: any,
  userInfo: { username: string; password: string },
  path: string
) => {
  const response = await fetch(`http://localhost:8080/auth/${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  });
  const result = await response.json();
  const resultItem = [
    localStorage.setItem("tokenKey", result.accessToken),
    localStorage.setItem("currentUser", result.userId),
    localStorage.setItem("username", result.username),
  ];
  dispatch(userActions.saveUser(result));
};
