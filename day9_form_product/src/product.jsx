import React from 'react'

function Product(s) {
    console.log(s)
  return (
    <>
    <div className="product">
        {s.arr.map((e)=>{
            return <div>
                <img src={e.img} alt="" />
                <h1>{e.title}</h1>
                <h4>{e.price}</h4>
            </div>
        })}
    </div>
    </>
  )
}

export default Product