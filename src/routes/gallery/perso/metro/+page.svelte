<script>
	let imageLinks = [
		{ name: '/Ecole/Projet_metro/ref.jpg', text: 'Reference' },

		{ name: '/Ecole/Projet_metro/Procedes/Beauty.jpeg', text: 'Beauty' },
		{ name: '/Ecole/Projet_metro/Procedes/Diffuse_direct.jpeg', text: 'Diffuse direct' },
		{ name: '/Ecole/Projet_metro/Procedes/Diffuse_indirect.jpeg', text: 'Diffuse indirect' },
		{ name: '/Ecole/Projet_metro/Procedes/Specular_direct.jpeg', text: 'Specular direct' },
		{ name: '/Ecole/Projet_metro/Procedes/Specular_indirect.jpeg', text: 'Specular indirect' },
		{ name: '/Ecole/Projet_metro/Procedes/Emission.jpeg', text: 'Emission' },
		{ name: '/Ecole/Projet_metro/Procedes/Transmission.jpeg', text: 'Transmission' },
		
		{ name: '/Ecole/Projet_metro/Procedes/Lights/RGBA_directional.jpeg', text: '' },
		{ name: '/Ecole/Projet_metro/Procedes/Lights/RGBA_BG.jpeg', text: '' },
		{ name: '/Ecole/Projet_metro/Procedes/Lights/RGBA_key.jpeg', text: '' },
		{ name: '/Ecole/Projet_metro/Procedes/Lights/RGBA_BG2.jpeg', text: '' },
		{ name: '/Ecole/Projet_metro/Procedes/Lights/RGBA_lamp.jpeg', text: '' },
		{ name: '/Ecole/Projet_metro/Procedes/Lights/RGBA_fill.jpeg', text: '' },
		{ name: '/Ecole/Projet_metro/Procedes/Lights/RGBA_skydom.jpeg', text: '' },
		{ name: '/Ecole/Projet_metro/Procedes/Lights/RGBA_toit.jpeg', text: '' }
	];

	let ytb = ["https://www.youtube-nocookie.com/embed/OcAgPzEfqII?si=0d7qzSBuH-HcbsfO"];
</script>

<svelte:head>
  <title>Metro</title>
</svelte:head>

<div class="container">
	<div class="top">
		<h1>Metro</h1>
	</div>
	<div class="images">
		{#each imageLinks as {name, text}}
			<div class="a">
				<img src="{name}" alt="{name}">
				<p>{text}</p>
			</div>
		{/each}
		{#each ytb as name}
			<iframe width="60%" height="500" src={name} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
		cursor: pointer;
	}
	img{
		max-width: 100%;
    	max-height: 100%;
		height: auto;
		display: block;
		transition: transform 0.3s ease;
		padding: 5px;
		border: 1px solid #ccc;
	}
	iframe{
		margin-top: 2vh;
		max-width: 100%;
		padding: 5px;
		margin-left: 10px;
		border: 1px solid #ccc;
	}
</style>
