import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string, {
      family: 4, // Force IPv4 - fixes most Bun DNS issues
      retryWrites: true,
      w: "majority",
    });

    console.log("MongoDB Connected Successfully 🎉");
  } catch (error) {
    console.log("MongoDB Connection Failed ❌", error);
    process.exit(1);
  }
};
