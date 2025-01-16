import express from "express";
import userRoutes from "./modules/user/user.route";
import restaurantRoutes from "./modules/restaurants/restaurant.route";
import customerRoutes from "./modules/customers/customer.route";

// routes
const router = express.Router();

router.use("/users", userRoutes);
router.use("/restaurant", restaurantRoutes);
router.use("/customer", customerRoutes);

export default router;