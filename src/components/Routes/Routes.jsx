import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Apps from '../pages/Apps/Apps';
import Installation from '../pages/Installation/Installation';
import TrandyAppDetails from '../pages/TrandyAppDetails/TrandyAppDetails';


const homeData = fetch('/trandingapps.json').then(res => res.json());

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: '/',
                element: <Suspense fallback={<div className='flex justify-center items-center py-20'><h1 className='text-center text-5xl'>L <span className="loading loading-spinner loading-5xl"></span> a d i n g. . .</h1></div>}>
                        <Home homeData={homeData}></Home>
                    </Suspense>,
            },
            {
                path: '/trandyappsdetails/:id',
                loader: async ({params}) => {
                    const res = await fetch(`/trandingapps.json`);
                    const data = await res.json();
                    return data.find(item => item.id === parseInt(params.id));
                },
                Component: TrandyAppDetails,
            },
            {
                path: '/apps',
                Component: Apps,
            },
            {
                path: '/installation',
                Component: Installation,
            },
        ]
    }
])