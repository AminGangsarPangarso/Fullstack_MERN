import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const url ="mongodb+srv://amingangsar:amin21122104@fullstackdb.w5qefyb.mongodb.net/?appName=fullstackDB"

app.use(cors());
app.use(express.json());

const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connected to database");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};


connectDB();

const db = mongoose.connection;
db.on('error', (error) => console.error("Database error:", error));
db.once('open', () => console.log("Database connection established"));

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
