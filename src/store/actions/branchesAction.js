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

// export const deleteBranch = () => async dispatch => {
//   const token = localStorage.getItem("token")
//   try {
//     const res = await fetch(`${baseUrl}/branches/{branch_id}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//         Accept: "appplication/json"
//       }
//     });
//     await res.json();
//   } catch (error) {
//     console.log(error)
//   }
// }
