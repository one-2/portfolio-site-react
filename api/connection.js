// Code from: (https://www.mongodb.com/resources/languages/mern-stack-tutorial)
// TODO Convert into a function for serverless config

import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI_KEY;

// Name the databases
const userDbName = "user";
const writingDbName = "writing";

// Create separate connections for each database
const userDbUri = `${uri}/${userDbName}`; // Construct the URI for the primary database
const writingDbUri = `${uri}/${writingDbName}`; // Construct the URI for the secondary database

const connectToDatabase = async (uri) => {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    // Connect to the server
    await client.connect();
    console.log(`Connected to ${uri}`);
    return client;
  } catch (err) {
    console.error(`Error connecting to ${uri}:`, err);
    throw err;
  }
};

// Create clients to interact with each collection
const userDbClient = await connectToDatabase(userDbUri);
const writingDbClient = await connectToDatabase(writingDbUri);

// Retrieve collections
const userDb = userDbClient.db(`${userDbName}`);
const writingDb = writingDbClient.db(`${writingDbName}`);

export { userDb, writingDb };
