import React from 'react';
import { Link } from 'react-router';
import googlePlay from '../../assets/googlePlay.png'
import appleApps from '../../assets/appleApps.png'
import heroBg from '../../assets/hero.png'
const Banner = () => {
    return (
        <div>
            <div className='max-w-[1140px] mx-auto'>
            <div className='text-center'>
                <h3 className='text-7xl font-bold capitalize pt-20 pb-4 lg:px-[232px]'>
                    We Build 
                    <span className='text-[72px] font-black leading-[84px] capitalize opacity-90 bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'> Productive </span> 
                    Apps
                </h3>
                <p className='px-10 text-[#627382] text-[20px] leading-[32px] lg:px-[111px]'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='mt-6 flex justify-center gap-6 items-center'>
                    <Link to='https://play.google.com/store/games?hl=en' target='_blank'>
                        <div className='flex items-center justify-center gap-4 p-4 w-fit border border-gray-300 rounded-lg cursor-pointer'>
                            <img src={googlePlay} alt="" />
                            <h3 className='text-[#001931] text-[20px] capitalize'>Google Play</h3>
                        </div>
                    </Link>
                    <Link to='https://www.apple.com/store' target='_blank'>
                        <div className='flex items-center justify-center gap-4 p-4 w-fit border border-gray-300 rounded-lg cursor-pointer'>
                            <img src={appleApps} alt="" />
                            <h3 className='text-[#001931] text-[20px] capitalize'>App Store</h3>
                        </div>
                    </Link>
                </div>
                <div className='mt-10 flex justify-center px-10'>
                    <img src={heroBg} alt="" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;