const initialState = {
  token: localStorage.getItem("token"),
  user: null,
  error: null
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SUCCESS":
      return {
        ...state,
        token: payload,
        user: payload.user
      };
    case "FAILED":
      return {
        ...state,
        error: payload.error
      };
    default:
      return { ...state };
  }
};

export default userReducer;
