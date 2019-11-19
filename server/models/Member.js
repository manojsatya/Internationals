const mongoose = require("mongoose");

//friend schema is used to add to friend's list of any member.
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

//Member model is defined to save datatype saved in Database
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
