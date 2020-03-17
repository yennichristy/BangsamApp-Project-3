const initialState = {
  token: localStorage.getItem("token"),
  user: null,
  error: null
};

const signInReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SUCCESS_SIGNIN":
      return {
        ...state,
        token: payload,
        user: payload.user
      };
    case "FAILED_SIGNIN":
      return {
        ...state,
        error: payload.error
      };
    default:
      return { ...state };
  }
};

export default signInReducer;
