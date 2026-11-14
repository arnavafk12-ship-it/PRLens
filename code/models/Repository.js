
import mongoose from "mongoose";

const repositorySchema = new mongoose.Schema(
  {
    githubId: {
      type: Number,
      required: true,
    },

    installation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "GitHubInstallation",
      required: true,
      index: true,
    },

    owner: {
      type: String,
      required: true,
      trim: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: null,
    },

    defaultBranch: {
      type: String,
      default: "main",
    },

    private: {
      type: Boolean,
      default: false,
    },

    htmlUrl: {
      type: String,
      required: true,
    },

    language: {
      type: String,
      default: null,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    lastSyncedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

repositorySchema.index(
  { githubId: 1, installation: 1 },
  { unique: true }
);

const Repository =
  mongoose.models.Repository ||
  mongoose.model("Repository", repositorySchema);

export default Repository;
