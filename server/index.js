import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { connectToDatabase } from "./models/connection.js";

const app = express();
const port = 5000;
let collection;

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/form", (req, res) => {
  res.send("This is the form page:");
});

app.post("/form", async (req, res) => {
  const formData = req.body;

  try {
    const existingUser = await collection.findOne({ email: formData.email });

    if (existingUser) {
      res.status(400).send("Email already exists.");
    } else {
      await collection.insertOne(formData);
      res.send("Form submitted successfully!");
    }

    console.log(formData);
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).send("Error saving form data");
  }
});

app.get("/asdf/admin", async (req, res) => {
  try {
    const users = await collection.find({}).toArray();
    res.send(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Error fetching users");
  }
});

app.post("/asdf/admin", async (req, res) => {
  const { name, email } = req.body;

  try {
    const existingUser = await collection.findOne({ email });

    if (existingUser) {
      res.status(400).send("Email already exists.");
    } else {
      await collection.insertOne({ name, email });
      res.send("User added successfully!");
    }
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).send("Error adding user");
  }
});

app.put("/asdf/admin/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  try {
    const result = await collection.updateOne(
      { _id: new MongoClient.ObjectId(id) },
      { $set: { name, email } }
    );

    if (result.matchedCount === 0) {
      res.status(404).send("User not found.");
    } else {
      res.send("User updated successfully!");
    }
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).send("Error updating user");
  }
});

app.delete("/asdf/admin/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await collection.deleteOne({
      _id: new MongoClient.ObjectId(id),
    });

    if (result.deletedCount === 0) {
      res.status(404).send("User not found.");
    } else {
      res.send("User deleted successfully!");
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).send("Error deleting user");
  }
});

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);

  try {
    const dbConnection = await connectToDatabase();
    collection = dbConnection.collection;
    console.log("Connected to the database and collection is set.");
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
});
