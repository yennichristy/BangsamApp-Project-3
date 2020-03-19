const initialState = {
  customers: []
};

const customersReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_CUSTOMERS":
      return {
        ...state,
        customers: payload
      };
    default:
      return {
        ...state
      };
  }
};

export default customersReducer;
