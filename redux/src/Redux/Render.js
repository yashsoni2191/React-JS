let ss = 0;

export const YS = (state = ss, action) => {
  switch (action.type) {
    case "INC1":
      return state + 1;

    case "DEC1":
      return state - 1;

    default:
      return state;
  }
};
