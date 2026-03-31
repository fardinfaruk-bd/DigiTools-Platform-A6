import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { toast } from "react-toastify";

const CartCard = ({ cartProducts, setCartProducts}) => {
    console.log(cartProducts, "selectedCart");
    const handleDeleteCartProduct = (cartProduct) => {
        const newCartProducts = cartProducts.filter((product) => product.id !== cartProduct.id);
        setCartProducts(newCartProducts);
        toast.success(`${cartProduct.name} removed from cart`)
    }

    const handleCheckoutBtn = () => {
        setCartProducts([]);
        toast.success("Checkout successful! Thank you for your purchase.")
        
    }

    const TotalPrice = cartProducts.reduce((total, product) => total + product.price, 0); 

    return (
        <div className=" border-2 border-[#f6f6f6] rounded-lg  p-7 mt-9 space-y-7">
            <h1 className="text-xl font-bold mt-3.5">Your Cart</h1>
            {cartProducts.length === 0
                ? <div className="flex items-center justify-center gap-2 flex-col h-100">
                    <CiShoppingCart className="w-30 h-30 text-[#627382]" />
                    <p className="text-[#627382]">Select a product to add it to your cart</p>
                </div>
                : cartProducts.map((cartProduct) => {
                    return (
                        <div key={cartProduct.id} className="bg-[#F9FAFC] p-4 rounded-lg">
                            <div className="flex justify-between items-center">
                                <div className="flex justify-start items-center gap-4">
                                    <div className="p-4 border border-gray-200 rounded-full w-13 h-13 flex items-center justify-center">
                                        <img src={cartProduct.icon} className="w-10" alt="" />
                                    </div>
                                    <div>
                                        <h2>{cartProduct.name}</h2>
                                        <p>${cartProduct.price}</p>
                                    </div>
                                </div>
                                <div>
                                    <button className=" text-red-500" onClick={() => handleDeleteCartProduct(cartProduct)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            {cartProducts.length === 0 ? "" :
                <div className="space-y-4">
                    <div className="flex justify-between">
                        <p className="text-[#627382]">Total</p>
                        <p className="text-2xl font-bold">${TotalPrice}</p>
                    </div>
                    <button onClick={handleCheckoutBtn} className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white btn-block rounded-full">Proceed to Checkout</button>
                </div>}
        </div>
    )
}

export default CartCard;