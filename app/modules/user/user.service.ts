
import { type IUser } from "./user.dto";
import UserSchema from "./user.schema";
import customerSchema from "../customers/customer.schema";
import restaurantSchema from "../restaurants/restaurent.schema";
import deliveryStaffSchema from "../deliveryStaff/delivery.schema";
import customerCartSchema from "../customers/customer.cart.schema";


export const createUser = async (data: IUser) => {
    const result = await UserSchema.create({ ...data });
    if (data.role === "RESTAURANT") {
        const restaurant = new restaurantSchema({
            userId: result._id,
            menu: [],
            address: null,
            orders: []
        });
        const res = await restaurant.save();
        result.additionalInfo = res._id as any;
        await result.save();
    } else if (data.role === "DELIVERY_STAFF") {
        const deliveryStaff = new deliveryStaffSchema({
            userId: result._id,
            address: null
        });
        const res = await deliveryStaff.save();
        result.additionalInfo = res._id as any;
        await result.save();
    } else {
        const cart = new customerCartSchema({
            userId: result._id,
            items: [],
            total: 0,
            restaurantId: null,
        });
        const newCart = await cart.save();

        const customer = new customerSchema({
            userId: result._id,
            addresses: null,
            orders: [],
            cart: newCart._id
        });
        const res = await customer.save();
        result.additionalInfo = res._id as any;
        await result.save();
    }
    return result;
};


// these are not used in the project
export const isUserExistByEamil = async (email: string) => {
    const user = await UserSchema.findOne({ email: email });
    if (user) {
        return true;
    } else {
        return false;
    }
}

export const findUserByEmail = async (email: string) => {
    const user = await UserSchema.findOne({ email: email });
    return user;
}

export const updateRefreshToken = async (id: string, refreshToken: string) => {
    const user = await UserSchema.findByIdAndUpdate(id,
        { refreshToken },
        { new: true }
    );
    return user;
}

export const getUserByEmail = async (email: string) => {
    const result = await UserSchema.findOne({ email }).lean();
    return result;
};

export const deleteRefreshToken = async (email: string) => {
    const user = await UserSchema.findOneAndUpdate({ email }, { refreshToken: '' });
    return user;
}
