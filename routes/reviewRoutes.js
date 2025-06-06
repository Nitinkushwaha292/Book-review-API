const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { updateReview, deleteReview } = require("../controller/reviewcontroller");
router.put("/:id", auth, updateReview);
router.delete("/:id", auth, deleteReview);
module.exports = router;