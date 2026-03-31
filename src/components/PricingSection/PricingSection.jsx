import React from 'react';

const PricingSection = () => {
    return (
        <div className='w-11/12 mx-auto my-20'>
            <div className='space-y-4 m mb-10 text-center'>
                <h2 className='font-extrabold text-5xl'>Simple, Transparent Pricing</h2>
                <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='flex flex-col justify-between items-center lg:grid lg:grid-cols-3 gap-10'>
                <div className="card w-full  rounded-2xl bg-[#F2F2F2] shadow-lg h-120">
                    <div className="card-body space-y-4">
                    
                        <div className="space-y-1">
                            <h2 className="text-2xl font-bold">Starter</h2>
                            <p className='text-[#627382]'>Perfect for getting started</p>
                        </div>
                        <div>
                            <span className="text-3xl font-bold">$0</span> <span>/Month</span>
                        </div>
                        <ul className="flex flex-1 flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to 10 free tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Basic templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Community support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>1 project per month</span>
                            </li>
                            
                        </ul>
                        <div className="mt-6">
                            <button className="btn btn-primary w-full rounded-full">Get Started Free</button>
                        </div>
                    </div>
                </div>
                <div className="card w-full h-120 rounded-2xl bg-[#4F39F6] shadow-lg text-white">
                    <div className="card-body space-y-4 relative">
                        <div className='flex justify-center'>
                             <div className="badge bg-[#FEF3C6] text-[#BB4D00] absolute top-0 -translate-y-3">Most Popula</div>
                        </div>
                        <div className="space-y-1">
                            <h2 className="text-2xl font-bold">Pro</h2>
                            <p>Best for professionals</p>
                        </div>
                        <div>
                            <span className="text-3xl font-bold">$29</span> <span>/Month</span>
                        </div>
                        <ul className="flex flex-1 flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to all premium toolss</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Unlimited templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Priority support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Unlimited projects</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Cloud sync</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Advanced analytics</span>
                            </li>
                            
                        </ul>
                        <div className="mt-6">
                            <button className="btn bg-white text-blue-600 w-full rounded-full">Start Pro Trial</button>
                        </div>
                    </div>
                </div>
                <div className="card w-full h-120 rounded-2xl bg-[#F2F2F2] shadow-lg">
                    <div className="card-body space-y-4">
                    
                        <div className="space-y-1">
                            <h2 className="text-2xl font-bold">Enterprise</h2>
                            <p className='text-[#627382]'>For teams and businesses</p>
                        </div>
                        <div>
                            <span className="text-3xl font-bold">$99</span> <span>/Month</span>
                        </div>
                        <ul className="flex flex-1 flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Everything in Pro</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Team collaboration</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Custom integrations</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Dedicated support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>SLA guarantee</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Custom branding</span>
                            </li>
                            
                        </ul>
                        <div className="mt-6">
                            <button className="btn btn-primary w-full rounded-full">Contact Sales</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default PricingSection;