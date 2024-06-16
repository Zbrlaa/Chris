<div class="container">
<header class="left">

	<div class="profile-container">
	<a href="/">
		<img src="/profil.jpg" class="profile-image" alt="pp">
	</a>
</div>

<div class="navbar">
	<ul class="ul">
		<li><a href="/about">About</a></li>
		<li class="dropdown">
			<a href="#">Projects</a>
			<div class="dropdown-content">
				<a href="/gallery/perso">Personal</a>
				<a href="/gallery/school">School</a>
				<a href="/gallery/business">Work</a>
			</div>
		</li>
		<li><a href="/contact">Contact</a></li>
		<li class="logo">
			<a class="log" href="https://www.artstation.com/christine-dinh" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
				<img src="/artstation.png" alt="LinkedIn" width="24" height="24">
			</a>
			<a class="log" href="https://www.linkedin.com/in/christine-dinh-a9425b1b7" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
				<img src="/linkedin.png" alt="LinkedIn" width="24" height="24">
			</a>
		</li>
	</ul>
</div>


	<div class="social">
	</div>
</header>

<div class="right">
	<slot></slot>
</div>
</div>

<style>
	.log{
		margin: 5px;
	}
	.ul{
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		align-items: center;
	}

	.container{
		height: 100%;
		display: flex;
	}

	.left{
		position: fixed;
		align-items: center;
		border-radius: 5%;
	}
	
	.right{
		text-align: center;
		flex-grow: 1;
	}
	.logo{
		display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
	}

/* Style du conteneur de profil */
.profile-container {
	text-align: center; /* Centre l'image horizontalement */
	padding: 20px; /* Ajoute un peu d'espace autour de l'image */
}

/* Style de l'image de profil */
.profile-image {
		width: 180px; /* Ajuste la largeur de l'image */
		height: 180px; /* Ajuste la hauteur de l'image */
		border-radius: 50%; /* Ajoute des bordures arrondies */
		border: 2px solid rgb(0, 0, 0); /* Ajoute une bordure blanche */
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Ajoute une ombre légère */
	}

/* Style de la barre de navigation */
.navbar {
	width: 200px; /* Largeur de la barre de navigation */
	display: flex; /* Utilisation de Flexbox */
	flex-direction: column; /* Alignement vertical des éléments */
	justify-content: center; /* Centre les éléments verticalement */
	align-items: center; /* Centre les éléments horizontalement */
}

/* Style des éléments de la liste */
.navbar ul {
	list-style-type: none;
	padding: 0;
	margin: 0;
}

.navbar li {
	margin: 10px 0; /* Espace entre chaque élément */
}

/* Style des liens */
.navbar a {
	color: #777; /* Couleur du texte gris */
	text-decoration: none; /* Supprime le soulignement par défaut */
	transition: color 0.3s; /* Transition pour une animation en douceur */
	font-size: 24px; /* Taille du texte */
	font-family: 'Helvetica', sans-serif;
}

/* Changement de couleur au survol */
.navbar a:hover {
	color: rgb(212, 162, 212); /* Couleur du texte au survol */
}

/* Style pour le menu déroulant */
.dropdown-content {
	display: none;
	position: absolute;
	background-color: #e9e9e9;
	min-width: 160px;
	box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
	z-index: 1;
	border-radius: 10%;
}

.dropdown-content a {
	display: block;
	padding: 10px 20px;
	color: #333;
	text-decoration: none;
}

.dropdown:hover .dropdown-content {
	display: block;
}
</style>