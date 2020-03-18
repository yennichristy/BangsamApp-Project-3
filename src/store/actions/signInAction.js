const baseUrl = "https://bangsam.herokuapp.com";

export const register = data => async dispatch => {
  try {
    const res = await fetch(`${baseUrl}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    });
    const resData = await res.json();
    localStorage.setItem("token", resData.data);
    dispatch({
      type: "SUCCESS_SIGNIN",
      payload: resData.data
    });
  } catch (error) {
    localStorage.removeItem("token");
    dispatch({
      type: "FAILED_SIGNIN",
      payload: error
    });
    console.log(error);
  }
};