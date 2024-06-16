<script>
	//let imageLinks = [{name :, text : }];

	let ytb = [
		"https://www.youtube-nocookie.com/embed/45WZJjqxBXw?si=0d7qzSBuH-HcbsfO",
		"https://www.youtube-nocookie.com/embed/ErPvbN2Nmco?si=0d7qzSBuH-HcbsfO"
	];
</script>

<svelte:head>
  <title>Nuke</title>
</svelte:head>

<div class="container">
	<div class="top">
		<h1>Nuke</h1>
	</div>
	<div class="images">
		<!--
		{#each imageLinks as {name, text}}
			<div class="a">
				<img src="{name}" alt="{name}">
				<p>{text}</p>
			</div>
		{/each}
		-->
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
	/*
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
	*/
	iframe{
		margin-top: 2vh;
		max-width: 100%;
		padding: 5px;
		margin-left: 10px;
		border: 1px solid #ccc;
	}

</style>
