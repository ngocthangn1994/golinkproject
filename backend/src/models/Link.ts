import mongoose from "mongoose";

interface ILink {
  id: mongoose.Types.ObjectId;
  shortUrl: string;
  longUrl: string;
}

const linkSchema = new mongoose.Schema<ILink>(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    shortUrl: {
      type: String,
      required: [true, "shortUrl is required."],
      trim: true,
      lowercase: true,
      unique: true,
    },

    longUrl: {
      type: String,
      required: [true, "longUrl is required."],
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const Link = mongoose.model<ILink>("Link", linkSchema);

export default Link;
