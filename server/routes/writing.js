/**
 * Express router for handling routes related to writing content.
 * @module routes/writing
 */

import express from "express";
import { writingDb } from "../db/connection.js";
import { validateWriting } from "../validators/writingContentValidator.js";

const router = express.Router();

/**
 * Helper function to validate collection names.
 * @param {string} collectionName - The name of the collection.
 * @returns {boolean} - Returns true if the collection name is valid, otherwise false.
 */
function validCollectionName(collectionName) {
  return collectionName === "blogs" || collectionName === "essays";
}

/**
 * Helper function to create a new document in a collection.
 * @param {string} collectionName - The name of the collection.
 * @param {object} document - The document to be created.
 * @returns {Promise<object>} - Returns a promise that resolves to the created document.
 */
async function createDocument(collectionName, document) {
  let collection = writingDb.collection(collectionName);
  return await collection.insertOne(document);
}

/**
 * Admin route to get all items in a collection.
 * @name GET/:collection
 * @function
 * @param {string} req.params.collection - The name of the collection.
 * @param {object} res - The response object.
 * @returns {object} - Returns the documents in the collection with status code 200 if successful, otherwise returns a 404 status code.
 */
router.get("/:collection", async (req, res) => {
  const collectionName = req.params.collection;
  if (!validCollectionName(collectionName)) {
    return res.status(404).send("Collection not found");
  }

  const collection = db.collection(collectionName);
  const documents = collection.find({}).toArray();
  if (documents.length === 0) {
    return res.status(404).send("Collection is empty");
  } else {
    res.send(documents).status(200);
  }
});

/**
 * Route to get an item in a collection by slug.
 * @name GET/:collection/:slug
 * @function
 * @param {string} req.params.collection - The name of the collection.
 * @param {string} req.params.slug - The slug of the document.
 * @param {object} res - The response object.
 * @returns {object} - Returns the document with status code 200 if found, otherwise returns a 404 status code.
 */
router.get("/:collection/:slug", async (req, res) => {
  const collectionName = req.params.collection;
  if (!validCollectionName(collectionName)) {
    return res.status(404).send("Collection not found");
  }

  const collection = db.collection(collectionName);
  const document = collection.findOne({ slug: req.params.slug });
  if (document == null) {
    return res.status(404).send("Document not found");
  } else {
    res.send(document).status(200);
  }
});

/**
 * Route to create a new document in a collection.
 * @name POST/:collection
 * @function
 * @param {string} req.params.collection - The name of the collection.
 * @param {object} req.body - The document to be created.
 * @param {object} res - The response object.
 * @returns {object} - Returns the created document with status code 204 if successful, otherwise returns a 400 status code with validation errors or a 404 status code if the collection is not found.
 */
router.post("/:collection", validateWriting, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const collectionName = req.params.collection;
  if (!validCollectionName(collectionName)) {
    return res.status(404).send("Collection not found");
  }
  try {
    let result = await createDocument(collectionName, req.body);
    res.send(result).status(204);
  } catch (err) {
    console.error(err);
    res.status(500).send(`Error adding to ${collectionName} collection.`);
  }
});

/**
 * Admin route to delete an item in a collection by slug.
 * @name DELETE/:collection/:slug
 * @function
 * @param {string} req.params.collection - The name of the collection.
 * @param {string} req.params.slug - The slug of the document.
 * @param {object} res - The response object.
 * @returns {object} - Returns the deleted document with status code 200 if found, otherwise returns a 404 status code.
 */
router.delete("/:collection/:slug", async (req, res) => {
  const collectionName = req.params.collection;
  if (!validCollectionName(collectionName)) {
    return res.status(404).send("Collection not found");
  }

  const collection = db.collection(collectionName);
  const document = await collection.deleteOne({ slug: req.params.slug });
  if (document == null) {
    return res.status(404).send("Document not found");
  } else {
    res.send(document).status(200);
  }
});

export default router;
