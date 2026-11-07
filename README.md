# PRLens

**A static code analysis tool for GitHub Pull Requests.**

PRLens is an open-source developer tool designed to help developers identify potential code issues in GitHub Pull Requests through automated static analysis.

Instead of manually reviewing every changed line, PRLens aims to provide structured feedback about code quality, potential bugs, and maintainability.

> **Status:** Under active development

## Overview

Code reviews are an essential part of software development, but reviewing large pull requests can be time-consuming.

PRLens aims to simplify this process by integrating with GitHub and running static analysis on changed code.

The goal is to make code reviews more consistent, understandable, and efficient.

## Planned Features

- [ ] GitHub account integration
- [ ] Repository selection
- [ ] Pull Request discovery
- [ ] Changed-file detection
- [ ] Automated static code analysis
- [ ] JavaScript and TypeScript support
- [ ] Detection of common code issues
- [ ] Severity-based findings (Error, Warning, Info)
- [ ] File-level analysis reports
- [ ] Pull Request review history
- [ ] Review dashboard

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js | Frontend framework |
| Tailwind CSS | Styling |
| Node.js | Backend runtime |
| Express.js | REST API |
| MongoDB | Database |
| Mongoose | Database modeling |
| GitHub REST API | Repository and PR integration |
| ESLint | Static code analysis |

## Architecture

<details>
<summary>🔒 This section is hidden by the owner.</summary>

Architecture details are intentionally kept private during development.

</details>

## How It Will Work

1. Connect a GitHub account.
2. Select a repository.
3. Choose a Pull Request.
4. PRLens retrieves the changed files.
5. The analysis engine examines the relevant code.
6. Findings are organized by file, line, and severity.
7. Developers can inspect the review report.

## Project Goals

- **Automation:** Reduce repetitive manual review work.
- **Clarity:** Make code issues easy to understand.
- **Performance:** Keep analysis efficient.
- **Security:** Treat repository content as untrusted input.
- **Open Source:** Keep the project accessible and transparent.

## Getting Started

PRLens is currently under development. Setup instructions will be added once the initial application is functional.

## Roadmap

- [ ] Project initialization
- [ ] Backend architecture
- [ ] Express server configuration
- [ ] MongoDB models
- [ ] GitHub authentication and integration
- [ ] Pull Request fetching
- [ ] Static analysis engine
- [ ] Review API
- [ ] Next.js dashboard
- [ ] Testing and deployment

## Contributing

Contributions, suggestions, and bug reports will be welcome once the initial development structure is established.

## License

This project is intended to be released under the MIT License. A license file will be added before the first public release.

---

**PRLens — Review code. Find issues. Build better software.**
