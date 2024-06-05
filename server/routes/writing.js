import express from "express";
import { writingDb } from "../db/connection.js";

const router = express.Router();

// Helper functions
// Helper function to validate collection names
function validCollectionName(collectionName) {
  return collectionName === "blogs" || collectionName === "essays";
}

const buildCollectionNotFoundError = (res) => res.status(404).send("Collection not found");

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
  // Attempt to retrieve the document requested
  const collection = db.collection(collectionName);
  const document = collection.findOne({ slug: req.params.slug }); // search by url slug
  // If the document is not found, return a 404 status code
  if (document == null) {
    return res.status(404).send("Document not found");
  } else {
    // Else return the document with status code 200
    res.send(document).status(200);
  }
});

router.post("/:collection", async (req, res) => {
  let collectionName = req.params.collection;
  // Ensure that only valid collection names are used
  if (!(validCollectionName(collectionName))) {
    return buildCollectionNotFoundError(res);
  }

  try {
    let newDocument = {
      // TODO fill with schema
    };
    let result = await createDocument(collectionName, newDocument);
    res.send(result).status(204);
  } catch (err) {
    console.error(err);
    res.status(500).send(`Error adding to ${collectionName} collection.`);
  }
});

export default router;
