<script>
	// Liste des images et leurs liens respectifs
	let imageLinks = [
		{ name: '/Entreprise/Frontfroide_jeu_video/Miniature/Banner.png', link: '/gallery/business/frontfroide'},
		{ name: '/Entreprise/Mapping_barcares/Miniature/village.png', link: '/gallery/business/barcares'},
		{ name: '/Entreprise/Mapping_jardin_de_la_peur/Miniature/jardin.png', link: '/gallery/business/soler'}
	];
</script>

<svelte:head>
  <title>Business Projects</title>
</svelte:head>

<div class="container">
	<div class="top">
		<h1>Business Projects</h1>
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
		flex-direction: row;
		justify-content: space-around;
		display: flex;
		padding-right: 5vh;
		padding-left: 20vh;
		flex-wrap: wrap;
		gap: 10px;
	}

	.images{
		width: auto;
		height: 20%;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: space-evenly;
	}

	a{
		width: auto;
		height: 100%;
		display: inline-block;
		text-align: center;
		padding-top: 2vh;
	}
	a:hover img {
        transform: scale(1.1);
    }
	img{
		width: 100%;
		max-height: 100%;
		display: block;
		padding: 5px;
		border: 1px solid #ccc;
	}
</style>
