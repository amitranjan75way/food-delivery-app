import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    restaurentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    },
    deliveryStaffId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DeliveryStaff",
    },
    items: [
      {
        menuId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Menu",
          required: true,
        },
        quantity: { type: Number, required: true },
      },
    ],
    totalAmount: { 
      type: Number, 
      required: true 
    },
    status: {
      type: String,
      enum: ["placed", "accepted", "prepared", "dispatched", "delivered"],
      default: "placed",
    },
    deliveryAddress: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);