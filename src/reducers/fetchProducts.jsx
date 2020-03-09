const init = [];
export const fetchData = (state = init, action) => {
  switch (action.type) {
    case "FETCH-PRODUCTS":
      return (state = init.concat(action.payLoad));
    case "ORDER":
      return (state = init.concat(action.payLoad));

    default:
      return state;
  }
};
