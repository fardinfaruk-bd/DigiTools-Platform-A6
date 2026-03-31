import React from "react";
import PricingCard from "./PricingCard";

const Pricing = () => {
    return (
        <div>
            <div className="my-30 w-[85%] mx-auto">
                <div className=" text-center space-y-5">
                    <h1 className="text-[#101727] font-extrabold text-5xl">Simple, Transparent Pricing</h1>
                    <p className="text-[#627382]">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>
                <PricingCard />
            </div>
        </div>
    )
}

export default Pricing;