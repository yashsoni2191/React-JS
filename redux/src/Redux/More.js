let ss = 0;

export const YS2 = (state = ss, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;

    case "DEC":
      return state - 1;
      
    default:
      return state;
  }
};
