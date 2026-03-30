import React from 'react';

const State = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] mb-28'>
           <div className='text-center w-11/12 mx-auto p-14 flex flex-col lg:flex-row lg:justify-around items-center gap-5'>
           <div>
             <h2 className='text-white text-5xl font-extrabold'>50K+</h2>
             <p className='text-white/50 text-xl'>Active Users</p>
           </div>
           <div className='hidden lg:flex lg:w-0.5 lg:bg-gray-400 lg:h-15'>
                
           </div>
           <div>
             <h2 className='text-white text-5xl font-extrabold'>200+</h2>
             <p className='text-white/50 text-xl'>Premium Tools</p>
           </div>
           <div className='hidden lg:flex lg:w-0.5 lg:bg-gray-400 lg:h-15'>
                
           </div>
           <div>
             <h2 className='text-white text-5xl font-extrabold'>4.9</h2>
             <p className='text-white/50 text-xl'>Rating</p>
           </div>

           </div>
        </div>
    );
};

export default State;