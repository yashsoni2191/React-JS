let Pr = {
  loading: false,
  success: false,
  data: [],
  error: false,
};

export const ProductReducer = (state = Pr, { type, payload }) => {
  switch (type) {
    case "Loading":
      return { ...Pr, loading: true };

    case "Success":
      return { ...Pr, loading: false, success: true, data: payload };

    case "Error":
      return { ...Pr, loading: false, error: true };

    default:
      return state;
  }
};

export default ProductReducer;
