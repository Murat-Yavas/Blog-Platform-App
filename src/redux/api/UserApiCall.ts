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
  dispatch(userActions.toggleIsLoading(true));
  try {
    const response = await fetch(`http://localhost:8080/auth/${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    const result = await response.json();
    if (result.message !== null) {
      dispatch(userActions.toggleIsError(true));
      dispatch(userActions.saveUser(result));
    }

    if (!response.ok) {
      dispatch(userActions.toggleIsError(true));
      throw new Error("Failed to create a new user");
    }
    const resultItem = [
      localStorage.setItem("tokenKey", result.accessToken),
      localStorage.setItem("currentUser", result.userId),
      localStorage.setItem("username", result.username),
    ];
    dispatch(userActions.saveUser(result));
    dispatch(userActions.toggleIsLoading(false));
    dispatch(userActions.toggleIsError(false));
  } catch (error) {
    dispatch(userActions.toggleIsLoading(false));
    dispatch(userActions.toggleIsError(true));
  }
};

export const updateOneUser = async (
  dispatch: any,
  userId: number,
  body: { username: string; password: string }
) => {
  try {
    const response = await fetch(`http://localhost:8080/users/${userId}`, {
      method: "PUT",
      headers: <any>{
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("tokenKey"),
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
