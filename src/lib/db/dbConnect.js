import mongoose from "mongoose";

export default async function connectDb() {
  let isConnected = false;
  if (isConnected) return "DB is connected Already";
  try {
    let connected = await mongoose.connect(
      "mongodb+srv://sanaullahsolangi817:Sanaullah123$@cluster0.gh2kw.mongodb.net/lmsnext"
    );
    if (connected.connection.readyState == 1) {
      isConnected = true;
      console.log(" DB Connected");
    }
  } catch (error) {
    console.log(error);
  }
}
