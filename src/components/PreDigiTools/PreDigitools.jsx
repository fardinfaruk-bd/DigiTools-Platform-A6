import React, { use } from "react";
import DigiToolsCard from "./DigiToolsCard";

const PreDigiTools = ({DataPromise}) => {
    console.log(DataPromise);
    const Products = use(DataPromise);
    console.log(Products);
    return (
        <div>
            <div className="w-[85%] mx-auto p-30 ">
                <div className="text-center space-y-3">
                    <h1 className="text-5xl font-extrabold">Premium Digital Tools</h1>
                    <p className="text-[#627382]">Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                </div>
                <DigiToolsCard Products={Products} />
            </div>
        </div>
    )
}

export default PreDigiTools;