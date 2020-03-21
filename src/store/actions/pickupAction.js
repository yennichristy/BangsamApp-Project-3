const baseUrl = "https://bangsam.herokuapp.com";

export const getAllPickup = () = async dispatch => {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch (`${baseUrl}/pick-ups/requests`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authentication: `Bearer ${token}`,
        Accept: "application/json",
      }
    });
    const data = await res.json();
    dispatch({
      type: "GET_PICKUP",
      payload: data.data
    })
  } catch (error) {
    console.log(error)
  }
}