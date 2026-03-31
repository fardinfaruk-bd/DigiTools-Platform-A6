import React from "react";
import UserImg from "../../assets/user.png"
import PackageImg from "../../assets/package.png"
import RocketImg from "../../assets/rocket.png"


const Steps = () => {
    return (
        <div className="bg-[#F9FAFC] py-20">
            <div className="w-[85%] mx-auto ">
                <div className=" text-center space-y-3 mb-15">
                    <h3 className="text-5xl text-[#101727] font-extrabold">Get Started in 3 Steps</h3>
                    <p className="text-[#627382]">Start using premium digital tools in minutes, not hours.</p>
                </div>
                <div className="grid grid-cols-3 gap-7.5">
                    <div className="card rounded-lg  bg-base-100 shadow-sm">
                        <div className="card-body p-6 ">
                            <div className="flex justify-end">
                                <div className="p-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-10 h-10 flex items-center  ">
                                    <p className="text-center text-white">1</p>
                                </div>
                            </div>

                            <div className="flex flex-col items-center justify-center text-center mb-6">
                                <div className="p-4 bg-linear-to-r from-[#4f39f629] to-[#9614fa30] rounded-full  w-16 h-16 flex items-center justify-center mb-5 ">
                                    <img src={UserImg} className="w-10 text-amber-500" alt="Writing Tool" />
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold text-[#101727]">Create Account</h1>
                                    <p className="text-[#627382]">Sign up for free in seconds. No credit card <br /> required to get started.</p>
                                </div>
                            </div>



                        </div>
                    </div>
                    <div className="card rounded-lg  bg-base-100 shadow-sm">
                        <div className="card-body p-6">
                            <div className="flex justify-end">
                                <div className="p-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-10 h-10 flex items-center  ">
                                    <p className="text-center text-white">2</p>
                                </div>
                            </div>

                            <div className="flex flex-col items-center justify-center text-center mb-6">
                                <div className="p-4 bg-linear-to-r from-[#4f39f629] to-[#9614fa30] rounded-full  w-16 h-16 flex items-center justify-center  mb-5">
                                    <img src={PackageImg} className="w-10 text-amber-500" alt="Writing Tool" />
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold text-[#101727]">Choose Products</h1>
                                    <p className="text-[#627382]">Browse our catalog and select the tools <br /> that fit your needs.</p>
                                </div>
                            </div>



                        </div>
                    </div>
                    <div className="card rounded-lg  bg-base-100 shadow-sm">
                        <div className="card-body p-6">
                            <div className="flex justify-end">
                                <div className="p-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-10 h-10 flex items-center  ">
                                    <p className="text-center text-white">3</p>
                                </div>
                            </div>

                            <div className="flex flex-col items-center justify-center text-center mb-6">
                                <div className="p-4 bg-linear-to-r from-[#4f39f629] to-[#9614fa30] rounded-full  w-16 h-16 flex items-center justify-center  mb-5">
                                    <img src={RocketImg} className="w-10 text-amber-500" alt="Writing Tool" />
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold text-[#101727]">Start Creating</h1>
                                    <p className="text-[#627382]">Download and start using your premium <br /> tools immediately.</p>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Steps;