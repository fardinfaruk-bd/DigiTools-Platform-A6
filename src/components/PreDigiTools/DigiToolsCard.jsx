import React from "react";
import ProductCard from "./ProductCard";


const DigiToolsCard = ({ Products, cartProducts, setCartProducts }) => {
    // console.log(Products);
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-9">
                {
                    Products.map((product) => {
                        return (
                            <ProductCard product={product} key={product.id} cartProducts={cartProducts} setCartProducts={setCartProducts} />
                        )
                    })
                }
            </div>


        </div>
    )
}
export default DigiToolsCard;