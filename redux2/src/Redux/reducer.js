import { DEC2 } from "./actionType";
import { INC2 } from "./actionType";
import { INC, DEC } from "./actionType";

let initial = {
  count: 0,
  count2 : 2,
  count3 : 2
};

export const reducer = (state = initial, { type, payload }) => {
  if (type == INC) {
    return { ...state, count: state.count + 1 };
  } else if (type == DEC) {
    return { ...state, count: state.count - 1 };
  }

  else if (type == INC2) {
    return { ...state, count2: state.count2 * state.count2 };
  } else if (type == DEC2) {
    return { ...state, count3: state.count3 * payload };
  }
  else{
    return state   
  }
};
