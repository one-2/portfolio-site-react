// Code from (https://www.mongodb.com/resources/languages/mern-stack-tutorial)
// Runs the (Express) router as middleware between Node and MongoDB.

import express from "express";
import cors from "cors";
import user from "./routes/user.js";
import writing from "./routes/writing.js";

const PORT = 5050;
const app = express();

app.use(cors());
app.use(express.json());

// Define routes
app.use("/user", user);
app.use("/writing", writing)


// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
