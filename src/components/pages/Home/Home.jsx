import React, { use } from 'react';
import Banner from '../../Banner/Banner';
import Trust from '../../Trust/Trust';
import TrendingApps from '../../TrendingApps/TrendingApps';


const Home = ({homeData}) => {
    
    const allData = use(homeData);

    return (
        <div>
            <Banner></Banner>
            <Trust></Trust>
            <TrendingApps allData={allData}></TrendingApps>
        </div>
    );
};

export default Home;