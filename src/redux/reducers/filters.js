const initialState = {
  items: [],
  isLoaded: false,
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTER_PRODUCTS":
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};

export default filters;
