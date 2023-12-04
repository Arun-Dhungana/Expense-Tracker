const reducer = (state, action) => {
  switch (action.type) {
    case "Add_Transaction":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "Delete_Transaction":
      return {
        ...state,
        transactions: state.transactions.filter(
          (item) => item.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
export default reducer;
