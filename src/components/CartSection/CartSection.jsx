import React from 'react';
import { toast } from 'react-toastify';

const CartSection = ({ cartProducts, setCartProducts }) => {
    const handleDelete = (cartProduct)=>{
        const newArray = cartProducts.filter(item=> item.id !==cartProduct.id)
        setCartProducts(newArray);
        toast.success(" Product remove successfuly")
    }
    const handleProceedToCheckout =()=>{
        setCartProducts([]);
        toast.success(" Purchased successfuly")
    }
    const totalPrice= cartProducts.reduce((sum, item)=> sum+item.price, 0)
    
    return (
        <div className='card shadow-sm w-11/12 mx-auto px-15'>
            <div className='card-body'>
                <h2 className='font-bold text-4xl'>Your Cart</h2>
                {
                    cartProducts.length===0?<h1 className='text-5xl text-center font-bold my-10 text-gray-400'>Your Cart is empty</h1>:  <div>
                    <div>
                        {
                            cartProducts.map(cartProduct=> <div key={cartProduct.id} className='border border-gray-100 p-4 my-5 flex flex-col gap-3 lg:flex-row lg:justify-between'>
                                <div className='flex gap-4 items-center'>
                                    <div className='p-4 rounded-full border border-gray-100 w-fit'>
                                    <img src={cartProduct.icon} alt="" />
                                     </div>
                                    <div className='space-y-1'>
                                    <h2 className='text-xl font-semibold'>{cartProduct.name}</h2>
                                    <p className='text-[#627382] font-medium'>${cartProduct.price}</p>
                                    </div>
                                </div>
                                <div>
                                    <button onClick={()=>handleDelete(cartProduct)} className='btn bg-transparent'>Remove</button>
                                </div>
                            

                            </div>)
                        }
                    </div>
                    <div className='space-y-4 w-full'>
                        <div className='flex justify-between'>
                            <div><p className='font-bold text-xl'>Total</p></div>
                            <div><p className='font-bold text-2xl'>${totalPrice}</p></div>
                        </div>
                        <button onClick={handleProceedToCheckout} className='btn btn-primary rounded-full w-full block mx-auto font-bold text-white/60'>Proceed to Checkout</button>
                    </div>

                </div>
                }
                           
               
            </div>
        </div>
    );
};

export default CartSection;