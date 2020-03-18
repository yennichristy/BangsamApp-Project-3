const baseUrl = "https://bangsam.herokuapp.com";

export const getAllBranches = data => async dispatch => {
  try {
    const res = await fetch(`${baseUrl}/branches`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    const resData = await res.json();
    dispatch({
      type: "GET_BRANCHES",
      payload: resData.data.docs
    });
  } catch (error) {
    console.log(error);
  }
};
