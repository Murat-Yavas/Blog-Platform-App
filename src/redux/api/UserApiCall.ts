import { userActions } from "../user-slice";

export const fetchOneUser = async (dispatch: any, userId: number) => {
  const response = await fetch(`http://localhost:8080/users/${userId}`);
  const result = await response.json();
  dispatch(userActions.getUserById(result));
};
