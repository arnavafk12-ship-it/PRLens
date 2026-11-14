
import mongoose from "mongoose";

const findingSchema = new mongoose.Schema(
  {
    review: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
      required: true,
      index: true,
    },

    pullRequest: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PullRequest",
      required: true,
      index: true,
    },

    category: {
      type: String,
      enum: [
        "quality",
        "security",
        "maintainability",
        "performance",
        "bestPractices",
      ],
      required: true,
    },

    severity: {
      type: String,
      enum: ["critical", "high", "medium", "low", "info"],
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    filePath: {
      type: String,
      required: true,
    },

    line: {
      type: Number,
      default: null,
    },

    suggestion: {
      type: String,
      default: null,
    },

    ruleId: {
      type: String,
      default: null,
    },

    isResolved: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Finding =
  mongoose.models.Finding ||
  mongoose.model("Finding", findingSchema);

export default Finding;
    