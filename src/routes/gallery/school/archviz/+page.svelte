<script>
	let imageLinks = [
		{ name: '/Ecole/Archiv/Procedes/DinhChristine_ARCHVIZ_beauty_1-_1_.jpeg', text: 'romgnomgnom' },
		{ name: '/Ecole/Archiv/Procedes/DinhChristine_ARCHVIZ_beauty_1-_2_.jpeg', text: '' },
		{ name: '/Ecole/Archiv/Procedes/DinhChristine_ARCHVIZ_beauty_1.jpeg', text: '' },
		{ name: '/Ecole/Archiv/Procedes/DinhChristine_ArchViz_Daylight.jpg', text: '' },
		{ name: '/Ecole/Archiv/Procedes/DinhChristine_ArchViz_Fantasticlight.jpg', text: '' },
		{ name: '/Ecole/Archiv/Procedes/DinhChristine_ArchViz_Nightlight.jpg', text: '' },
	];
</script>

<svelte:head>
  <title>Archviz</title>
</svelte:head>

<div class="container">
	<div class="top">
		<h1>Archviz</h1>
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
