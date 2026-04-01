import React from "react";

const Stats = () => {
    return (
        <div className="w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-15">
            <div className="w-[60%] mx-auto">
                <div className="space-y-10 md:space-y-15 lg:space-y-0 lg:flex lg:gap-10 justify-between">

                    <div className="text-center space-y-3">
                        <h1 className="text-white text-4xl md:text-6xl font-extrabold">50k+</h1>
                        <p className="text-[18px] md:text-2xl font-medium text-[#ffffffc2]">Active Users</p>
                    </div>

                    <div className=" md:w-20 lg:w-0.5 md:h-0.5 lg:h-20 md:mx-auto  bg-gray-400 opacity-80 hidden md:block"></div>

                    <div className="text-center space-y-3">
                        <h1 className="text-white text-4xl md:text-6xl font-extrabold">200+</h1>
                        <p className="text-[18px] md:text-2xl font-medium text-[#ffffffc2]">Premium Tools</p>
                    </div>

                    <div className="md:w-20 lg:w-0.5 md:h-0.5 lg:h-20 md:mx-auto  bg-gray-400 opacity-80 hidden md:block"></div>
                    <div className="text-center space-y-3">
                        <h1 className="text-white text-4xl md:text-6xl font-extrabold">4.9</h1>
                        <p className="text-[18px] md:text-2xl font-medium text-[#ffffffc2]">Rating</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Stats; 