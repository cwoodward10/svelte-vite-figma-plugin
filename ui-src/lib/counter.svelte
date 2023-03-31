<script lang="ts">
    let currentNumber: number = 0;
</script>

<div>
    <h1>{currentNumber}</h1>
    <button on:click={() => {currentNumber += 1}}>Add 1</button>  
</div>