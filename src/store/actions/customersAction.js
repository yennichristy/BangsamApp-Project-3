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
