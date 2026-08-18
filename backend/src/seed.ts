import "./config/env";
import linkData from "./data/linkData";
import connectDB from "./config/db";
import Link from "./models/Link";
import mongoose from "mongoose";

const seedData = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await connectDB();

    console.log("Deleting old data...");
    await Link.deleteMany({ email: "ngocthangn1994@gmail.com" });

    console.log("Creating new data...");
    await Link.create(linkData);

    console.log(`${linkData.length} links imported successfully`);

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.log("Seed failed:", error);

    await mongoose.connection.close();
    process.exit(1);
  }
};

seedData();
