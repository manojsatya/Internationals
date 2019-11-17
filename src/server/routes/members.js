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

module.exports = router;
