import axios from "axios";

export const Fetchdata = (dis) => {
  dis({ type: "Loading" });
  axios
  .get(`https://fakestoreapi.in/api/products`)
.then((res) => {
      console.log(res.data.products);
      dis({ type: "Success", payload: res.data.products });
    })

    .catch((er) => {
      console.log(er);
      dis({ type: "Error" });
    });
};
