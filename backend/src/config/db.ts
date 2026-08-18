import mongoose from "mongoose";
import env from "./env";

const connectDB = async () => {
  try {
    await mongoose.connect(env.MONGODB_URI);
    console.log("Successfully connect to the database.");
  } catch (error) {
    console.error(
      `Something wrong when try to connect to the database. ${error}`,
    );
    process.exit(1);
  }
};

export default connectDB;
