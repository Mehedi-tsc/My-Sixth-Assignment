import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#101727] pt-28 pb-8'>
            <div className='w-11/12 mx-auto'>
                <div className='flex text-center lg:text-left gap-3 flex-col lg:grid lg:grid-cols-5 lg:justify-items-center'>
                    <div className='space-y-4'>
                        <h2 className='text-3xl font-bold text-white'>DigiTools</h2>
                        <p className='text-white/50'>Premium digital tools for creators,<br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>

                    </div>
                    <div className='space-y-4'>
                        <h2 className='text-xl font-medium text-white'>Product</h2>
                        <p className='text-white/50'>Feature</p>
                        <p className='text-white/50'>Pricing</p>
                        <p className='text-white/50'>Templates</p>
                        <p className='text-white/50'>Integrations</p>
                    </div>
                    <div className='space-y-4'>
                        <h2 className='text-xl font-medium text-white'>Company</h2>
                        <p className='text-white/50'>About</p>
                        <p className='text-white/50'>Blog</p>
                        <p className='text-white/50'>Careers</p>
                        <p className='text-white/50'>Press</p>
                    </div>
                    <div className='space-y-4'>
                        <h2 className='text-xl font-medium text-white'>Resources</h2>
                        <p className='text-white/50'>Documentation</p>
                        <p className='text-white/50'>Help Center</p>
                        <p className='text-white/50'>Community</p>
                        <p className='text-white/50'>Contact</p>
                    </div>
                    <div className='space-y-4'>
                        <h2 className='text-xl font-medium text-white'>Social Links</h2>
                        <div>
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
                
                <div className='flex justify-between  text-white/40 border-t-2 border-gray-800 mt-6 pt-5'>
                    <div>© 2026 Digitools. All rights reserved.</div>
                    <div className='flex justify-between gap:1 lg:gap-4'>
                        <p>Privacy Policy</p>
                        <p>Terms of Service </p>
                        <p> Cookies</p>
                    </div>
                </div>
            </div>            
        </div>
    );
};

export default Footer;