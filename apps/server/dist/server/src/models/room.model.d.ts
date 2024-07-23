import mongoose from 'mongoose';
export interface RoomInterface extends mongoose.Document {
    url: string;
    title: string;
    images: string;
    location: string;
    gender: string;
    currentPrice: Number;
    originalPrice: Number;
    priceHistory: [
        {
            price: Number;
            date: Date;
        }
    ];
    lowestPrice: Number;
    highestPrice: Number;
    averagePrice: Number;
    discountRate: Number;
    rating: Number;
    isAvailable: Boolean;
}
declare const Room: mongoose.Model<any, {}, {}, {}, any, any>;
export default Room;
