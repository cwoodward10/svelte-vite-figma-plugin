<script lang="ts">
    let currentNumber: number = $state(0);
</script>

<div>
    <h1>{currentNumber}</h1>
    <button onclick={() => {currentNumber += 1}}>Add 1</button>  
</div>