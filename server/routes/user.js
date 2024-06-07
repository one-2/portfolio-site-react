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
    let newDocument = { // TODO: Add validation, this currently accepts anything
      ...req.body,
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
    let newDocument = { // TODO: Add validation, this currently accepts anything
      email: req.body.email,
      date: new Date(),
    };
    let result = await createDocument("mailingList", newDocument);
    res.send(result).status(204);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding message");
  }
});

// Delete route for both collections 
router.delete("/:collection", async (req, res) => {
  let collectionName = req.params.collection;

  try {
    let collection = userDb.collection(collectionName);
    await collection.deleteMany({});
    res.status(204).send(`All documents in ${collectionName} collection deleted.`);
  } catch (err) {
    console.error(err);
    res.status(500).send(`Error deleting all documents in ${collectionName} collection.`);
  }
});

export default router;
