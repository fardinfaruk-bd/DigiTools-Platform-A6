import React from "react";
import WritingImd from "../../assets/products/writing_2327400 1.png"

const DigiToolsCard = ({ Products }) => {
    console.log(Products);
    return (
        <div className="card w-96 bg-base-100 shadow-sm">
            <div className="card-body">
                <div className="flex justify-end">
                    <span className="badge badge-xs">Most Popular</span>
                </div>
                <div className="p-4 border border-gray-200 rounded-full w-16 h-16 flex items-center justify-center ">
                    <img src={WritingImd} className="w-10" alt="Writing Tool" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-[#101727] ">AI Writing Pro</h2>
                    <p>Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
                    <p className="">$29/mo</p>
                </div>

                <ul className="mt-6 flex flex-col gap-2 text-xs">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>High-resolution image generation</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Customizable style templates</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Batch processing capabilities</span>
                    </li>
                </ul>
                <div className="mt-6">
                    <button className="btn btn-primary btn-block">Subscribe</button>
                </div>
            </div>
        </div>
    )
}
export default DigiToolsCard;