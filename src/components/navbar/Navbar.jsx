import React from "react";
import ShoppingCart from "../../assets/products/shopping-cart.png";

const Navbar = () => {
  return (
    <div className=" bg-base-100 shadow-sm w-full ">
      <div className="flex justify-between items-center w-[85%] mx-auto py-3">
        <div className="navbar-start">
          <h1 className="font-bold text-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text">
            DigiTools
          </h1>
        </div>
        <div className="navbar-center flex">
          <ul className="menu menu-horizontal text-[16px] px-1 text-[#101727] font-semibold">
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-5">
          <div>
            <img src={ShoppingCart} alt="Shopping Cart" />
          </div>
          <p className="text-[#101727] font-semibold cursor-pointer">Login</p>
          <button className="btn text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]  rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
