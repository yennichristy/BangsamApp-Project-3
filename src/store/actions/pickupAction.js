const baseUrl = "https://bangsam.herokuapp.com";

export const getAllPickup = () => async dispatch => {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(`${baseUrl}/pick-ups/requests/admin`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        Accept: "application/json"
      }
    });
    const resData = await res.json();
    console.log("respon", res);
    dispatch({
      type: "GET_PICKUP",
      payload: resData.data
    });
  } catch (error) {
    console.log(error);
  }
};
