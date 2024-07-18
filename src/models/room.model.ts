import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
  url: { type: String, required: true, unique: true },
  images: [{ type: String, required: true }],
  title: { type: String, required: true },
  currentPrice: { type: Number, required: true },
  originalPrice: { type: Number, required: false },
  priceHistory: [
    { 
      price: { type: Number, required: true },
      date: { type: Date, default: Date.now }
    },
  ],
  lowestPrice: { type: Number },
  highestPrice: { type: Number },
  averagePrice: { type: Number },
  discountRate: { type: Number },
  isAvailable: { type: Boolean, required: true }
}, { timestamps: true });

const Room = mongoose.models.Room || mongoose.model('Room', roomSchema);

export default Room;