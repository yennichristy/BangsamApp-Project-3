const initialState = {
  pickup: []
};

const pickupReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_PICKUP":
      return {
        ...state,
        pickup: payload
      };
    default:
      return {
        ...state
      };
  }
};

export default pickupReducer;
