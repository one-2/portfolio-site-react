import express, { Request, Response } from "express";
import { userDb } from "./connection.js";
import { validateContactForm, validateMailingListSignup } from "./validators/userContentValidator.js";
import { validationResult } from "express-validator";

const router = express.Router();

// Helper function to create a new document in a collection
async function createDocument(collectionName: string, document: object): Promise<object> {
  const collection = userDb.collection(collectionName);
  return await collection.insertOne(document);
}

// Retrieves a collection from the user database
router.get("/:collection", async (req: Request, res: Response) => {
  try {
    const collectionName = req.params.collection;
    const collection = userDb.collection(collectionName);
    const documents = await collection.find().toArray();
    if (documents.length === 0) {
      return res.status(404).json({ error: "Collection is empty" });
    } else {
      res.json(documents);
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send("Error retrieving collection");
  }
});

// Messages collection

router.post("/messages", validateContactForm, async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log('errors: ', errors.array());
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const newDocument = {
      ...req.body,
      date: new Date(),
    };
    const response = await createDocument("messages", newDocument);
    return res.send(response).status(204);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Error adding message");
  }
});

// Mailing list collection

router.post("/mailingList", validateMailingListSignup, async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const newDocument = {
      email: req.body.email,
      date: new Date(),
    };
    const result = await createDocument("mailingList", newDocument);
    return res.send(result).status(204);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Error adding message");
  }
});

export default router;
