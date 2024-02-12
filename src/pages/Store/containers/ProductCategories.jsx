import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";
import { allproducts } from "../../../data/data";
import { Link } from "react-router-dom";

const fashionProductCategories = ["mens", "Womens"];

const Products = () => {

    const [products, setProductList] = useState(allproducts);
    const [category, setCategoryList] = useState([]);
    const [maxPrice, setMaxPrice] = useState(1000);
    const [sort, setSort] = useState(null);

    const handleChanges = (e) => {
        console.log("The value of e is: ", e.target.value);
        const value = e.target.value;
        const isChecked = e.target.checked;

        if (isChecked) {
            setCategoryList([...category, value]);
        }
        else {
            setCategoryList(category.filter((item) => item !== value));
        }
        console.log(category);
    }

    useEffect(() => {
        // filter products by category and price
        const filteredProducts = allproducts.filter(product => {

            if (category.length == 0 || category.includes(product.category)) {
                return product.original_price <= maxPrice;
            }
            else {
                return false;
            }
        })

        if (sort === "asc") {
            filteredProducts.sort((a, b) => a.original_price - b.original_price);
        } else if (sort === "desc") {
            filteredProducts.sort((a, b) => b.original_price - a.original_price);
        }


        setProductList(filteredProducts)

    }, [sort, maxPrice, category])


    return (
        <div className="flex justify-around h-screen">
            <div className="shadow-md w-fit h-screen p-10 hidden md:flex flex-col sticky">
                <div className="mb-10">
                    <h2 className="font-semibold mb-4">Product Categories</h2>
                    {fashionProductCategories.map((category, index) => (
                        <div className="inputItem" key={index}>
                            <input
                                type="checkbox"
                                id={category}
                                value={category}
                                onChange={handleChanges}
                            />
                            <label htmlFor={category}>{category}</label>
                        </div>
                    ))}
                </div>
                <div className="filterItem mb-10">
                    <h2 className="font-semibold mb-4">Filter by price</h2>
                    <div className="inputItem flex items-center">
                        <span className="mr-2">0</span>
                        <input
                            type="range"
                            min={0}
                            max={1000}
                            onChange={(e) => setMaxPrice(e.target.value)}

                        />
                        <span className="ml-2">{maxPrice}</span>
                    </div>
                </div>
                <div className="filterItem mb-10">
                    <h2 className="font-semibold mb-4">Sort by</h2>
                    <div className="inputItem mb-2">
                        <input
                            type="radio"
                            id="asc"
                            value="asc"
                            name="price"
                            onChange={() => setSort("asc")}
                        />
                        <label htmlFor="asc" className="ml-2">Price (Lowest first)</label>
                    </div>
                    <div className="inputItem">
                        <input
                            type="radio"
                            id="desc"
                            value="desc"
                            name="price"
                            onChange={() => setSort("desc")}
                        />
                        <label htmlFor="desc" className="ml-2">Price (Highest first)</label>
                    </div>
                </div>
            </div>
            <div className="w-full px-10 overflow-scroll overflow-x-hidden">
                <div className="bg-white w-full grid grid-cols-4 gap-8 flex-wrap mt-10">
                    {products.map((product) => (
                        <Link key={product.id} to={`/store/${product.id}`}>
                            <Product key={product.id} product={product} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
