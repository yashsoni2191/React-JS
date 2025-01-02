import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function SingleProduct() {
  const [obj, setobj] = useState({});
  const { id } = useParams();
  const [cart, setCart]= useState(JSON.parse(localStorage.getItem("cart")) || [])
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setobj(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(()=>{
    localStorage.setItem("cart", JSON.stringify(cart))
  },[cart])

  const handleAddcart = () => {
    let data = cart.filter((el)=>el.id == id)
    console.log(data)
    if (data.length) {
        alert("item already present in cart")
    }
    else{
        setCart([...cart,{...obj,quantity:1}])
    }
  }


  return (
    <div>
      <h1>{obj.title}</h1>
      <img src={obj.image} alt="" height="200px" width="200px"/>
      <p>
        ₹{obj.price} - {obj.description}
      </p>
      <button onClick={handleAddcart}>Add to Cart</button>
    </div>
  );
}

export default SingleProduct;
