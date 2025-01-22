import "reflect-metadata";
import { AppDataSource } from "../../../ormconfig";

export const connectToDatabase = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Error during database connection:", error);
    process.exit(1);
  }
};
