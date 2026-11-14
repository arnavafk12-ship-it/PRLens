
import { NextResponse } from "next/server";
import { getInstallationRepositories } from "../../../services/github.service.js";

export async function GET() {
  // Development-only endpoint: it exposes private repository metadata.
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json(
      { success: false, message: "Not available" },
      { status: 404 }
    );
  }

  try {
    const installationId = process.env.GITHUB_INSTALLATION_ID;

    if (!installationId) {
      return NextResponse.json(
        { success: false, message: "Missing installation ID" },
        { status: 500 }
      );
    }

    const repositories =
      await getInstallationRepositories(installationId);

    return NextResponse.json({
      success: true,
      total: repositories.length,
      repositories: repositories.map((repo) => ({
        id: repo.id,
        name: repo.name,
        fullName: repo.full_name,
        owner: repo.owner.login,
        private: repo.private,
        url: repo.html_url,
        defaultBranch: repo.default_branch,
        language: repo.language,
      })),
    });
  } catch (error) {
    console.error("Repository fetch failed:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch GitHub repositories",
      },
      { status: 500 }
    );
  }
}
