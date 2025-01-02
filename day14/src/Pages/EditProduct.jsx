    import React, { useEffect, useState } from "react";
    // import './EditProduct.css'
    import { useNavigate, useParams } from "react-router-dom";

    function EditProduct() {
    const { id } = useParams();
    const [form, setForm] = useState({
        Title: "",
        ImageURL: "",
    });

    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:3000/products/${id}`)
        .then((res) => res.json())
        .then((data) => setForm(data))
        .catch((err) => console.log(err));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:3000/products/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
        })
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            navigate("/cart");
        })
        .catch((err)=>{
            console.log(err);
        })
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Title"
            name="Title"
            value={form.Title}
            onChange={handleChange}
            />
            <input
            type="text"
            name="ImageURL"
            value={form.ImageURL}
            placeholder="ImageURL"
            onChange={handleChange}
            />
            <input type="submit" />
        </form>
        </div>
    );
    }

    export default EditProduct;
