<script lang="ts">
  import { onMount } from "svelte";
  import Counter from "./lib/counter.svelte";
  import { On, Once, SendToFigma } from "./modules/FigmaUtilities";

  let selectedObjectsCount = $state(0);
  On('SelectionChanged', (m, d) => {
    if (Array.isArray(d)) {
      selectedObjectsCount = d.length;
    }
  })

  Once('HelloBack', (m, d) => {
    console.log('The Plugin Code says "Hello Back"');
  })

  onMount(() => {
    SendToFigma('Hello');
  })
</script>

<div>
  <h1>{selectedObjectsCount}</h1>
  <Counter />
  <button
    onclick={() => {
      SendToFigma('close');
    }}
  >
    Close
  </button>
</div>
