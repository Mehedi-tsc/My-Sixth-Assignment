import React from 'react';
import user from '../../assets/user.png'
import step2 from '../../assets/package.png'
import step3 from '../../assets/rocket.png'

const StepSection = () => {
    return (
        <div className='bg-[#F9FAFC] py-30'>
            <div className='w-11/12 mx-auto'>
                <div className='space-y-4 text-center mb-10'>
                    <h2 className='text-5xl font-bold'>Get Started in 3 Steps</h2>
                    <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
                </div>
                <div className='flex flex-col justify-center items-center lg:grid lg:grid-cols-3 gap-3'>
                    <div className="card bg-base-100 w-96 shadow-sm">
                       <div className="card-body text-center">
                            <div className='flex justify-end'>
                                <div className='rounded-full bg-blue-500 p-2 w-fit'>
                                <p className='font-bold text-sm'>01</p>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center space-y-4'>
                                <div className='rounded-full bg-blue-100 p-4 w-fit'>
                                <img src={user} alt="" />
                                </div>
                                <h2 className="font-bold text-2xl">Create Account</h2>
                                <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-sm">
                       <div className="card-body text-center">
                            <div className='flex justify-end'>
                                <div className='rounded-full bg-blue-500 p-2 w-fit'>
                                <p className='font-bold text-sm'>02</p>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center space-y-4'>
                                <div className='rounded-full bg-blue-100 p-4 w-fit'>
                                <img src={step2} alt="" />
                                </div>
                                <h2 className="font-bold text-2xl">Choose Products</h2>
                                <p className='text-[#627382]'>Browse our catalog and select the tools <br /> that fit your needs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <div className="card-body text-center">
                            <div className='flex justify-end'>
                                <div className='rounded-full bg-blue-500 p-2 w-fit'>
                                <p className='font-bold text-sm'>03</p>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center space-y-4'>
                                <div className='rounded-full bg-blue-100 p-4 w-fit'>
                                <img src={step3} alt="" />
                                </div>
                                <h2 className="font-bold text-2xl">Start Creating</h2>
                                <p className='text-[#627382]'>Download and start using your premium <br /> tools immediately.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepSection;