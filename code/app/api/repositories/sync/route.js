
import { NextResponse } from "next/server";

import { connectDB } from "../../../../lib/db.js";
import { getInstallationRepositories } from "../../../../services/github.service.js";

import GitHubInstallation from "../../../../models/GitHubInstallation.js";
import Repository from "../../../../models/Repository.js";

export async function POST() {
  try {
    await connectDB();

    const installationId = Number(
      process.env.GITHUB_INSTALLATION_ID
    );

    if (!installationId) {
      return NextResponse.json(
        { success: false, message: "Missing installation ID" },
        { status: 500 }
      );
    }

    const installation = await GitHubInstallation.findOne({
      installationId,
      isActive: true,
      suspendedAt: null,
    });

    if (!installation) {
      return NextResponse.json(
        {
          success: false,
          message: "Installation not registered in database",
        },
        { status: 404 }
      );
    }

    const githubRepositories =
      await getInstallationRepositories(installationId);

    const syncedAt = new Date();

    const operations = githubRepositories.map((repo) => ({
      updateOne: {
        filter: {
          githubId: repo.id,
          installation: installation._id,
        },
        update: {
          $set: {
            owner: repo.owner.login,
            name: repo.name,
            fullName: repo.full_name,
            description: repo.description ?? null,
            defaultBranch: repo.default_branch,
            private: repo.private,
            htmlUrl: repo.html_url,
            language: repo.language ?? null,
            isActive: true,
            lastSyncedAt: syncedAt,
          },
          $setOnInsert: {
            githubId: repo.id,
            installation: installation._id,
          },
        },
        upsert: true,
      },
    }));

    if (operations.length > 0) {
      await Repository.bulkWrite(operations);
    }

    return NextResponse.json({
      success: true,
      message: "Repositories synchronized successfully",
      totalFetched: githubRepositories.length,
      totalSynced: operations.length,
      syncedAt,
    });
  } catch (error) { 
    console.error("Repository sync failed:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Repository synchronization failed",
      },
      { status: 500 }
    );
  }
}
