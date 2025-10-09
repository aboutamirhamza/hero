import { useLoaderData } from 'react-router';
import {
    Bar,
    BarChart,
    ResponsiveContainer,
    XAxis,
    YAxis
} from 'recharts';
const RatingsChart = () => {

    const trandyApp = useLoaderData();
    const {ratings} = trandyApp;

    return (
        <div>
            <div className='max-w-[1140px] mx-auto px-4'>
                <h3 className="text-2xl font-bold text-[#001931] mb-6">Ratings</h3>
                <div className="w-full h-[400px] p-6 rounded-lg">
                    <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                        data={ratings}
                        layout="vertical"
                    >
                        <XAxis
                        type="number"
                        tick={{ fill: '#001931', fontSize: 14 }}
                        domain={[0, 'dataMax + 100']}
                        />
                        <YAxis
                        type="category"
                        dataKey="name"
                        tick={{ fill: '#001931', fontSize: 16, fontWeight: 600 }}
                        reversed={true}
                        />
                        
                        <defs>
                        <linearGradient id="ratingGradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#F81" stopOpacity={0.9} />
                            <stop offset="100%" stopColor="#F81" stopOpacity={0.9} />
                        </linearGradient>
                        </defs>

                        <Bar
                        dataKey="count"
                        fill="url(#ratingGradient)"
                        barSize={32}
                        />
                    </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default RatingsChart;