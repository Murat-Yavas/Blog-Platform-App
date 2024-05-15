import { userActions } from "../user-slice";

export const fetchOneUser = async (dispatch: any, userId: number) => {
  dispatch(userActions.toggleIsLoading(true));
  try {
    const response = await fetch(`http://localhost:8080/users/${userId}`, {
      method: "GET",
      headers: <any>{
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("tokenKey"),
      },
    });
    if (!response.ok) throw new Error("Failed to fetch user");
    const result = await response.json();
    dispatch(userActions.getUserById(result));
    dispatch(userActions.toggleIsLoading(false));
    dispatch(userActions.toggleIsError(false));
  } catch (error) {
    dispatch(userActions.toggleIsLoading(false));
    dispatch(userActions.toggleIsError(true));
  }
};

export const createOneUser = async (
  dispatch: any,
  userInfo: { username: string; password: string },
  path: string
) => {
  try {
    const response = await fetch(`http://localhost:8080/auth/${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    if (!response.ok) throw new Error("Failed to create a new user");
    const result = await response.json();
    const resultItem = [
      localStorage.setItem("tokenKey", result.accessToken),
      localStorage.setItem("currentUser", result.userId),
      localStorage.setItem("username", result.username),
    ];
    dispatch(userActions.saveUser(result));
  } catch (error) {}
};
