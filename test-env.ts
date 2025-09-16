// test-env.ts
import { config } from "dotenv";

// Explicitly load .env.local
config({ path: ".env.local" });

console.log('Loaded MONGODB_URI:', process.env.MONGODB_URI);