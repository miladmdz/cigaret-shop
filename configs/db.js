import mongoose from "mongoose";

const connectToDB = async () => {
  const dbAddress = process.env.MONGO_URL;
  try {
    if (mongoose.connections[0].readyState) {
      return true;
    } else {
      await mongoose.connect(dbAddress);
      console.log("Connect To DB Successfully");
    }
  } catch (err) {
    console.log("DB Connection has error->", err);
  }
};
export default connectToDB;
