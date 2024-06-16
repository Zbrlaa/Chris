<script>
	let imageLinks = [
		{ name: '/Ecole/Projet_arcane/ref.jpg', text: 'Reference' },

		{ name: '/Ecole/Projet_arcane/Procedes/Beauty.jpeg', text: 'Beauty' },
		{ name: '/Ecole/Projet_arcane/Procedes/Diffuse_direct.jpeg', text: 'Diffuse direct' },
		{ name: '/Ecole/Projet_arcane/Procedes/Diffuse_indirect.jpeg', text: 'Diffuse indirect' },
		{ name: '/Ecole/Projet_arcane/Procedes/Specular_direct.jpeg', text: 'Specular direct' },
		{ name: '/Ecole/Projet_arcane/Procedes/Specular_indirect.jpeg', text: 'Specular indirec' },
		{ name: '/Ecole/Projet_arcane/Procedes/emission.jpeg', text: 'Emission' },
		
		{ name: '/Ecole/Projet_arcane/Procedes/RGBA_Bg_Light.jpeg', text: '' },
		{ name: '/Ecole/Projet_arcane/Procedes/RGBA_Bouteille_light.jpeg', text: '' },
		{ name: '/Ecole/Projet_arcane/Procedes/RGBA_Key_light.jpeg', text: '' },
		{ name: '/Ecole/Projet_arcane/Procedes/RGBA_Rim_light.jpeg', text: '' },
		{ name: '/Ecole/Projet_arcane/Procedes/RGBA_Top_light.jpeg', text: '' },
		{ name: '/Ecole/Projet_arcane/Procedes/RGBA_Volum_light.jpeg', text: '' },

		{ name: '/Ecole/Projet_arcane/Miniature/Arcane.jpeg', text: 'Post Production' },
	];
</script>

<svelte:head>
  <title>Arcane</title>
</svelte:head>

<div class="container">
	<div class="top">
		<h1>Arcane</h1>
	</div>
	<div class="images">
		{#each imageLinks as {name, text}}
			<div class="a">
				<img src="{name}" alt="{name}">
				<p>{text}</p>
			</div>
		{/each}
		<a href="/gallery/perso" class="back-button">Back to gallery</a>
	</div>
</div>

<style>
	.back-button {
		margin: 5px;
		margin-top: 20px;
		display: inline-block;
		padding: 10px 15px;
		font-size: 16px;
		color: #000000;
		background-color: #dacece;
		border: none;
		border-radius: 5px;
		text-decoration: none;
		cursor: pointer;
		transition: background-color 0.3s ease;
    }

    .back-button:hover {
      background-color: #8a8a8a;
    }

    .back-button::before {
      content: '←'; /* Unicode for left arrow */
      margin-right: 8px;
    }
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
</style>
