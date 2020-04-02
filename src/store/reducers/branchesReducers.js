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
    case "BLOCK_BRANCH":
      return {
        ...state,
        branch: state.branches.filter(item => item.id !== payload)
      };
    default:
      return {
        ...state
      };
  }
};

export default branchesReducer;
