<svelte:head>
  <title>Chris's 3D Projects</title>
</svelte:head>

<div class="container">
	<div class="top-elmt">
		<h1>Demoreel</h1>
	</div>
	<div class="video-container">
		<iframe width="60%" height="500" src="https://www.youtube-nocookie.com/embed/I7PVRuWzeKY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
	</div>
</div>

<style>
	h1{
		padding-left: 20px;
		padding-right: 20px;
	}
	.top-elmt{
		font-size: 20px;
		text-align: center;
		font-family: 'Roboto', sans-serif;
    }
	.container{
		flex-direction: column;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-right: 10vh;
		padding-left: 20vh;
	}
	.video-container {
        height: 60vh;
		width: 80%;
	}
	iframe {
		width: 100%;
		height: 100%;
	}
</style>