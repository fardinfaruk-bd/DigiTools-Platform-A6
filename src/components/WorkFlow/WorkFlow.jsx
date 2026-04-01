import React from 'react';

const WorkFlow = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white py-30 '>
            <div className='w-[85%] mx-auto text-center space-y-10'>
                <div className='space-y-4'>
                    <h1 className='text-[40px] font-extrabold text-white'>Ready to Transform Your Workflow?</h1>
                    <p className='text-white font-normal'>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
                </div>
                <div className='space-y-4'>
                    <div className='flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-center'>
                        <button className='p-4  bg-white text-[#9514FA] rounded-full  font-semibold text-[16px] hover:bg-gray-200 hover:scale-110 transition duration-300'>Explore Products</button>
                        <button className='p-4 border-2 border-white rounded-full w-40.75 font-semibold text-[16px] hover:text-black hover:bg-white hover:scale-110 transition duration-300'>View Pricing</button>
                    </div>
                    <p className='text-white font-normal'>14-day free trial • No credit card required • Cancel anytime</p>
                </div>
            </div>
        </div>
    )
}

export default WorkFlow;