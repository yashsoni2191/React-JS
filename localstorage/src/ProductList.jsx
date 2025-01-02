import React from "react";

function ProductList({ arr, handleDelete, handleEdit }) {
  return (
    <div>
      {arr.map((el) => {
        return (
          <div key={el.id}>
            <img src={el.image} alt="" width="200px" height="200px" />
            <h2>{el.title}</h2>
            <p>
              {el.price}-{el.desc}
            </p>
            <button
              onClick={() => {
                handleDelete(el.id);
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                handleEdit(el.id);
              }}
            >
              Edit
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
