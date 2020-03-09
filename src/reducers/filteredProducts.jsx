const init = [];
export const filteredProducts = (state = init, action) => {
  switch (action.type) {
    case "FILTER":
      return (state = init.concat(action.payLoad));

    default:
      return state;
  }
};
