<script>
	let imageLinks = [
		{ name: '/Ecole/Projet_fin_anne/ref2.jpg', text: 'Reference' },

		{ name: '/Ecole/Projet_fin_anne/Procedes/shot_9.jpeg', text: '' },
		{ name: '/Ecole/Projet_fin_anne/Procedes/shot_10.jpeg', text: '' },
		{ name: '/Ecole/Projet_fin_anne/Procedes/shot_11.jpeg', text: '' }
	];

	let ytb = [
	"https://www.youtube-nocookie.com/embed/CeCC7YnPcA0?si=0d7qzSBuH-HcbsfO",
	"https://www.youtube-nocookie.com/embed/Di7hA2amuoI?si=0d7qzSBuH-HcbsfO",
	"https://www.youtube-nocookie.com/embed/2EWh3ZrxdUQ?si=0d7qzSBuH-HcbsfO",

	"https://www.youtube-nocookie.com/embed/sB16GXrd7l8?si=0d7qzSBuH-HcbsfO",
	"https://www.youtube-nocookie.com/embed/7CG50G2Yuzc?si=0d7qzSBuH-HcbsfO",
	"https://www.youtube-nocookie.com/embed/6irmcaQbl4I?si=0d7qzSBuH-HcbsfO",
	"https://www.youtube-nocookie.com/embed/KKIuRPZL8GM?si=0d7qzSBuH-HcbsfO"
	];
</script>

<svelte:head>
  <title>Kubo Movie</title>
</svelte:head>

<div class="container">
	<div class="top">
		<h1>Kubo Movie</h1>
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
		<a href="/gallery/school" class="back-button">Back to gallery</a>
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
	iframe{
		margin-top: 2vh;
		max-width: 100%;
		padding: 5px;
		margin-left: 10px;
		border: 1px solid #ccc;
	}
</style>
