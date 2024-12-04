import React from "react";

function productlist(props) {
  return(props.data.map((el)=>{
    return(
        <div key={el.id} className="card">
            <img src={el.img} alt="" width="200px" height="200px"/>
            <h2>{el.name}</h2>
            <p>{el.price}</p>
        </div>
    )
  }))
}

export default productlist;
