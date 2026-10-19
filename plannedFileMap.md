# File Map

Notional future project structure that may be amended or filled-out to better fit game mechanics or recommended module organization. The `.git/`, `node_modules/`, and `vendor/pf2e/` contents are omitted; `dist/` is included as generated build output.

```text
.Findles-Starfinder-Helper (repository root; module name: "findles-starfinder-helper")
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
├── packs/
│   └── sf2e/
│       ├── tc-ancestries/
│       │   ├── animal-companion.json
│       │   └── robot-companion.json
│       ├── tc-heritages/                      # Base Chassis / Species
│       │   ├── agile-chassis.json
│       │   ├── tank-chassis.json
│       │   ├── surveillance-chassis.json
│       │   └── imitator-chassis.json
│       ├── tc-classes-chassis/               # Companion Class Frameworks
│       │   ├── animal-companion-class.json
│       │   └── robot-companion-class.json
│       └── tc-feats-customizations/          # Customizations & Upgrades
│           ├── commercial-customizations/
│           ├── tactical-customizations/
│           └── superior-customizations/
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
│   │       └── default-icons/
│   │           └── robot-companion.svg
│   ├── lang/
│   │   └── en.json
│   ├── licenses/
│   │   └── ORC-Notice.md
│   ├── templates/
│   ├── LICENSE
│   └── module.json
├── types/
│   └── sf2e-ambient.d.ts
├── .gitattributes
├── .gitignore
├── .gitmodules
├── .prettierrc.json
├── README.md
├── filemap.md
├── LICENSE
├── package-lock.json
├── package.json
├── tsconfig.json
└── vite.config.ts
```