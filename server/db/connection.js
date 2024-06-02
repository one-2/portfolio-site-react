// Code from: (https://www.mongodb.com/resources/languages/mern-stack-tutorial)

import { MongoClient, ServerApiVersion } from "mongodb";

import { key } from "./secret.js";
const uri = key; // TODO: set up github secrets.

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  // Connect the client to the server
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });
  console.log(
   "Pinged your deployment. You successfully connected to MongoDB!"
  );
} catch(err) {
  console.error(err);
}

let db = client.db("employees");

export default db;
