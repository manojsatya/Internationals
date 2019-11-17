const express = require("express");
const cors = require("cors");
const server = express();

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/internationalsDB", {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(console.log("MongoDB connected successfully"))
  .catch(err => console.log(err));

server.listen(3333, () => console.log("Server is ready on port 3333"));
server.use(express.json({ extended: false }));
server.use(cors());
server.set("json spaces", 2);

server.use("/members", require("./routes/members"));
