import React from "react";

import ShoppingImg from "../../assets/products/shopping-cart.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ( { cartProducts } ) => {
  return (
    <div className=" bg-base-100 shadow-sm ">
      <div className="flex justify-between items-center w-[95%] md:w-[90%] lg:w-[85%] mx-auto py-3">

        <div className="flex items-center gap-5">
          <GiHamburgerMenu className="block md:hidden" />
          <h1 className="font-bold text-2xl md:text-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text">
            DigiTools
          </h1>
        </div>

        <div className="md:block hidden">
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

        <div className="flex items-center gap-5">
          <div className="relative">
            <img src={ShoppingImg} alt="Shopping Cart" className="text-3xl" />
            {cartProducts.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-3.5 h-3.5 flex items-center justify-center rounded-full">
                {cartProducts.length}
              </span>
            )}
          </div>
          <p className="text-[#101727] font-semibold cursor-pointer md:block hidden">Login</p>
          <button className="btn text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]  rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
