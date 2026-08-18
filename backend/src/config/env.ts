import dotenv from "dotenv";

dotenv.config();

const env = {
  PORT: process.env.PORT || 3500,
  MONGODB_URI:
    process.env.MONGODB_URI ||
    "mongodb+srv://ngocthang18:Michealnguyen18@cluster0.6wmtfry.mongodb.net/",
  CLIENT_URL: process.env.CLIENT_URL || "http://localhost:5173/",
};

export default env;
