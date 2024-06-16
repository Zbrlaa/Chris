<script>
	let imageLinks = [
		{ name: '/Entreprise/Mapping_barcares/Procedes/Eglise/2.png', text: '' },
		{ name: '/Entreprise/Mapping_barcares/Procedes/Eglise/3.png', text: '' },
		{ name: '/Entreprise/Mapping_barcares/Procedes/Eglise/4.png', text: '' },
		{ name: '/Entreprise/Mapping_barcares/Procedes/Eglise/5.png', text: '' },
		{ name: '/Entreprise/Mapping_barcares/Procedes/Eglise/7.png', text: '' },
		{ name: '/Entreprise/Mapping_barcares/Procedes/Eglise/8.png', text: '' },
		{ name: '/Entreprise/Mapping_barcares/Procedes/Eglise/9.png', text: '' },
		{ name: '/Entreprise/Mapping_barcares/Procedes/Eglise/10.png', text: '' },
		{ name: '/Entreprise/Mapping_barcares/Procedes/Eglise/12.png', text: '' },

		{ name: '/Entreprise/Mapping_barcares/Procedes/Livre/12.png', text: '' },
		{ name: '/Entreprise/Mapping_barcares/Procedes/Livre/13.png', text: '' },
		{ name: '/Entreprise/Mapping_barcares/Procedes/Livre/14.png', text: '' },
		{ name: '/Entreprise/Mapping_barcares/Procedes/Livre/15.png', text: '' },
		{ name: '/Entreprise/Mapping_barcares/Procedes/Livre/16.png', text: '' },
		{ name: '/Entreprise/Mapping_barcares/Procedes/Livre/17.png', text: '' },
		{ name: '/Entreprise/Mapping_barcares/Procedes/Livre/18.png', text: '' },
	];

	let ytb = ["https://www.youtube-nocookie.com/embed/437q3kr8dN8"];
</script>

<svelte:head>
  <title>Mapping Barcares</title>
</svelte:head>

<div class="container">
	<div class="top">
		<h1>Mapping Barcare</h1>
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
		padding-left: 30vh;
		flex-wrap: wrap;
		gap: 10px;
	}
	.images{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-evenly;
	}
	.a{
		margin : 5px;
		max-width: 60%;
		display: inline-block;
		text-align: center;
		margin-top: 2vh;
		cursor: pointer;
	}
	img{
		margin : 5px;
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
