# Releasing BauPilot Community

## Before a release

1. Run `npm test`.
2. Confirm GitHub Actions is green on `main`.
3. Review the repository for secrets, private endpoints and private project/customer data.
4. Update `CHANGELOG.md`.
5. Confirm README and roadmap match the shipped scope.
6. Create a semantic version tag such as `v0.1.0`.
7. Publish GitHub release notes summarising user-visible changes.

The first public release is intended to establish a small, auditable Community core rather than mirror private production deployments.
