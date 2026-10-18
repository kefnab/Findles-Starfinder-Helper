# File Map

Current project structure. The `.git/`, `node_modules/`, and `vendor/pf2e/` contents are omitted; `dist/` is included as generated build output.

```text
.
├── .github/
│   ├── dependabot.yml
│   └── workflows/
│       ├── ci.yml
│       └── release.yml
├── .vscode/
│   ├── copilot-instructions.md
│   ├── extensions.json
│   ├── settings.json
│   └── tasks.json
├── dist/                         # Generated build output
│   ├── assets/
│   ├── lang/
│   ├── templates/
│   ├── index.js
│   ├── index.js.map
│   └── module.json
├── packs/
│   └── sf2e/
│       ├── rc-ancestries/
│       │   └── animal-companion.json
│       ├── rc-ancestry-features/
│       │   └── robot-immunities-and-traits.json
│       ├── rc-classes-chassis/
│       └── rc-heritages/
│           ├── mechanics-droid-companion.json
│           └── robot-companion.json
├── src/
│   ├── apps/
│   ├── module/
│   ├── robot-companion/
│   │   ├── automation.ts
│   │   └── rules.ts
│   ├── styles/
│   └── index.ts
├── static/
│   ├── assets/
│   │   └── icons/
│   │       ├── default-icons/
│   │       └── robot-companion.svg
│   ├── lang/
│   │   └── en.json
│   ├── licenses/
│   │   └── ORC-Notice.md
│   ├── templates/
│   └── module.json
├── types/
│   └── sf2e-ambient.d.ts
├── .gitattributes
├── .gitignore
├── .gitmodules
├── .prettierrc.json
├── README.md
├── filemap.md
├── package-lock.json
├── package.json
├── tsconfig.json
└── vite.config.ts
```
