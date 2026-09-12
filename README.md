# BauPilot Community

[![Tests](https://github.com/ichkaufbeialdi/baupilot-community/actions/workflows/test.yml/badge.svg)](https://github.com/ichkaufbeialdi/baupilot-community/actions/workflows/test.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

BauPilot Community is an open-source, mobile-first toolkit for practical construction-site workflows.

The Community edition focuses on simple field workflows that can run locally in the browser without a proprietary backend. It is intended for site managers, foremen, trades and developers who want an adaptable foundation for construction documentation.

## Current community core

- Daily report records
- Defect / punch-list records
- Inspection records
- Meeting-minute records
- Project-local browser storage
- JSON export/import
- CSV export for tabular records
- Mobile-first demo UI

The first public release is deliberately small and backend-independent. More production features will be extracted only after configuration, privacy and licensing review.

## Quick start

Requirements: Node.js 22+

```bash
npm install
npm test
npm run dev
```

Then open http://localhost:4173/demo/

## Design goals

- field-first and mobile-friendly
- understandable data model
- offline-capable by default
- no production credentials in the repository
- easy to adapt to company-specific workflows
- incremental extraction from real construction workflow needs

## Repository safety

This public repository is separate from private production deployments. Do not commit production credentials, customer data, project data or private endpoints.

## Maintainer

Primary maintainer: [@ichkaufbeialdi](https://github.com/ichkaufbeialdi)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## Security

See [SECURITY.md](SECURITY.md).

## Roadmap

See [ROADMAP.md](ROADMAP.md).

## License

MIT — see [LICENSE](LICENSE).
