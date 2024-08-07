// /**
//  * Express router for handling user-related routes.
//  * @module userRouter
//  */

// import express from "express";
// import { userDb } from "../db/connection.js";
// import { validateContactForm, validateMailingListSignup } from "../validators/userContentValidator.js";
// import { validationResult } from "express-validator";

// const router = express.Router();

// // Helper functions

// /**
//  * Helper function to create a new document in a collection.
//  * @async
//  * @function createDocument
//  * @param {string} collectionName - The name of the collection.
//  * @param {object} document - The document to be inserted.
//  * @returns {Promise<object>} - The result of the document insertion.
//  */
// async function createDocument(collectionName, document) {
//   let collection = userDb.collection(collectionName);
//   return await collection.insertOne(document);
// }

// /**
//  * Retrieves a collection from the user database.
//  *
//  * @async
//  * @function getCollection
//  * @param {string} collectionName - The name of the collection to retrieve.
//  * @returns {object} The retrieved collection or validation errors.
//  */
// router.get("/:collection", async (req, res) => {
//   try {
//     const collectionName = req.params.collection;
//     const collection = userDb.collection(collectionName);
//     const documents = await collection.find().toArray();
//     if (documents.length === 0) {
//       return res.status(404).json({ error: "Collection is empty" });
//     } else {
//       res.json(documents);
//     }
//   } catch (err) {
//     console.error(err);
//     return res.status(500).send("Error retrieving collection");
//   }
// });

// // Messages collection

// /**
//  * Route for handling contact form submissions.
//  * @name POST /messages
//  * @function
//  * @param {function} validateContactForm - Middleware function to validate the contact form data.
//  * @param {object} req - Express request object.
//  * @param {object} res - Express response object.
//  * @returns {object} - The result of the document insertion or validation errors.
//  */
// router.post("/messages", validateContactForm, async (req, res) => {
//   // Check for validation errors
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     console.log('errors: ', errors.array());
//     return res.status(400).json({ errors: errors.array() });
//   }

//   try {
//     let newDocument = {
//       ...req.body,
//       date: new Date(), // MongoDB BSON Date object set to the current Unix time.
//     };
//     let response = await createDocument("messages", newDocument);
//     return res.send(response).status(204);
//   } catch (err) {
//     console.error(err);
//     return res.status(500).send("Error adding message");
//   }
// });

// // Mailing list collection

// /**
//  * Route for handling mailing list signups.
//  * @name POST /mailingList
//  * @function
//  * @param {function} validateMailingListSignup - Middleware function to validate the mailing list signup data.
//  * @param {object} req - Express request object.
//  * @param {object} res - Express response object.
//  * @returns {object} - The result of the document insertion or validation errors.
//  */
// router.post("/mailingList", validateMailingListSignup, async (req, res) => {
//   // Check for validation errors
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     // Return a 400 status with the validation errors
//     return res.status(400).json({ errors: errors.array() });
//   }

//   try {
//     let newDocument = {
//       email: req.body.email,
//       date: new Date(),
//     };
//     let result = await createDocument("mailingList", newDocument);
//     return res.send(result).status(204);
//   } catch (err) {
//     console.error(err);
//     return res.status(500).send("Error adding message");
//   }
// });

// export default router;
