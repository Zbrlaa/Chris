<script>
	// Liste des images et leurs liens respectifs
	let imageLinks = [
		{ name: '/Ecole/Projet_metro/Miniature/Projet_metro_001.jpeg', link: '/gallery/perso/metro'},
		{ name: '/Ecole/Projet_arcane/Miniature/Arcane.jpeg', link: '/gallery/perso/arcane'},
		{ name: '/Ecole/Projet_road/Miniature/Projet_route_001.jpeg', link: '/gallery/perso/road'}
	];
</script>

<svelte:head>
  <title>Personal Projects</title>
</svelte:head>

<div class="container">
	<div class="top">
		<h1>Personal Projects</h1>
	</div>
	<div class="images">
		{#each imageLinks as { name, link }}
			<a href={link}>
				<img src="{name}" alt="{name}">
			</a>
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
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: space-evenly;
	}
	a{
		max-width: 35%;
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
