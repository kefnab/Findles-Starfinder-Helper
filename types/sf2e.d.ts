/// <reference types="fvtt-types" />

declare global {
  interface SettingConfig {
    "findles-starfinder-helper.enableWelcome": boolean;
  }
interface SF2eStatistic {
    label?: string;
    mod?: number;
    roll?: (args?: Record<string, unknown>) => Promise<unknown>;
  }

  interface SF2eActor {
    id: string;
    name: string;
    img?: string;
    level?: number;
    system?: {
      details?: {
        level?: { value?: number };
      };
      attributes?: {
        hp?: { value?: number; max?: number; temp?: number };
        shield?: { value?: number; max?: number };
      };
    };
    perception?: SF2eStatistic;
    skills?: Record<string, SF2eStatistic | undefined>;
  }
}

declare module "*.svelte" {
  import type { Component } from "svelte";
  const component: Component<Record<string, unknown>>;
  export default component;
}

export {};