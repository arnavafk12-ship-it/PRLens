
import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    pullRequest: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PullRequest",
      required: true,
      index: true,
    },

    status: {
      type: String,
      enum: ["pending", "processing", "completed", "failed"],
      default: "pending",
    },

    scores: {
      quality: { type: Number, min: 0, max: 100, default: 0 },
      security: { type: Number, min: 0, max: 100, default: 0 },
      maintainability: { type: Number, min: 0, max: 100, default: 0 },
      performance: { type: Number, min: 0, max: 100, default: 0 },
      bestPractices: { type: Number, min: 0, max: 100, default: 0 },
      overall: { type: Number, min: 0, max: 100, default: 0 },
    },

    summary: {
      type: String,
      default: "",
    },

    analyzedFiles: {
      type: Number,
      default: 0,
    },

    additions: {
      type: Number,
      default: 0,
    },

    deletions: {
      type: Number,
      default: 0,
    },

    completedAt: {
      type: Date,
      default: null,
    },

    error: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Review =
  mongoose.models.Review ||
  mongoose.model("Review", reviewSchema);

export default Review;
