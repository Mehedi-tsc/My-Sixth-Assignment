import React from 'react';

const OptionalSection = () => {
    return (
        <div className='bg-[#4F39F6] py-28'>
           <div className='w-11/12 mx-auto space-y-6'>
                <div className='text-center space-y-4'>
                    <h2 className='font-extrabold text-white text-4xl'>Ready to Transform Your Workflow?</h2>
                    <p className='text-white/50'>Join thousands of professionals who are already using Digitools to work smarter.<br />Start your free trial today.</p>
                </div>
                <div className='space-x-6 flex justify-center items-center'>
                    <div className="btn rounded-full py-4 w-40 bg-white font-semibold text-blue-500">Explore Products</div>
                    <div className="btn text-white bg-transparent rounded-full py-4 w-40 font-semibold">View Pricing</div>
                </div>
                <div className='text-center'>
                    <p className='text-white/60'>14-day free trial • No credit card required • Cancel anytime</p>
                </div>
           </div>
        </div>
    );
};

export default OptionalSection;