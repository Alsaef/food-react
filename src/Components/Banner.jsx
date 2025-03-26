import React from 'react';

import banner from '../assets/images/banner.png';

const Banner = () => {
    return (
        <div>
            <img className='h-[500px] w-full' src={banner} alt="" />
        </div>
    );
};

export default Banner;