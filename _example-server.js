const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const port = 3000;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Create a new MongoClient
const client = new MongoClient(url);

async function run() {
    try {
        // Connect the client to the server
        await client.connect();

        console.log("Connected correctly to server");

        // Specify the database
        const db = client.db(dbName);

        // Specify the collection
        const collection = db.collection('documents');

        // Handle HTTP requests
        app.get('/query', async (req, res) => {
            try {
                // Find a document
                const docs = await collection.find({mykey:1}).toArray();
                console.log("Found document:", docs);

                // Send the documents as a response
                res.send(docs);

            } catch (err) {
                console.log(err.stack);
                res.status(500).send('An error occurred');
            }
        });

        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });

    } catch (err) {
        console.log(err.stack);
    }
}

run().catch(console.dir);
