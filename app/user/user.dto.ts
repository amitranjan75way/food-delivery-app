export interface IUser {
  id: string;
  name: string;
  email: string;
  role: "CUSTOMER" | "RESTAURANT" | "DELIVERY_STAFF";
  password: string;
  refreshToken: string;
  additionalInfo: string | null;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface payload {
  id: string;
  name: string;
  email: string;
  role: "CUSTOMER" | "RESTAURANT" | "DELIVERY_STAFF";
}
