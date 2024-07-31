import { Box, colors, styled, Typography } from '@mui/material';
import { pieArcLabelClasses, PieChart, useDrawingArea } from '@mui/x-charts';
import { RoomContext } from '@web/contexts/RoomContext';
import { useContext } from 'react';

type GenderCategory = 'Putra' | 'Putri' | 'Campur';

const RoomProportionChart = () => {
    const roomContext = useContext(RoomContext);
    if (!roomContext) {
        return <div>Loading...</div>;
    }

    const { result } = roomContext;

    if (!result || !result.prices) {
        return <div>No data available</div>;
    }

    const colorMap: Record<GenderCategory, string> = {
        Putra: '#7CA7DA',
        Putri: '#EBC6D3',
        Campur: '#DDE3EE'
    };

    const data = result.gender_count_list?.map((item) => ({
        id: item.name,
        value: item.count,
        color: colorMap[item.name as GenderCategory]
    }));

    const StyledText = styled('text')(({ theme }) => ({
        fill: theme.palette.text.primary,
        textAnchor: 'middle',
        dominantBaseline: 'central',
        fontSize: 20,
    }));

    const size = {
        width: 500,
        height: 400,
    };

    function PieCenterLabel({ children }: { children: React.ReactNode }) {
        const { width, height, left, top } = useDrawingArea();
        return (
            <StyledText x={left + width / 2} y={top + height / 2} color={"#565151"} className="font-montserrat font-semibold">
                {children}
            </StyledText>
        );
    }

    return (
        <div className="border-2 border-white bg-white rounded-xl p-5" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div className='p-10'>
                <Typography fontSize={"h6"} style={{ color: 'lightslategrey' }}>
                    Room Type Proportion
                </Typography>
                <PieChart series={[{ data, innerRadius: 100 }]} {...size}>
                    <PieCenterLabel>{result.total_rooms}</PieCenterLabel>
                </PieChart>
            </div>
            <Box ml={2} mr={8}>
                {Object.keys(colorMap).map((key) => (
                    <Box key={key} display="flex" alignItems="center" mb={0.5}>
                        <Box width={12} height={12} bgcolor={colorMap[key as GenderCategory]} mr={1} />
                        <Typography>{key}</Typography>
                    </Box>
                ))}
            </Box>
        </div>
    );
};
export default RoomProportionChart;