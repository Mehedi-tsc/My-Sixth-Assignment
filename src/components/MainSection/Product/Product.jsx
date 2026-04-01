import React, { useState } from 'react';
import { IoCheckmark } from 'react-icons/io5';
import { toast } from 'react-toastify';

const Product = ({product, cartProducts, setCartProducts}) => {
    const [buyStatus, setBuyStatus]=useState(false);
    const handleClickedBuyNowBtn =()=>{
        setBuyStatus(true);
        setCartProducts([...cartProducts, product]);
        toast.success("Added to cart successfuly")
    }
    
    
    return (
        <div>
            <div className="card rounded-2xl bg-base-100 shadow-sm">
                <div className="card-body">
                    <div className='flex justify-end'>
                        <span className="badge badge-xs badge-warning">{product.tagType.toUpperCase()}</span>
                    </div>
                    <div className='p-4 rounded-full border border-gray-100 w-fit'>
                        <img src={product.icon} alt="" />
                    </div>
                    <div className="space-y-3">
                        <h2 className="text-2xl font-bold">{product.name}</h2>
                        <p className='text-[#627382]'>{product.description}</p>
                        <span className="text-xl">${product.price}<span className='text-[#627382]'>/{product.period}</span></span>
                    </div>
                
                    <ul className="mt-6 flex flex-col gap-3 text-xs text-[#627382]">
                       {
                        product.features.map((li,index)=> <li className='flex gap-2 items-center' key={index}><IoCheckmark/> {li}</li>)
                       }
                    </ul>
                    <div className="mt-6">
                        <button onClick={handleClickedBuyNowBtn} className="btn btn-primary w-full rounded-full font-bold">{buyStatus?'Added to cart':'Buy Now'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;