
import { getInstallationOctokit } from "../lib/github.js";

export async function getInstallationRepositories(installationId) {
  const octokit = await getInstallationOctokit(installationId);

  const repositories = await octokit.paginate(
    "GET /installation/repositories",
    {
      per_page: 100,
    }
  );

  return repositories;
}
