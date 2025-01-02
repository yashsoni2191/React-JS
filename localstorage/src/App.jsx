import { useState, useEffect } from "react";
import ProductList from "./ProductList";
import "./App.css";
import v4 from "react-uuid";

function App() {
  const [product, setProduct] = useState({
    id: v4(),
    title: "",
    price: "",
    desc: "",
    image: "",
  });
  const [arr, setArr] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );
  const [edit, setEdit] = useState("");

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(arr));
  },[arr]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(e);
    if (edit == "") {
      let obj = {
        ...product,
        id: v4(),
      };
      setArr([...arr, obj]);
      setProduct({
        title: "",
        price: "",
        desc: "",
        image: "",
      });
    } else {
      let a = arr.map((el) => {
        if (el.id == edit) {
          return { ...el, ...product };
        } else {
          return el;
        }
      });
      setArr(a);
      setEdit("");
      setProduct({
        title: "",
        price: "",
        desc: "",
        image: "",
      });
    }
  };

  const handleDelete = (deleteid) => {
    let a = arr.filter((el) => {
      if (el.id != deleteid) {
        return el;
      }
    });
    setArr(a);
  };

  const handleEdit = (Editid) => {
    setEdit(Editid);
    arr.forEach((el) => {
      if (el.id == Editid) {
        setProduct({ ...product, ...el});
      }
    });
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={product.title}
          name="title"
          placeholder="Title"
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          value={product.price}
          name="price"
          placeholder="Price"
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          value={product.desc}
          name="desc"
          placeholder="Description"
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          value={product.image}
          name="image"
          placeholder="image"
          onChange={handleInputChange}
        />
        <br />
        <input type="submit" value={edit == "" ? "submit" : "Edit "}/>
      </form>
      <ProductList
        arr={arr}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </>
  );
}

export default App;
