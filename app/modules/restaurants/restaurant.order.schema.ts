import mongoose from "mongoose";

const restaurantOrderSchema = new mongoose.Schema({
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  order: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Menu",
      required: true,
    }
  ],
  totalAmount: { type: Number, required: true },
  status: {
    type: String,
    enum: ["PENDING", "CONFIRMED", "DELIVERED", "CANCELLED"],
    default: "PENDING",
  },
});

export default mongoose.model("RestaurantOrder", restaurantOrderSchema);