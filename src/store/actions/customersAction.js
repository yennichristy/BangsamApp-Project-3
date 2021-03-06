const baseUrl = "https://bangsam.herokuapp.com";

export const getAllCustomers = data => async dispatch => {
  try {
    const res = await fetch(`${baseUrl}/users/show`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    const resData = await res.json();
    dispatch({
      type: "GET_CUSTOMERS",
      payload: resData.data.docs
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCurrentUser = () => async dispatch => {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(`${baseUrl}/users/current`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        Accept: "application/json"
      }
    });
    const resData = await res.json();
    dispatch({
      type: "GET_CURRENT_USER",
      payload: resData.data
    });
  } catch (error) {
    console.log(error);
  }
};
