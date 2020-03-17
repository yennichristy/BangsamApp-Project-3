const initialState = {
  token: localStorage.getItem("token"),
  user: null,
  error: null
};

const registerReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SUCCESS_SIGNUP":
      return {
        ...state,
        token: payload,
        user: payload.user
      };
    case "FAILED_SIGNUP":
      return {
        ...state,
        error: payload.error
      };
    default:
      return { ...state };
  }
};

export default registerReducer;
