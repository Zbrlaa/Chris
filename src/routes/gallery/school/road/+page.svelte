<script>
	let imageLinks = [
		{ name: '/Ecole/Projet_road/Procedes/Beauty.jpeg', text: 'romgnomgnom' },
		{ name: '/Ecole/Projet_road/Procedes/Diffuse_direct.jpeg', text: '' },
		{ name: '/Ecole/Projet_road/Procedes/Diffuse_indirect.jpeg', text: '' },
		{ name: '/Ecole/Projet_road/Procedes/Emission.jpeg', text: '' },
		{ name: '/Ecole/Projet_road/Procedes/Specular_direct.jpeg', text: '' },
		{ name: '/Ecole/Projet_road/Procedes/Specular_indirect.jpeg', text: '' },
		{ name: '/Ecole/Projet_road/Procedes/Lights/RGBA_directional.jpeg', text: '' },
		{ name: '/Ecole/Projet_road/Procedes/Lights/RGBA_env.jpeg', text: '' },
		{ name: '/Ecole/Projet_road/Procedes/Lights/RGBA_KEy.jpeg', text: '' },
		{ name: '/Ecole/Projet_road/Procedes/Lights/RGBA_lamp_cabine.jpeg', text: '' },
		{ name: '/Ecole/Projet_road/Procedes/Lights/RGBA_lamp.jpeg', text: '' },
		{ name: '/Ecole/Projet_road/Procedes/Lights/RGBA_rim.jpeg', text: '' },
	];
</script>

<svelte:head>
  <title>Road</title>
</svelte:head>

<div class="container">
	<div class="top">
		<h1>Road</h1>
	</div>
	<div class="images">
		{#each imageLinks as {name, text}}
			<div class="a">
				<img src="{name}" alt="{name}">
				<p>{text}</p>
			</div>
		{/each}
	</div>
</div>

<style>
	h1{
		font-family: 'Helvetica', sans-serif;
		padding-bottom: 2vh;
	}
	.container{
		flex-direction: column;
		justify-content: space-around;
		display: flex;
		padding-right: 5vh;
		padding-left: 20vh;
		flex-wrap: wrap;
		gap: 10px;
	}
	.images{
		display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
	}
	.a{
		max-width: 60%;
		display: inline-block;
		text-align: center;
		margin-top: 2vh;
	}
	a:hover img {
		transform: scale(1.1);
	}
	img{
		max-width: 100%;
		height: auto;
		display: block;
		transition: transform 0.3s ease;
		padding: 5px;
		border: 1px solid #ccc;
	}
</style>
