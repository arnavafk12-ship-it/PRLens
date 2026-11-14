
import mongoose from "mongoose";

const githubInstallationSchema = new mongoose.Schema(
  {
    installationId: {
      type: Number,
      required: true,
      unique: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    accountLogin: {
      type: String,
      required: true,
      trim: true,
    },

    accountType: {
      type: String,
      enum: ["User", "Organization"],
      required: true,
    },

    accountId: {
      type: Number,
      required: true,
    },

    suspendedAt: {
      type: Date,
      default: null,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    permissions: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

const GitHubInstallation =
  mongoose.models.GitHubInstallation ||
  mongoose.model("GitHubInstallation", githubInstallationSchema);

export default GitHubInstallation;
