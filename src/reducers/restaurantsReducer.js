export const restaurantsReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_RESTAURANTS_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'RESTAURANTS_FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case 'RESTAURANTS_FETCH_FAILURER':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
