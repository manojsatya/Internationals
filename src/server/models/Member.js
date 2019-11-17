const mongoose = require("mongoose");

const friend = mongoose.Schema({
  id_: {
    type: String
  },
  name: {
    type: String
  },
  country: {
    type: String
  }
});

const Member = mongoose.model("Member", {
  name: {
    type: String
  },
  country: {
    type: String
  },
  friends: [friend]
});

module.exports = Member;
