import React, { use } from 'react';
import Product from './Product/Product';

const MainSection = ({ cardPromise }) => {
    const products = use(cardPromise);
    return (
        <div className='w-11/12 mx-auto mb-20'>
            <div className='flex flex-col justify-center items-center md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-5'>
                {
                    products.map(product => <Product product={product} key={product.id}></Product>)
                }
            </div>
        </div>
    );
};

export default MainSection;