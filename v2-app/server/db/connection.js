// Code from: (https://www.mongodb.com/resources/languages/mern-stack-tutorial)

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

// Connect to the primary and secondary databases
const userDbClient = await connectToDatabase(userDbUri);
const writingDbClient = await connectToDatabase(writingDbUri);

// Now you can use the clients to interact with their respective databases
const userDb = userDbClient.db(`${userDbName}`);
const writingDb = writingDbClient.db(`${writingDbName}`);

// Close connections when your application shuts down
process.on("SIGINT", () => {
  userDbClient.close();
  writingDbClient.close();
  console.log("Database connections closed.");
  process.exit(0);
});

export { userDb, writingDb };
