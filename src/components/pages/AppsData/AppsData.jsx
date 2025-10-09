import React, { use } from 'react';
import downLoad from '../../../assets/icon-downloads.png';
import star from '../../../assets/icon-ratings.png';
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router';
const AppsData = ({appData}) => {

    const appsData = use(appData);

    const navigate  = useNavigate();

    const handleNavigate = (id) => {
        navigate(`/apps/appsdetails/${id}`);
    }
    

    return (
        <div>
            <div className='max-w-7xl mx-auto py-20'>
                <div className='text-center pb-[46px]'>
                    <h3 className='text-[#001931] text-5xl font-bold py-2'>Our All Applications</h3>
                    <p className='text-[#627382] text-[20px]'>Explore All Apps on the Market developed by us. We code for Millions</p> 
                </div>

                <div className='flex justify-between items-center px-6 mb-10'>
                    <h3 className='text-[#001931] text-2xl font-semibold'>({appsData.length}) Apps Found</h3>
                    <div className='p-4 border border-[#D2D2D2] rounded-lg flex gap-2 items-center lg:w-[300px]'><CiSearch /> <input className='bg-transparent outline-none' type="text" name="" placeholder='Search Apps' /></div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6'>
                
                {
                    appsData.map((data, index) => 
                        <div onClick={() => handleNavigate(data.id)} key={index} className='bg-white p-4 rounded-lg cursor-pointer tapps'>
                            <div><img className='object-cover rounded-lg lg:w-[316px] lg:h-[316px]' src={data.image} alt="" /></div>
                            <h3 className='text-[#001931] text-[20px] py-4'>{data.title}</h3>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center gap-2 bg-[#F1F5E8] p-2 rounded-lg'>
                                    <img className='w-4 h-4' src={downLoad} alt="" />
                                    <h3 className='text-[#00D390] text-base'>{data.downloads}</h3>
                                </div>
                                <div className='flex items-center gap-4 bg-[#FFF0E1] p-2 rounded-lg'>
                                    <img className='w-4 h-4' src={star} alt="" />
                                    <h3 className='text-[#F81] text-base'>{data.ratingAvg}</h3>
                                </div>
                            </div>
                        </div>
                    )
                }
                
            </div>
            </div>
        </div>
    );
};

export default AppsData;