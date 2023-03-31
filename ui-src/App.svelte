<script lang="ts">
  import Counter from "./lib/counter.svelte";
</script>

<div>
  <Counter />
  <button
    on:click={() => {
      parent?.postMessage?.({ pluginMessage: "hello"}, "*");
    }}
  >
    Hello
  </button>
  <button
    on:click={() => {
      parent?.postMessage?.({ pluginMessage: "close"}, "*");
    }}
  >
    Close
  </button>
</div>