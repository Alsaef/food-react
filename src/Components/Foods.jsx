import React, { use } from 'react';

const Foods = ({foodDataFetch}) => {
    const foods=use(foodDataFetch)
    console.log(foods);
    return (
        <div className='mt-8'>
            <h2 className='text-center text-4xl font-semibold'>Our Foods Menu</h2>
             <div className='grid lg:grid-cols-3 grid-cols-1 gap-3'>
                {
                    foods.map(food=>
                    <div className="card bg-base-100  shadow-sm px-3 mt-6">
                        <figure>
                          <img 
                          className='h-[300px] w-full'
                            src={food.image}
                            alt="" />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">{food.name}</h2>
                          <p className='text-2xl'>$ {food.price}</p>
                          <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                          </div>
                        </div>
                      </div>)
                }
             </div>
        </div>
    );
};

export default Foods;