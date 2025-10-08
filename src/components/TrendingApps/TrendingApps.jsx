import downLoad from '../../assets/icon-downloads.png';
import star from '../../assets/icon-ratings.png';
import './TrandingApps.css'
const TrendingApps = ({allData}) => {

    // const {image, title, ratingAvg, downloads} = data;

    return (
        <div>
            <div className='py-10'>
                <h3 className='text-center text-5xl font-bold capitalize pb-4'>Trending Apps</h3>
                <p className='text-center text-[#627382] text-[20px] pb-10'>Explore All Trending Apps on the Market developed by us</p>
                <div className='max-w-[1140px] mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6'>

                        {
                            allData.map(data => 
                                <div className='bg-white p-4 rounded-lg cursor-pointer tapps'>
                                    <div><img className='object-cover rounded-lg lg:w-[316px] lg:h-[316px] ' src={data.image} alt="" /></div>
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
        </div>
    );
};

export default TrendingApps;


