import { Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts';
import { RoomContext } from '@web/contexts/RoomContext';
import { useContext } from 'react';

const HighestRating = () => {
    const roomContext = useContext(RoomContext);
    if (!roomContext) {
        return <div>Loading...</div>;
    }

    const { result } = roomContext;

    if (!result || !result.prices) {
        return <div>No data available</div>;
    }

    const data = result.ratings_name?.map((item) => ({
        name: item.name,
        rating: item.rating,
    }));

    const xLabels = data?.map(item => item.name);

    const ratings = data.map(item => item.rating);
    const highestRating = ratings.length > 0 ? Math.max(...ratings) : 0;
    const barColors = ratings.map((val) => {
        if (val === highestRating) {
            return '#C7B198';
        } else {
            return '#DFD3C3';
        }
    });
    const roomWithHighestRating = data.find(item => item.rating === highestRating);
    const nameOfRoomWithHighestRating = roomWithHighestRating ? roomWithHighestRating.name : 'No room found';

    return (
        <div className="border-2 h-[270px] border-white bg-white rounded-xl p-5" style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
            <div>
                <Typography fontSize={"h6"} style={{ color: 'lightslategrey' }}>
                    Highest Rating
                </Typography>
                <Typography variant="h4" color={"#565151"} className="font-montserrat font-semibold">
                    {highestRating}
                </Typography>
                <Typography variant="h6" color={"#565151"} className="font-montserrat">
                    {nameOfRoomWithHighestRating}
                </Typography>
            </div>
            <BarChart
                width={300}
                height={200}
                series={[{
                    data: data?.map(item => item.rating),
                    id: 'ratings',
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
export default HighestRating;
