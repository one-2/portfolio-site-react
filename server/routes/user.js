import express from "express";
import { userDb } from "../db/connection.js";

const router = express.Router();

// Helper functions
// Helper function to get a list of documents from a collection
async function getDocuments(collectionName) {
  let collection = userDb.collection(collectionName);
  return await collection.find({}).toArray();
}

// Helper function to create a new document in a collection
async function createDocument(collectionName, document) {
  let collection = userDb.collection(collectionName);
  return await collection.insertOne(document);
}

// Test routes TODO REMOVE IN PROD
router.get("/testMessages", async (_, res) => { // TEST: remove in prod
  try {
    let results = await getDocuments("messages");
    res.send(results).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving messages");
  }
});

// Routes for the "messages" collection
router.post("/messages", async (req, res) => {
  try {
    let newDocument = {
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
      date: new Date(), // Creates a MongoDB BSON Date object set to the current Unix time.
    };
    let result = await createDocument("messages", newDocument);
    res.send(result).status(204);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding message");
  }
});

// Routes for the "mailing list" collection
router.post("/mailingList", async (req, res) => {
  try {
    let newDocument = {
      email: req.body.email,
      date: new Date(),
    };
    let result = await createDocument("messages", newDocument);
    res.send(result).status(204);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding message");
  }
});

export default router;
