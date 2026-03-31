import React, { use } from 'react';
import Product from './Product/Product';

const MainSection = ({ cardPromise }) => {
    const products = use(cardPromise);
    return (
        <div className='w-11/12 mx-auto mb-20'>
            <div className='mb-10 text-center space-y-4'>
                <h2 className='font-extrabold text-5xl text-[#101727]'>Premium Digital Tools</h2>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                <div className="tabs tabs-box justify-center items-center bg-transparent">
                    <input type="radio" name="my_tabs_1" className="tab w-40 rounded-full font-bold checked:bg-blue-500 checked:text-white" aria-label="Products" defaultChecked />
                    <input type="radio" name="my_tabs_1" className="tab w-40 rounded-full font-bold checked:bg-blue-500 checked:text-white" aria-label="Cart (2)"/>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    products.map(product => <Product product={product} key={product.id}></Product>)
                }
            </div>
        </div>
    );
};

export default MainSection;