
import mongoose from "mongoose";

const pullRequestSchema = new mongoose.Schema(
  {
    githubId: {
      type: Number,
      required: true,
    },

    number: {
      type: Number,
      required: true,
    },

    repository: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Repository",
      required: true,
      index: true,
    },

    author: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    body: {
      type: String,
      default: null,
    },

    state: {
      type: String,
      enum: ["open", "closed"],
      default: "open",
    },

    baseBranch: {
      type: String,
      required: true,
    },

    headBranch: {
      type: String,
      required: true,
    },

    additions: {
      type: Number,
      default: 0,
    },

    deletions: {
      type: Number,
      default: 0,
    },

    changedFiles: {
      type: Number,
      default: 0,
    },

    htmlUrl: {
      type: String,
      required: true,
    },

    mergedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

pullRequestSchema.index(
  { repository: 1, githubId: 1 },
  { unique: true }
);

const PullRequest =
  mongoose.models.PullRequest ||
  mongoose.model("PullRequest", pullRequestSchema);

export default PullRequest;
