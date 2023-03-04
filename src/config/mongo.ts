import "dotenv/config";
import { connect } from "mongoose";

async function dbConnect(): Promise<void> {
    const DB_URI = <string>process.env.DB_URI; //La variable URI se encuentra en el .env y es la dirección de mongoDB
    await connect(DB_URI);
}

export default dbConnect;