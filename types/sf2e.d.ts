/// <reference types="fvtt-types" />

declare global {
  interface SettingConfig {
    "findles-starfinder-helper.enableWelcome": boolean;
  }
}

declare module "*.svelte" {
  import type { Component } from "svelte";
  const component: Component<Record<string, unknown>>;
  export default component;
}

export {};