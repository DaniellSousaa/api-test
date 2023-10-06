import { MongoClient } from 'mongodb';
import { config } from 'dotenv';

config();

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export async function connectToDB() {
  try {
    await client.connect();
    const db = client.db(process.env.DB_NAME);
    return { db, client };
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

