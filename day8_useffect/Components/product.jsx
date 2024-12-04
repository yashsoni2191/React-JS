import React from 'react'
import { useState, useEffect } from 'react';

function product() {

    const [arr, setArr] = useState([]);
    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((res) => {
          setArr(res);
          console.log(arr);
        })
        .catch((err) => {
          console.log(err);
        });
    },[]);
  return (
    <product data={arr}/>
  )
}

export default product