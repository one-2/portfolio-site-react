// Code from Vercel to Express tutorial (https://vercel.com/guides/using-express-with-vercel)
// Helped out by the implementation at (https://github.com/nhndev/node-mongodb-api/tree/master) - thanks!
require('dotenv').config();
const express = require("express");
import helmet from "helmet";
import cors from "cors";

// Server configuration
const app = express();

app.use(helmet()); // Adds secure HTTP headers
app.use(cors()); // TODO understand CORS
app.use(express.json());
app.use(express.static('public'));

// Routes
// Import routes
import user from "./user.js";
import writing from "./writing.js";

// Define routes
app.use("/user", user);
app.use("/writing", writing)

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server ready on port ${PORT}`));

module.exports = app;
