Hooks.once('init', () => {
  console.log('findles-starfinder-helper | Initialized');
});

Hooks.on('ready', () => {
  if (game.system?.id !== 'sf2e') {
    ui.notifications?.warn("Findle's Starfinder Helper requires the Starfinder 2e system.");
    return;
  }

  console.log(`findles-starfinder-helper | Ready on ${game.system.id} v${game.system.version}`);
});

Hooks.on('renderChatMessageHTML', (rawMessage: unknown, html: HTMLElement) => {
  const message = rawMessage as ChatMessagePF2e;
  const actor = message.actor;

  // Type guard: Narrows actor to CreaturePF2e which has an hp value
  if (!actor?.isOfType('creature')) return;

  const currentHp = actor.system.attributes.hp.value;

  // actor.statuses is a native Set<string> recognized by fvtt-types
  const isDying = actor.statuses.has('dying');
  const isUnconscious = actor.statuses.has('unconscious');
  const isDead = actor.statuses.has('dead');

  const isDown = isDead || isDying || isUnconscious || currentHp <= 0;

if (isDown) {
  // Provides localization support for the warning message, falling back to a default message if the localization key is not found.
    const i18n = game.i18n!;
    const warningText = i18n.has('FSH.Warnings.DownedActor')
      ? i18n.format('FSH.Warnings.DownedActor', { name: actor.name, hp: currentHp })
      : `Message from downed actor: ${actor.name} (HP: ${currentHp})`;

    console.warn(`findles-starfinder-helper | ${warningText}`);
  }
});