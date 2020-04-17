const baseUrl = "https://bangsam.herokuapp.com";

export const getDashboardData = () => async dispatch => {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(`${baseUrl}/dashboard`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        Accept: "application/json"
      }
    });
    const resData = await res.json();
    dispatch({
      type: "GET_DASHBOARD",
      payload: resData.data
    });
  } catch (error) {
    console.log(error);
  }
};
