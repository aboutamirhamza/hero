import React from 'react';
import { useLoaderData } from 'react-router';
import iconDownload from '../../../assets/icon-downloads.png';
import iconRating from '../../../assets/icon-ratings.png';
import iconReview from '../../../assets/icon-review.png';
import RatingsChart from '../../RatingsChart/RatingsChart';
const AppsDetails = () => {

    const appsDetails = useLoaderData();
    const {image, title, companyName, description, size, reviews, ratingAvg, downloads} = appsDetails;

    return (
        <div>
            <div className='max-w-7xl mx-auto py-20'>
                <div className='lg:flex gap-10 items-center px-10'>
                    <div className='bg-white rounded-lg p-4'><img className='object-cover' src={image} alt={title} /></div>
                    <div className='w-full p-4'>
                        <h3 className='text-[#001931] text-[32px] py-2 font-bold'>{title}</h3>
                        <p className='text-[#627382] text-[20px]'>Developed by <span className='text-[#632EE3] pb-6'>{companyName}</span></p>
                        <div className='border-t border-[#001931] my-4 w-full'></div>
                        <div className='md:flex gap-20 items-center py-4'>
                            <div className='flex flex-col gap-3'>
                                <div><img className='w-[40px] h-[40px]' src={iconDownload} alt="" /></div>
                                <p className='text-[#001931] text-base opacity-80'>Downloads</p>
                                <p className='text-[#001931] text-[40px] font-extrabold'>{downloads}</p>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <div><img className='w-[40px] h-[40px]' src={iconRating} alt="" /></div>
                                <p className='text-[#001931] text-base opacity-80'>Average Ratings</p>
                                <p className='text-[#001931] text-[40px] font-extrabold'>{ratingAvg}</p>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <div><img className='w-[40px] h-[40px]' src={iconReview} alt="" /></div>
                                <p className='text-[#001931] text-base opacity-80'>Total Reviews</p>
                                <p className='text-[#001931] text-[40px] font-extrabold'>{reviews}</p>
                            </div>
                        </div>
                        <button className='bg-[#00D390] px-5 py-3 text-white rounded-lg cursor-pointer transition-colors hover:bg-[#5bad93]'>Install Now ({size} MB)</button>
                        <div className='border-t border-[#001931] my-6 w-full'></div>
                    </div>
                </div>
                <RatingsChart></RatingsChart>
                <div className='py-10 px-4'>
                    <h3 className='text[#001931] text-[24px] font-semibold'>Description</h3>
                <p className='text-[#627382] text[20px]'>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default AppsDetails;