//Importing Modules
const express = require("express");
const cors = require("cors");
const server = express();
const mongoose = require("mongoose");
const path = require("path");

//Defining global variables
const PORT = process.env.PORT || 3333;

//Connecting to Database
mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/internationalsDB",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true
    }
  )
  .then(console.log("MongoDB connected successfully"))
  .catch(err => console.log(err));

//Configuration
server.use(express.json({ extended: false }));
server.use(cors());
server.set("json spaces", 2);

//Defining routes
server.use("/members", require("./routes/members"));

if (process.env.NODE_ENV === "production") {
  server.use(express.static("build/"));
  server.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

server.listen(PORT, () => console.log("Server is ready on port 3333"));
