const initialState = {
  customers: [],
  currentUser: []
};

const customersReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_CUSTOMERS":
      return {
        ...state,
        customers: payload
      };
    case "GET_CURRENT_USER":
      return {
        ...state,
        currentUser: payload
      };
    default:
      return {
        ...state
      };
  }
};

export default customersReducer;
