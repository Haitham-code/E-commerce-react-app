const initState = [];

export const cartProduct = (state = initState, action) => {
  switch (action.type) {
    case "ADD-ITEM":
      return (state = [...action.payLoad]);
    case "REMOVE-ITEM":
      return (state = [...action.payLoad]);
    default:
      return state;
  }
};
