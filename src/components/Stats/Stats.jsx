import React from "react";

const Stats = () => {
    return (
        <div className="w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-15">
            <div className="w-full md:w-[60%] mx-auto">
                <div className=" md:flex justify-between">
                    <div className="text-center space-y-3">
                        <h1 className="text-white text-6xl font-extrabold">50k+</h1>
                        <p className="text-2xl font-medium text-[#ffffffc2]">Active Users</p>
                    </div>
                    <div className="w-0.5 h-20 bg-gray-400 opacity-80"></div>
                    <div className="text-center space-y-3">
                        <h1 className="text-white text-6xl font-extrabold">200+</h1>
                        <p className="text-2xl font-medium text-[#ffffffc2]">Premium Tools</p>
                    </div>
                    <div className="w-0.5 h-20 bg-gray-400"></div>
                    <div className="text-center space-y-3">
                        <h1 className="text-white text-6xl font-extrabold">4.9</h1>
                        <p className="text-2xl font-medium text-[#ffffffc2]">Rating</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Stats; 