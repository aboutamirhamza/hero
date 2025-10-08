import React from 'react';

const Trust = () => {
    return (
        <div>
            <div className='bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] py-20'>
                <div className='max-w-[1140px] mx-auto'>
                    <h3 className='text-center text-white text-5xl font-bold capitalize pb-10'>Trusted by Millions, Built for You</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        <div className='text-center'>
                            <p className='text-base capitalize text-white opacity-80'>Total Downloads</p>
                            <h3 className='text-[64px] font-bold py-4 text-white'>29.6M</h3>
                            <p className='text-base capitalize text-white opacity-80'>21% more than last month</p>
                        </div>
                        <div className='text-center'>
                            <p className='text-base capitalize text-white opacity-80'>Total Reviews</p>
                            <h3 className='text-[64px] font-bold py-4 text-white'>906K</h3>
                            <p className='text-base capitalize text-white opacity-80'>46% more than last month</p>
                        </div>
                        <div className='text-center'>
                            <p className='text-base capitalize text-white opacity-80'>Active Apps</p>
                            <h3 className='text-[64px] font-bold py-4 text-white'>132+</h3>
                            <p className='text-base capitalize text-white opacity-80'>31 more will Launch</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trust;