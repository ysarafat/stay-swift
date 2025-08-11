import { connect } from "mongoose";

export async function dbConnect() {
  try {
    const connection = await connect(process.env.MONGODB_URI);
    return connection;
  } catch (error) {
    console.error(error);
  }
}
