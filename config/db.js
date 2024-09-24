import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  const password = process.env.MONGO_PASSWORD;
  try {
    const con = await mongoose.connect(
      `mongodb+srv://ShivamSumit:${password}@cluster0.xsig1zu.mongodb.net/VerifEye`
    );
    console.log(
      `Connected to Database Successfully ${con.connection.host}`.bgBlue.white
    );
  } catch (error) {
    console.log(`Error in database ${error}`.bgYellow.white);
  }
};
export default connectDB;
