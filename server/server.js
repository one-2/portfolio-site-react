// Code from (https://www.mongodb.com/resources/languages/mern-stack-tutorial)
// Runs the express server middleware

import express from "express";
import cors from "cors";
import records from "./routes/record.js";

const PORT = 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/record", records);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
