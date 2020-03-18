const initialState = {
  branches: []
};

const branchesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_BRANCHES":
      return {
        ...state,
        branches: payload
      };
    default:
      return {
        ...state
      };
  }
};

export default branchesReducer;
