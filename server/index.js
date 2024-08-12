import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { connectToDatabase } from "./models/connection.js";

const app = express();
const port = 5000;
var collection;

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
    const { collection } = await connectToDatabase();

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

// admin page

app.get("/asdf/admin", async (req, res) => {
  try {
    const { collection } = await connectToDatabase();
    const users = await collection.find({}).toArray();
    res.send(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Error fetching users");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  collection = connectToDatabase();
});
