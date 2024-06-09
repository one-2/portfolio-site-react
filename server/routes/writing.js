import express from "express";
import { writingDb } from "../db/connection.js";
import { validateWriting } from "../validators/writingContentValidator.js";

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
  // Check collection name validity
  const collectionName = req.params.collection;
  if (!validCollectionName(collectionName)) {
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

router.post("/:collection", validateWriting, async (req, res) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Return a 400 status with the validation errors
    return res.status(400).json({ errors: errors.array() });
  }

  // Check collection name validity
  const collectionName = req.params.collection;
  if (!validCollectionName(collectionName)) {
    return buildCollectionNotFoundError(res);
  }

  try {
    let result = await createDocument(collectionName, req.body);
    res.send(result).status(204);
  } catch (err) {
    console.error(err);
    res.status(500).send(`Error adding to ${collectionName} collection.`);
  }
});

router.delete("/:collection", async (req, res) => {
  // Check collection name validity
  const collectionName = req.params.collection;
  if (!validCollectionName(collectionName)) {
    return buildCollectionNotFoundError(res);
  }

  try {
    // Delete all documents in the "blogs" collection
    const collection = writingDb.collection(collectionName);
    await collection.deleteMany({});
    res.status(204).send("All records deleted successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting records");
  }
});

export default router;
