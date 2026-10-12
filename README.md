# FoundryVTT Module Template w/ Typescript

This is primarily a project to teach myself module programming and Typescript.

## Planned Layout

sf2e-droid-companions/
├── .github/
├── dist/                      # Compiled JS output (gitignored or built via CI)
│   └── module.js
├── lang/
│   └── en.json                # Localization strings
├── packs/                     # Compendium packs (NeDB / LevelDB JSON files)
│   ├── sf-macros-player/
│   ├── sf-macros-gm/
│   ├── sf-rc-chassis/
│   ├── sf-rc-customizations/
│   ├── sf-rc-companion-features/
│   └── sf-rc-prefabs/
├── static/
│   └── art/                   # Custom companion tokens & icons
│       └── droids/
├── src/
│   ├── module.ts              # Entry point & Hooks registration
│   ├── macros/
│   │   ├── player-macros.ts   # Player Droid Command & Repair scripts
│   │   └── gm-macros.ts       # GM Diagnostic & Scale utilities
│   └── helpers/
│       └── companion-utils.ts # Robot Companion trait/HP recalculators
├── module.json                # Module Manifest (Foundry v14 standard)
├── package.json               # Node packages & build scripts
├── tsconfig.json              # TypeScript configuration
└── vite.config.ts             # Vite build configuration

## Todo
