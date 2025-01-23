import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fetchdata } from "../Redux/action";

const Product = () => {
  const [state, setstate] = useState([]);

  let data1 = useSelector((store) => store);
  let diss = useDispatch();

  console.log(data1);

  useEffect(() => {
    diss(Fetchdata);
  }, []);

  console.log(state);

  return (
    <div className="">
      {data1.loading ? (
        <div>
          {" "}
          <img
            src="https://loading.io/assets/mod/spinner/spinner/lg.gif"
            alt=""
          />{" "}
          <p className=""> Loading...... </p>{" "}
        </div>
      ) : (
        data1.data.map((e) => {
          return (
            <div
              id="card"
              key={e.id}
              className=""
            >
              <div
                id="img"
                className=""
              >
                <img src={e.image} alt="" width={"200px"} />
              </div>
              <div
                id="title"
                className=""
              >
                <h3 className=""> {e.title} </h3>
                <p className=" "> {e.brand} </p>
                <h1 className="">
                  {" "}
                  $ {e.price}
                  <span className="">
                    {" "}
                    $ {e.price + 130}{" "}
                  </span>
                  <span className="">
                    {" "}
                    {e.discountPercentage} % Off{" "}
                  </span>{" "}
                </h1>

                <p className="m">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  {e.rating}*{" "}
                </p>

                <p className="">
                  {" "}
                  Save extra with combo offers{" "}
                </p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Product;
