<svelte:head>
  <title>About me</title>
</svelte:head>

<div class="container">
    <div class="top">
        <h1>About me</h1>
    </div>
	<div class="CV">
		<div class="txt">
			<p>My name is Christine Dinh and i'm currently in my fourth year of 3D generalist studies in animation at L'IDEM creative arts school in le Soler.</p>
			<p>I'm specializing in lighting and compositing.</p>
			<p>I use Maya, Photoshop, Substance Painter, Unreal Engine, Nuke and Blender.</p>
		</div>
		<img src="CV.png" alt="CV">
	</div>
</div>

<style>
	h1{
		font-family: 'Helvetica', sans-serif;
		padding-bottom: 2vh;
	}

	p{
		font-size: 22px;
	}
	.txt{
		padding-bottom: 3vh;
	}

	.container{
		flex-direction: column;
        justify-content: space-around;
		display: flex;
		padding-right: 10vh;
		padding-left: 20vh;
        flex-wrap: wrap;
        gap: 10px;
	}
	.CV{
		height: 80vh;
	}
	img{
		height: 100%;
		border-radius:12%;
		padding-bottom: 3vh;
	}
</style>
