import React, { useState } from "react";

const ProductCard = ({ product }) => {
    const [isBuying, setIsBuying] = useState(false);

    const handleBuyClick = () => {
        setIsBuying(true);
         
    };

    return (
        <div className="card rounded-lg bg-base-100 shadow-sm">
            <div className="card-body">
                <div className="flex justify-end">
                    <span className="badge badge-xs bg-[#fef3c6] text-[#bb4d00] p-3">{product.tag}</span>
                </div>
                <div className="p-4 border border-gray-200 rounded-full w-16 h-16 flex items-center justify-center ">
                    <img src={product.icon} className="w-10" alt="Writing Tool" />
                </div>
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#101727] ">{product.name}</h2>
                    <p className="text-[#627382] line-clamp-2 ">{product.description}</p>
                    <p className="text-[#627382]"><span className="text-[#101727] text-2xl font-bold">${product.price}</span>/{product.period}</p>

                    <ul className="mt-6 flex flex-col gap-2 text-xs text-[#627382]">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>{product.features[0]}</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>{product.features[1]}</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>{product.features[2]}</span>
                        </li>
                    </ul>
                </div>


                <div className="mt-6">
                    <button onClick={handleBuyClick}  className={`btn ${isBuying === false ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : "bg-green-500"} text-[16px] text-white btn-block rounded-full`}>{isBuying ? "Purchased" : "Buy Now"}</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;