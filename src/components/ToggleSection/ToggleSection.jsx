import React from 'react';

const ToggleSection = ({setActiveBtn, cartProducts}) => {
    return (
        <div>
             <div className='mb-10 text-center space-y-4'>
                <h2 className='font-extrabold text-5xl text-[#101727]'>Premium Digital Tools</h2>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                <div className="tabs tabs-box justify-center items-center bg-transparent">
                    <input onClick={()=>setActiveBtn('products')} type="radio" name="my_tabs_1" className="tab w-40 rounded-full font-bold checked:bg-blue-500 checked:text-white" aria-label="Products" defaultChecked />
                    <input onClick={()=>setActiveBtn('carts')} type="radio" name="my_tabs_1" className="tab w-40 rounded-full font-bold checked:bg-blue-500 checked:text-white" aria-label={`Cart (${cartProducts.length})`}/>
                </div>
            </div>
        </div>
    );
};

export default ToggleSection;