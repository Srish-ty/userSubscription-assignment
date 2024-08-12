import { MongoClient } from "mongodb";

const config = {
  connectionString: process.env.MONGODB_CONNECTION_STRING,
};

let client;
let db;
let collection;

const connectToDatabase = async () => {
  if (!client) {
    try {
      client = await MongoClient.connect(config.connectionString, {
        useUnifiedTopology: true,
      });
      db = client.db("formData");
      collection = db.collection("users");
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      throw new Error("Database connection failed");
    }
  }
  return { client, db, collection };
};

export { connectToDatabase, client, collection };
