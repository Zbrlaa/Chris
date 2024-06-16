<script>
	// Liste des images et leurs liens respectifs
	let imageLinks = [
		{ name: '/Ecole/Archiv/Miniature/DinhChristine_ArchViz_Nightlight.jpg', link: '/gallery/school/archviz' },
		{ name: '/Ecole/Exercice_nuke/Miniature/Dinh_Christine-sh030-out.1100.jpg', link: '/gallery/school/nuke'},
		{ name: '/Ecole/Projet_fin_anne/Miniature/shot_11.jpg', link: '/gallery/school/anne'}
	];
</script>

<svelte:head>
  <title>School Projects</title>
</svelte:head>

<div class="container">
	<div class="top">
		<h1>School Projects</h1>
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
