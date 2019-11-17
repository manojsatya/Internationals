const router = require("express").Router();
const Member = require("../models/Member");

router.post("/", (req, res) => {
  Member.create(req.body)
    .then(member => res.json(member))
    .catch(err => res.json(err));
});

router.get("/", (req, res) => {
  Member.find()
    .then(members => res.json(members))
    .catch(err => res.json(err));
});

router.get("/:id", (req, res) => {
  Member.find({ _id: req.params.id })
    .then(member => res.json(member))
    .catch(err => res.json(err));
});

router.delete("/:id", async (req, res) => {
  Member.findByIdAndDelete(req.params.id)
    .then(member => res.json(member))
    .catch(err => res.json(err));
  // const members = await Member.find();
  // const removeIndex = members.filter(member => member._id === req.params.id);

  // console.log(removeIndex);
});

router.get("/:id/friends", (req, res) => {
  Member.findById(req.params.id)
    .then(member => {
      const friends = member.friends;
      res.json(friends);
    })
    .catch(err => res.json(err));
});

module.exports = router;
