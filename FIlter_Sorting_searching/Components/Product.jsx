import React, { useEffect, useState } from 'react'

function Product() {
    
    const [product, setProduct] = useState([])
    useEffect(()=>{
        fetch(`https://fakestoreapi.in/api/products?limit=20`)
        .then((res)=>res.json)
        .then((res)=>{
            setProduct(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    
  return (
    <div>
        <h1>Product</h1>
        {
            product && product.map((el)=>(
                <div key={el.id}>
                    <img src={el.image} alt="" />
                    <h2>{el.title}</h2>
                </div>
            ))
        }
        </div>
  )
}

export default Product