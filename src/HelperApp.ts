import { mount, unmount } from "svelte";
import HelperPanel from "./HelperPanel.svelte";

const BaseApp = (
  foundry as unknown as {
    applications: {
      api: {
        ApplicationV2: new (options?: Record<string, unknown>) => {
          element: HTMLElement;
          rendered: boolean;
          render: (options?: { force?: boolean }) => Promise<unknown>;
          close: () => Promise<unknown>;
        };
      };
    };
  }
).applications.api.ApplicationV2;

export class HelperApp extends BaseApp {
  #component: Record<string, unknown> | null = null;

  static DEFAULT_OPTIONS = {
    id: "findles-starfinder-helper-app",
    window: {
      title: "FINDLES_SF2E.WindowTitle",
      resizable: true
    },
    position: {
      width: 340,
      height: "auto"
    }
  };

  protected async _renderHTML(): Promise<HTMLElement> {
    const container = document.createElement("div");
    return container;
  }

  protected _replaceHTML(result: HTMLElement, content: HTMLElement): void {
    content.replaceChildren(result);
    this.#component = mount(HelperPanel, { target: result });
  }

  protected async _onClose(): Promise<void> {
    if (this.#component) {
      await unmount(this.#component);
      this.#component = null;
    }
  }
}