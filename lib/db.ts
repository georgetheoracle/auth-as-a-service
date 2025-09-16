import { config } from "dotenv";

// Explicitly load .env.local
config({ path: ".env.local" });
import mongoose from "mongoose";

const cached = (global as any).mongoose || { conn: null, promise: null }
const connectToDatabase = async (
    MONGODB_URI = process.env.MONGODB_URI
) => {
    if (cached.conn) return cached.conn

    if (!MONGODB_URI) throw new Error('MONGODB_URI is missing')

    cached.promise = cached.promise || mongoose.connect(MONGODB_URI)

    cached.conn = await cached.promise

    return cached.conn
}

export default connectToDatabase;