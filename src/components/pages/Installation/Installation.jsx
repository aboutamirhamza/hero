import { useEffect, useState } from 'react';
import downLoad from '../../../assets/icon-downloads.png';
import star from '../../../assets/icon-ratings.png'
import { toast, Bounce } from 'react-toastify';
const Installation = () => {

    const [installedApps, setInstalledApps] = useState([]);
    const [sortType, setSortType] = useState('');

    useEffect(() => {
    const apps = JSON.parse(localStorage.getItem('installedApps')) || [];
    setInstalledApps(apps);
  }, []);

  const handleUninstall = (id) => {
    const updatedApps = installedApps.filter(app => app.id !== id);
    localStorage.setItem('installedApps', JSON.stringify(updatedApps));
    setInstalledApps(updatedApps);

     toast.success('Uninstall App Successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
});
  };

const handleSort = (e) => {
    const value = e.target.value;
    setSortType(value);

    let sortedApps = [...installedApps];

    if (value === 'Low-High') {
      sortedApps.sort((a, b) => a.downloads - b.downloads);
    } else if (value === 'High-Low') {
      sortedApps.sort((a, b) => b.downloads - a.downloads);
    }

    setInstalledApps(sortedApps);
  };


    return (
        <div className='max-w-7xl mx-auto py-20'>
            <div className='text-center pb-[46px] px-6'>
                <h3 className='text-[#001931] text-5xl font-bold py-2'>Your Installed Apps</h3>
                <p className='text-[#627382] text-[20px]'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className='flex justify-between items-center px-6 mb-10'>
                <h3 className='text-[#001931] text-2xl font-semibold'>
                {installedApps.length} Apps Found
                </h3>
                <div>
                <select
                onChange={handleSort}
                value={sortType}
                defaultValue="Pick a browser" className="select lg:w-[300px] bg-[#F5F5F5]">
                    <option value=''>Sort By</option>
                    <option>Low-High</option>
                    <option>High-Low</option>
                </select>
                </div>
            </div>

            <div className="flex flex-col gap-4 px-6">
                {installedApps.length > 0 ? (
                installedApps.map(app => (
                    <div key={app.id} className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <div className="flex gap-8 items-center">
                        <div className="w-[100px] h-[100px] bg-[#D2D2D2] rounded-lg overflow-hidden">
                        <img src={app.image} alt={app.title} className='object-cover w-full h-full' />
                        </div>
                        <div className="flex flex-col gap-2">
                        <h3 className="text-[#001931] text-[20px] capitalize font-medium">{app.title}</h3>
                        <div className="flex gap-4">
                            <h3 className='flex gap-2 items-center text-[#00D390]'>
                            <img className='w-[16px] h-[16px]' src={downLoad} alt="" /> {app.downloads}
                            </h3>
                            <p className='flex gap-2 items-center text-[#F81]'>
                            <img className='w-[16px] h-[16px]' src={star} alt="" /> {app.ratingAvg}
                            </p>
                            <p className='text-[#627382] text-base'>{app.size} MB</p>
                        </div>
                        </div>
                    </div>
                    <div>
                        <button
                        onClick={() => handleUninstall(app.id)}
                        className="bg-[#00D390] px-5 py-3 text-white rounded-lg cursor-pointer transition-colors hover:bg-[#5bad93]"
                        >
                        Uninstall
                        </button>
                    </div>
                    </div>
                ))
                ) : (
                <p className='text-center text-2xl text-[#627382] py-20'>No Installed Apps</p>
                )}
            </div>
    </div>
    );
};

export default Installation;