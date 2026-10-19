<script lang="ts">
  let resolvePoints = $state(3);
  let bonus = $state(2);

  async function rollSkillCheck() {
    const formula = bonus >= 0 ? `1d20 + ${bonus}` : `1d20 - ${Math.abs(bonus)}`;
    const roll = new Roll(formula);
    await roll.evaluate();
    await roll.toMessage({
      flavor: "<strong>Starfinder Helper</strong>: Quick Check"
    });
  }
</script>

<div class="findles-helper-panel">
  <div class="findles-helper-row">
    <span>Tactical Points:</span>
    <span class="findles-helper-badge">{resolvePoints}</span>
    <div>
      <button type="button" onclick={() => resolvePoints = Math.max(0, resolvePoints - 1)}>-</button>
      <button type="button" onclick={() => resolvePoints += 1}>+</button>
    </div>
  </div>

  <div class="findles-helper-row">
    <label for="sf2e-bonus">Roll Modifier:</label>
    <input id="sf2e-bonus" type="number" bind:value={bonus} style="width: 4rem;" />
  </div>

  <button type="button" onclick={rollSkillCheck}>
    Roll 1d20 + {bonus} to Chat
  </button>
</div>