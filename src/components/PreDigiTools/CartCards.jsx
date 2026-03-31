import React from "react";

const CartCard = ({ Products }) => {
    return (
        <div className=" border-2 border-[#f6f6f6] rounded-lg  p-7 mt-9 space-y-7">
            <h1 className="text-xl font-bold mt-3.5">Your Cart</h1>
            {
                Products.map((product) => {
                    return (
                        <div className="bg-[#F9FAFC] p-4 rounded-lg">
                            <div className="flex justify-between items-center">
                                <div className="flex justify-start items-center gap-4">
                                    <div className="p-4 border border-gray-200 rounded-full w-13 h-13 flex items-center justify-center">
                                        <img src={product.icon} className="w-10" alt="" />
                                    </div>
                                    <div>
                                        <h2>{product.name}</h2>
                                        <p>${product.price}</p>
                                    </div>
                                </div>
                                <div>
                                    <button className=" text-red-500">Remove</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <div className="space-y-4">
                <div className="flex justify-between">
                    <p className="text-[#627382]">Total</p>
                    <p className="text-2xl font-bold">$0</p>
                </div>
                <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white btn-block rounded-full">Proceed to Checkout</button>
            </div>
        </div>
    )
}

export default CartCard;