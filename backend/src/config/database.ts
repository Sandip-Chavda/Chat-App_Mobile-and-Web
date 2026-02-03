import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI;

    if (!mongoUri) {
      throw new Error("MONGODB_URI environment variable is not defined.");
    }

    await mongoose.connect(
      mongoUri,
      //   ,{
      //   family: 4, // Force IPv4 - fixes most Bun DNS issues
      //   retryWrites: true,
      //   w: "majority",
      // }
    );

    console.log("MongoDB Connected Successfully 🎉");
  } catch (error) {
    console.log("MongoDB Connection Failed ❌", error);
    process.exit(1);
  }
};
