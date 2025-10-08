import React from 'react';
import Banner from '../../Banner/Banner';
import Trust from '../../Trust/Trust';
import TrendingApps from '../../TrendingApps/TrendingApps';
import { useLoaderData } from 'react-router';


const Home = () => {
    
    const allData = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Trust></Trust>
            <TrendingApps allData={allData}></TrendingApps>
        </div>
    );
};

export default Home;