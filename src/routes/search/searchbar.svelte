<script>
	import { iWant } from './stores.js';

    const handleInput = (e) => {
        iWant.set(e.target.value);
    };
</script>

<input type="text" id="searching" on:input={handleInput} placeholder="Search for a Character...">

<style>
input{max-width: 20rem; margin-bottom: 1.5rem;}
</style>