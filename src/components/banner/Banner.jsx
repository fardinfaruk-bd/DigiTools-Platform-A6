import React from "react";
import BannerImg from "../../assets/banner.png";
import { FaPlay } from "react-icons/fa";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-white-200 min-h-screen w-[85%] mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={BannerImg}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <div className="badge border-none bg-[#E1E7FF] mb-4 py-4">
              <div className="w-6 h-6 bg-linear-to-r from-[#4f39f61d] to-[#9614fa28] rounded-full flex justify-center items-center">

                <div className="w-4 h-4 bg-linear-to-r from-[#4f39f672] to-[#9614fa63] rounded-full flex justify-center items-center">

                  <div className="w-2 h-2 bg-linear-to-r from-[#4f39f6] to-[#9614fa] rounded-full"></div>

                </div>

              </div>
              
              <p className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text ">New: AI-Powered Tools Available</p>
            </div>
            <h1 className="text-7xl text-[#101727] font-extrabold">Supercharge Your Digital Workflow</h1>
            <p className="py-6 text-[18px] text-[#627382]">
              Access premium AI tools, design assets, templates, and productivity <br />
              software—all in one place. Start creating faster today. <br />
              Explore Products
            </p>
            <div className="flex gap-5">
              <button className="btn btn-primary rounded-full">Explore Products</button>
              <button className="btn btn-outline rounded-full border-[#4F39F6] text-[#4F39F6] hover:btn-primary hover:text-white"><FaPlay /> <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text hover:text-white">Watch Demo</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
