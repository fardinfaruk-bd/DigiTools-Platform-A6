import React from "react";

const PricingCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">

            <div className=" rounded-2xl p-6 text-[#627382] bg-white shadow-xl">


                <h2 className="text-2xl font-bold text-[#101727]">Starter</h2>
                <p className="text-sm opacity-80 mb-4">Perfect for getting started</p>

                <h1 className="text-4xl font-bold mb-3.5 text-[#101727]">
                    $0<span className="text-lg font-normal text-[#627382]">/Month</span>
                </h1>

                <ul className="my-6 flex flex-col gap-2 text-[#627382] mb-21 ">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Access to 10 free tools</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Basic templates</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Community support</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>1 project per month</span>
                    </li>
                    
                </ul>

                
                <button className="w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold py-3 rounded-full hover:scale-105  transition">
                    Start Pro Trial
                </button>
            </div>

            <div className="relative  rounded-2xl p-6 text-white bg-linear-to-b from-[#4F39F6] to-[#9514FA] shadow-xl">

                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-[#FEF3C6] text-[#BB4D00] px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                    </span>
                </div>

                <h2 className="text-2xl font-bold">Pro</h2>
                <p className="text-sm opacity-80 mb-4">Best for professionals</p>

                <h1 className="text-4xl font-bold mb-4">
                    $29<span className="text-lg font-normal">/Month</span>
                </h1>

                <ul className="my-6 flex flex-col gap-2 text-white ">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Access to all premium tools</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Unlimited templates</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Priority support</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Unlimited projects</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Cloud sync</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Advanced analytics</span>
                    </li>
                </ul>


                <button className="w-full bg-white text-purple-600 font-semibold py-3 rounded-full hover:scale-105 hover:bg-[#4F39F6] hover:text-white transition">
                    Start Pro Trial
                </button>
            </div>

            
            <div className="  rounded-2xl p-6 text-[#627382] bg-white shadow-xl">

                

                <h2 className="text-2xl font-bold text-[#101727]">Enterprise</h2>
                <p className="text-sm opacity-80 mb-4">For teams and businesses</p>

                <h1 className="text-4xl font-bold mb-4 text-[#101727]">
                    $99<span className="text-lg font-normal text-[#627382]">/Month</span>
                </h1>

                <ul className="my-6 flex flex-col gap-2 text-[#627382] ">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Everything in Pro</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Team collaboration</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Custom integrations</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Dedicated support</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>SLA guarantee</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Custom branding</span>
                    </li>
                    
                </ul>

                
                <button className="w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold py-3 rounded-full hover:scale-105  transition">
                    Contact Sales
                </button>
            </div>
        </div>
    );
};

export default PricingCard;