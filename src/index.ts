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

Hooks.on('renderChatMessage', (rawMessage, html) => {
  const message = rawMessage as ChatMessagePF2e;
  const actor = message.actor;

  // Type guard: Narrows actor to CreaturePF2e
  if (!actor?.isOfType('creature')) return;

  const isDown = actor.isDead;
  const currentHp = actor.system.attributes.hp.value;

  if (isDown) {
    console.warn(`findles-starfinder-helper | Message from downed actor: ${actor.name} (HP: ${currentHp})`);
  }
});