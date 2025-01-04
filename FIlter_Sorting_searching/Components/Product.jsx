import React, { useEffect, useState } from 'react';

function Product() {
    const [product, setProduct] = useState([]);
    const [filterData, setfilterData] = useState([])
    const [sortval, setSort] = useState()
    const [filterval, setFilter] = useState([])
    const [searchval, setSearch] = useState([])

    const handleOptionChange = (e)=>{
        setSort(e.target.value)
    }

    const handleFilter = (e) =>{
        setFilter(e.target.value)
    }

    const handleSearch = (e)=>{
        setSearch(e.target.value)
    }

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products?limit=20`)
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setProduct(res);
                setfilterData(res)
            })
            .catch((err) => {
                console.error('Error fetching products:', err);
            });
    }, []);

    useEffect (()=>{
        let arr = [...product]
        if(sortval == "asc"){
            arr.sort((a,b)=> a.price - b.price)
        }
        else if(sortval == "des"){
            arr.sort((a,b)=> b.price - a.price)
        }
        else {
            arr = product
        }

        if(filterval != ""){
            arr = arr.filter((el)=>{
                return el.category == filterval
            })
        }

        if(searchval != ""){
            arr = arr.filter((el)=>{
                return el.title.toLowerCase().includes(searchval.toLowerCase())
            })
        }

        setfilterData(arr)
    },[sortval, filterval, searchval])

    return (
        <div>
            <h1>Product</h1>
            <input type="text" placeholder='search' onChange={handleSearch}/>
            <select name="" id="" onChange={handleFilter}>
                <option value="">Select Catogory</option>
                <option value="men's clothing">Men's Collection</option>
                <option value="women's clothing">Women's Collection</option>
                <option value="jewelery">Jewllery</option>
                <option value="electronics">Electronics</option>
            </select>
            <select name="" id="" onChange={handleOptionChange}>
                <option value="">Sort by Price</option>
                <option value="asc">Low to High</option>
                <option value="des">High to Low</option>
            </select>
            {filterData && filterData.map((el) => (
                <div key={el.id}>
                    <h3>{el.title}</h3>
                    <p>{el.description}</p>
                    <p>Price: {el.price}</p>
                    <img src={el.image} alt={el.title} height="200px" width="200px"/>
                </div>
            ))}
        </div>
    );
}

export default Product;