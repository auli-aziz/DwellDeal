import { Typography } from '@mui/material';
import { BarChart, BarPlot, ChartContainer, ChartsXAxis, ResponsiveChartContainer } from '@mui/x-charts';
import { RoomContext } from '@web/contexts/RoomContext';
import { useContext } from 'react';

const LowestPriceChart = () => {
    const roomContext = useContext(RoomContext);
    if (!roomContext) {
        return <div>Loading...</div>;
    }

    const { result } = roomContext;

    if (!result || !result.prices) {
        return <div>No data available</div>;
    }

    const data = result.prices_name?.map((item) => ({
        name: item.name,
        price: item.price,
    }));

    const xLabels = data?.map(item => item.name);

    const prices = data.map(item => item.price);
    const lowestPrice = prices.length > 0 ? Math.min(...prices) : 0;
    const barColors = prices.map((val) => {
        if (val === lowestPrice) {
            return '#C7B198';
        } else {
            return '#DFD3C3';
        }
    });
    const roomWithLowestPrice = data.find(item => item.price === lowestPrice);
    const nameOfRoomWithLowestPrice = roomWithLowestPrice ? roomWithLowestPrice.name : 'No room found';

    return (
        <div className="border-2 border-white bg-white rounded-xl p-5" style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
            <div>
                <Typography fontSize={"h6"} style={{ color: 'lightslategrey' }}>
                    Lowest Price
                </Typography>
                <Typography variant="h4" color={"#565151"} className="font-montserrat font-semibold">
                    Rp{lowestPrice},00
                </Typography>
                <Typography variant="h6" color={"#565151"} className="font-montserrat">
                    {nameOfRoomWithLowestPrice}
                </Typography>
            </div>
            <BarChart
                width={300}
                height={200}
                series={[{
                    data: data?.map(item => item.price),
                    id: 'prices',
                    color: '#DFD3C3'
                }]}
                xAxis={[{
                    data: xLabels,
                    scaleType: 'band',
                    valueFormatter: (name, context) =>
                        context.location === 'tick'
                            ? `${name.slice(0, 0)}`
                            : `${name}`,
                    colorMap: {
                        type: "ordinal",
                        values: xLabels,
                        colors: barColors,
                    },
                }]}
            />
        </div>
    );
};
export default LowestPriceChart;
