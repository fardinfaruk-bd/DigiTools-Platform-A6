import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-black w-full text-white">
            <div>
                <div className="w-[95%] md:w-[90%] lg:w-[85%] mx-auto space-y-7 pt-30">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mx-auto mb-20">
                        <div className="space-y-5">
                            <h1 className="text-3xl font-bold">DigiTools</h1>
                            <p className="text-[#ffffffb3] font-normal">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-xl ">Product</h1>
                            <ol className="text-[#ffffffb3] space-y-4" >
                                <li>Features</li>
                                <li>Pricing</li>
                                <li>Templates</li>
                                <li>Integrations</li>
                            </ol>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-xl ">Company</h1>
                            <ol className="text-[#ffffffb3] space-y-4">
                                <li>About</li>
                                <li>Blog</li>
                                <li>Careers</li>
                                <li>Press</li>
                            </ol>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-xl ">Resources</h1>
                            <ol className="text-[#ffffffb3] space-y-4">
                                <li>Documentation</li>
                                <li>Help Center</li>
                                <li>Community</li>
                                <li>Contact</li>
                            </ol>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-xl ">Social Links</h1>
                            <div className="flex items-center gap-5 cursor-pointer">
                                <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center">
                                    <FaInstagram className="text-black" />
                                </div>
                                <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center">
                                    <FaFacebook className="text-black" />
                                </div>
                                <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center">
                                    <FaXTwitter className="text-black" />
                                </div>
                            </div>
                        </div>

                    </div>
                    <hr className="border border-gray-100 opacity-65" />
                    <div className="md:flex justify-between items-center pb-8">
                        <p className="text-[#ffffffb3]">© 2026 Digitools. All rights reserved.</p>
                        <div className="flex items-center  gap-8 text-[#ffffffb3]">
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>
                            <p>Cookies</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;