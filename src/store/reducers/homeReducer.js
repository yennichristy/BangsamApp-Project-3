const initialState = {
  dashboard: null
};

const homeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_DASHBOARD":
      return {
        ...state,
        dashboard: payload
      };
    default:
      return {
        ...state
      };
  }
};

export default homeReducer;
