const router = require("express").Router();
const Member = require("../models/Member");

// @route POST /members
// @desc Create a new member/ international
// @access public
router.post("/", (req, res) => {
  Member.create(req.body)
    .then(member => res.json(member))
    .catch(err => res.json(err));
});

// @route GET /members
// @desc Get all members
// @access public
router.get("/", (req, res) => {
  Member.find()
    .then(members => res.json(members))
    .catch(err => res.json(err));
});

// @route GET /members/:id
// @desc Get a member by ID
// @access public
router.get("/:id", (req, res) => {
  Member.find({ _id: req.params.id })
    .then(member => res.json(member))
    .catch(err => res.json(err));
});

// @route DELETE /members/:id
// @desc Delete a member by ID
// @access public
router.delete("/:id", async (req, res) => {
  try {
    const members = await Member.find();
    members.forEach(member => {
      member.friends = member.friends.filter(
        friend => friend._id.toString() !== req.params.id
      );
      member.save();
    });
    await Member.findByIdAndDelete(req.params.id);
    const updatedList = await Member.find();
    res.json(updatedList);
  } catch (err) {
    res.json(err);
  }
});

// @route GET /members/:id/friends
// @desc Get friends of a member by ID
// @access public
router.get("/:id/friends", (req, res) => {
  Member.findById(req.params.id)
    .then(member => {
      const friends = member.friends;
      res.json(friends);
    })
    .catch(err => res.json(err));
});

// @route PATCH /members/:id/define
// @desc define friendships between members by ID
// @access public
router.patch("/:id/define", async (req, res) => {
  try {
    const member1 = await Member.findById(req.params.id);
    const member2 = await Member.findById(req.body._id);
    member1.friends.push(member2);
    member2.friends.push(member1);
    await member1.save();
    await member2.save();
    res.json(member1.friends);
  } catch (err) {
    res.json(err);
  }
});

// @route PATCH /members/:id/friends
// @desc Update friends of a member by ID
// @access public
router.patch("/:id/friends", async (req, res) => {
  try {
    const member1 = await Member.findById(req.params.id);
    const member2 = await Member.findById(req.body._id);
    member1.friends = member1.friends.filter(
      friend => friend._id.toString() !== req.body._id
    );
    member2.friends = member2.friends.filter(
      friend => friend._id.toString() !== req.params.id
    );
    await member1.save();
    await member2.save();
    res.json(member1.friends);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
