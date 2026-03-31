import React, { use, useState } from "react";
import DigiToolsCard from "./DigiToolsCard";
import CartCard from "./CartCards";


const PreDigiTools = ({DataPromise, cartProducts, setCartProducts}) => {
    const Products = use(DataPromise);
    const [selectedBtn, setSelectedBtn] = useState("Products");
    

    

    return (
        <div>
            <div className="w-[95%] md:w-full lg:w-[85%] mx-auto my-30 ">
                <div className="text-center space-y-8  ">
                    <h1 className="text-5xl font-extrabold">Premium Digital Tools</h1>
                    <p className="text-[#627382]">Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                </div>
                <div className="text-center border border-[#f6f6f6] w-45 flex items-center justify-center mx-auto rounded-full gap-3 py-1 mt-7">
                    <button onClick={() => setSelectedBtn("Products")} className={ `${selectedBtn === "Products" ? "btn font-bold rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "rounded-l-none text-[#25065D] font-medium"}`} >Products</button>
                    <button onClick={() => setSelectedBtn("Cart")} className={ `${selectedBtn === "Cart" ? "btn font-bold rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : " text-[#25065D] font-medium"}`}>{cartProducts.length === 0 ? "Cart" : `Cart (${cartProducts.length})`}</button>
                </div>
                {selectedBtn === "Products" ? <DigiToolsCard Products={Products} cartProducts={cartProducts} setCartProducts={setCartProducts} /> : <CartCard Products={Products} cartProducts={cartProducts} setCartProducts={setCartProducts}  />}
            </div>
        </div>
    )
}

export default PreDigiTools;