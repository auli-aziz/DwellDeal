"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const RoomSchema = new mongoose_1.default.Schema({
    url: { type: String, required: true },
    title: { type: String, required: true },
    images: [{ type: String, required: true }],
    location: { type: String, required: true },
    gender: { type: String },
    currentPrice: { type: Number, required: true },
    originalPrice: { type: Number, required: false },
    priceHistory: [
        {
            price: { type: Number, required: true },
            date: { type: Date, default: Date.now },
        },
    ],
    lowestPrice: { type: Number, required: true, default: 0 },
    highestPrice: { type: Number, required: true, default: 0 },
    averagePrice: { type: Number, required: true, default: 0 },
    discountRate: { type: Number, default: 0 },
    rating: { type: Number },
    isAvailable: { type: Boolean, required: true },
}, { timestamps: true });
RoomSchema.index({ url: 1, title: 1 }, { unique: true });
const Room = mongoose_1.default.models.Room || mongoose_1.default.model('Room', RoomSchema);
exports.default = Room;
//# sourceMappingURL=room.model.js.map