const baseUrl = "https://bangsam.herokuapp.com";

export const getAllBranches = () => async dispatch => {
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

export const blockBranch = branch_id => async dispatch => {
  const token = localStorage.getItem("token");
  console.log(branch_id);
  try {
    const res = await fetch(`${baseUrl}/branches/${branch_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        Accept: "appplication/json"
      }
    });
    await res.json();
    dispatch({
      type: "BLOCK_BRANCH",
      payload: branch_id
    });
  } catch (error) {
    console.log(error);
  }
};
