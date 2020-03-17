import { useHistory } from "react-router-dom";

const baseUrl = "https://bangsam.herokuapp.com";

export const register = data => async dispatch => {
  let history = useHistory();

  try {
    const res = await fetch(`${baseUrl}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    });
    const resData = await res.json();
    localStorage.setItem("token", resData.data);
    history.push("/dashboard");
    dispatch({
      type: "SUCCESS_SIGNUP",
      payload: resData.data
    });
  } catch (error) {
    localStorage.removeItem("token");
    dispatch({
      type: "FAILED_SIGNUP",
      payload: error
    });
    console.log(error);
  }
};
