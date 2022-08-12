<script>
	import { onMount } from "svelte";
	import ApiCall from "../helpers/api_call"
	import EjemploTextField from './components/EjemploTextField.svelte';
	import EjemploButton from './components/EjemploButton.svelte';

	export let name;

	const getData = async () => {
		const data = await ApiCall.request('/gateway/examples')
		console.log('DATA', data)
	}

	onMount(() => {
		getData()
	})
</script>

<main>
	<h1>Hello {name}</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

	<form action="" on:submit|preventDefault={() => {}}>
		<EjemploTextField field="username" label="username" />
		<EjemploTextField field="address" label="address" required={true} />
		<EjemploButton on:click={() => console.log('Enviar!')}>Enviar</EjemploButton>
	</form>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 50vw;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
</style>