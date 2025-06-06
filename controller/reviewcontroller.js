const Review = require("../Models/review");
exports.addReview = async (req, res) => {
  const exists = await Review.findOne({ book: req.params.id, user: req.user._id });
  if (exists) return res.status(400).json({ message: "Already reviewed" });
  const review = await Review.create({ ...req.body, user: req.user._id, book: req.params.id });
  res.status(201).json(review);
};
exports.updateReview = async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (!review || !review.user.equals(req.user._id)) return res.status(403).json({ message: "Not allowed" });
  Object.assign(review, req.body);
  await review.save();
  res.json(review);
};
exports.deleteReview = async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (!review || !review.user.equals(req.user._id)) return res.status(403).json({ message: "Not allowed" });
  await review.deleteOne();
  res.json({ message: "Deleted" });
};