<script lang="ts">
  let actor = $state<SF2eActor | null>(null);
  let resolvePoints = $state(3);

  function getActiveActor(): SF2eActor | null {
    const controlled = (
      canvas as unknown as {
        tokens?: { controlled?: Array<{ actor?: SF2eActor | null }> };
      }
    )?.tokens?.controlled;

    if (controlled && controlled.length > 0 && controlled[0].actor) {
      return controlled[0].actor;
    }

    const userChar = (
      game as unknown as { user?: { character?: SF2eActor | null } }
    )?.user?.character;

    return userChar ?? null;
  }

  function refreshActor() {
    actor = getActiveActor();
  }

  $effect(() => {
    refreshActor();

    const onTokenOrActorChange = () => {
      refreshActor();
    };

    Hooks.on("controlToken", onTokenOrActorChange);
    Hooks.on("updateActor", onTokenOrActorChange);

    return () => {
      Hooks.off("controlToken", onTokenOrActorChange);
      Hooks.off("updateActor", onTokenOrActorChange);
    };
  });

  function formatMod(mod: number | undefined): string {
    if (mod === undefined) return "";
    return mod >= 0 ? `+${mod}` : `${mod}`;
  }

  async function rollStat(stat: SF2eStatistic | undefined, fallbackLabel: string) {
    if (stat?.roll) {
      await stat.roll();
      return;
    }
    const roll = new Roll("1d20");
    await roll.evaluate();
    await roll.toMessage({
      flavor: `<strong>${actor?.name ?? "Starfinder Helper"}</strong>: ${fallbackLabel}`
    });
  }
</script>

<div class="findles-helper-panel">
  {#if actor}
    {@const level = actor.level ?? actor.system?.details?.level?.value ?? 1}
    {@const hp = actor.system?.attributes?.hp}
    {@const shield = actor.system?.attributes?.shield}
    {@const perception = actor.perception}
    {@const computers = actor.skills?.computers}
    {@const piloting = actor.skills?.piloting}

    <div class="findles-actor-header">
      {#if actor.img}
        <img class="findles-actor-portrait" src={actor.img} alt={actor.name} />
      {/if}
      <div class="findles-actor-title">
        <span class="findles-actor-name">{actor.name}</span>
        <span class="findles-actor-sub">Level {level}</span>
      </div>
    </div>

    <div class="findles-stat-grid">
      <div class="findles-stat-box">
        <span class="findles-stat-label">Hit Points</span>
        <span class="findles-helper-badge">
          {hp?.value ?? 0} / {hp?.max ?? 0}
          {#if hp?.temp} (+{hp.temp}){/if}
        </span>
      </div>

      <div class="findles-stat-box">
        <span class="findles-stat-label">Shield HP</span>
        <span class="findles-helper-badge">
          {shield?.value ?? 0} / {shield?.max ?? 0}
        </span>
      </div>
    </div>

    <div class="findles-button-grid">
      <button type="button" onclick={() => rollStat(perception, "Perception")}>
        Roll Perception {formatMod(perception?.mod)}
      </button>
      <button type="button" onclick={() => rollStat(computers, "Computers")}>
        Roll Computers {formatMod(computers?.mod)}
      </button>
      <button type="button" onclick={() => rollStat(piloting, "Piloting")}>
        Roll Piloting {formatMod(piloting?.mod)}
      </button>
    </div>
  {:else}
    <p>Select a token on the canvas to view its Starfinder 2e stats.</p>
  {/if}

  <div class="findles-helper-row">
    <span>Tactical Points:</span>
    <span class="findles-helper-badge">{resolvePoints}</span>
    <div>
      <button type="button" onclick={() => resolvePoints = Math.max(0, resolvePoints - 1)}>-</button>
      <button type="button" onclick={() => resolvePoints += 1}>+</button>
    </div>
  </div>
</div>