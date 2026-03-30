import React from 'react';
import heroBadgeLogo from '../../assets/Herobadge.png'
import heroImg from '../../assets/banner.png'
import playPnj from '../../assets/Play.png'

const Hero = () => {
    return (
        <div className='my-20 lg:w-11/12 text-center lg:text-left lg:mx-auto flex flex-col-reverse justify-center items-center lg:flex-row lg:justify-between lg:items-center gap-5'>
            <div>
                <div className="badge badge-soft badge-primary font-medium rounded-full"><span><img src={heroBadgeLogo} alt="" /></span> New: AI-Powered Tools Available</div>
                <div className='text-4xl lg:text-7xl font-extrabold my-4'>
                    <h2>Supercharge Your</h2>
                    <h2>Digital Workflow</h2>
                </div>
                <div className='text-[#627382] text-lg'>
                    <p>Access premium AI tools, design assets, templates, and productivity <br />
                        software—all in one place. Start creating faster today.
                    </p>
                    <p>Explore Products</p>
                </div>
                <div className='mt-8 space-x-3'>
                    <div className="badge badge-primary font-bold rounded-full p-4">Explore Products</div>
                    <div className="badge badge-outline badge-primary font-bold rounded-full p-4"><span><img src={playPnj} alt="" /></span> Watch Demo</div>
                </div>
            </div>
            <div>
                <img src={heroImg} alt="" />
            </div>

        </div>
    );
};

export default Hero;