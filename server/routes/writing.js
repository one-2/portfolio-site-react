import express from "express";
import { writingDb } from "../db/connection.js";

const router = express.Router();

// Helper functions
// Helper function to validate collection names
function validCollectionName(collectionName) {
  return collectionName === "blogs" || collectionName === "essays";
}


const buildCollectionNotFoundError = (res) => res.status(404).send("Collection not found");

// Helper function to get a list of documents from a collection
async function getDocuments(collectionName) {
  let collection = writingDb.collection(collectionName);
  return await collection.find({}).toArray();
}

// Helper function to create a new document in a collection
async function createDocument(collectionName, document) {
  let collection = writingDb.collection(collectionName);
  return await collection.insertOne(document);
}

// Routes for all collections
router.get("/:collection", async (req, res) => {
  let collectionName = req.params.collection;
  // Ensure that only valid collection names are used
  if (!(validCollectionName(collectionName))) {
    return buildCollectionNotFoundError(res);
  }
  const documents = await getDocuments(collectionName);
  res.send(documents).status(200);
});

router.post("/:collection", async (req, res) => {
  let collectionName = req.params.collection;
  // Ensure that only valid collection names are used
  if (!(validCollectionName(collectionName))) {
    return buildCollectionNotFoundError(res);
  }

  try {
    let newDocument = {
      name: req.body.name,
      position: req.body.position,
      level: req.body.level,
    };
    let result = await createDocument(collectionName, newDocument);
    res.send(result).status(204);
  } catch (err) {
    console.error(err);
    res.status(500).send(`Error adding to ${collectionName} collection.`);
  }
});

// Routes for specific collections:
// Routes for "blogs" collection
// Routes for "essays" collection

export default router;
