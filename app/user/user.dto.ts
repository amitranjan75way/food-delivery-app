export interface IUser {
  id: string;
  name: string;
  email: string;
  role: "CUSTOMER" | "RESTAURANT" | "DELIVERY_STAFF";
  password: string;
  refreshToken: string;
}

export interface payload {
  id: string;
  name: string;
  email: string;
  role: "CUSTOMER" | "RESTAURANT" | "DELIVERY_STAFF";
}
