
import { Octokit } from "@octokit/rest";
import { createAppAuth } from "@octokit/auth-app";

const appId = process.env.GITHUB_APP_ID;
const privateKey = process.env.GITHUB_PRIVATE_KEY?.replace(/\\n/g, "\n");
console.log("GitHub App ID exists:", Boolean(appId));
console.log("Private key exists:", Boolean(privateKey));
console.log("Private key length:", privateKey?.length);
console.log("Private key header:", privateKey?.split("\n")[0]);
console.log("Private key footer:", privateKey?.trim().split("\n").at(-1));
if (!appId || !privateKey) {
  throw new Error("Missing GitHub App credentials");
}

const auth = createAppAuth({
  appId,
  privateKey,
});

export async function getInstallationOctokit(installationId) {
  if (!installationId) {
    throw new Error("Installation ID is required");
  }

  const installationAuth = await auth({
    type: "installation",
    installationId: Number(installationId),
  });

  return new Octokit({
    auth: installationAuth.token,
  });
}
