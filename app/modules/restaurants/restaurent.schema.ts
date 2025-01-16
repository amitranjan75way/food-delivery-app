import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address",
    },
    menu: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Menu",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Restaurant", RestaurantSchema);
