import { HelperApp } from "./HelperApp";

export const MODULE_ID = "findles-starfinder-helper" as const;

let helperApp: HelperApp | null = null;

Hooks.once("init", () => {
  console.log(`${MODULE_ID} | Initializing Findle's Starfinder Helper`);

  if (!game.settings || !game.keybindings) return;

  game.settings.register(MODULE_ID, "enableWelcome", {
    name: "FINDLES_SF2E.Settings.EnableWelcome.Name",
    hint: "FINDLES_SF2E.Settings.EnableWelcome.Hint",
    scope: "client",
    config: true,
    type: Boolean,
    default: true
  });

  game.keybindings.register(MODULE_ID, "openHelper", {
    name: "FINDLES_SF2E.Keybindings.OpenHelper.Name",
    hint: "FINDLES_SF2E.Keybindings.OpenHelper.Hint",
    editable: [{ key: "KeyH", modifiers: ["ALT"] }],
    onDown: () => {
      helperApp ??= new HelperApp();
      if (helperApp.rendered) {
        void helperApp.close();
      } else {
        void helperApp.render({ force: true });
      }
      return true;
    }
  });
});

Hooks.once("ready", () => {
  if (!game.settings || !game.i18n) return;

  const showWelcome = game.settings.get(MODULE_ID, "enableWelcome");
  if (showWelcome) {
    const message = game.i18n.localize("FINDLES_SF2E.WelcomeMessage");
    ui.notifications?.info(message);
  }
});