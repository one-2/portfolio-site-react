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

// Routes for the "messages" collection
router.get("/messages", async (_, res) => { // TEST: remove in prod
  try {
    let results = await getDocuments("messages");
    res.send(results).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving messages");
  }
});

router.post("/messages", async (req, res) => {
  try {
    let newDocument = {
      name: req.body.name,
      position: req.body.position,
      level: req.body.level,
    };
    let result = await createDocument("messages", newDocument);
    res.send(result).status(204);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding message");
  }
});

export default router;
