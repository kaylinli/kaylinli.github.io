---
layout: page
title: Coding Projects
permalink: /projects/
---
<head>
	<!-- <link rel="stylesheet" type="text/css" href="page.css"> -->
	<style>	
		.entry{
			/* --background-color: #F5F5F5; */
			display: grid;
			border-style: solid;
			border-color: #F5F5F5;
			grid-auto-rows: auto;
			padding: 5%;
			position: relative;
			box-sizing: border-box;
			border-radius: 5px;
		}

		img{
			object-fit: cover;
			width: 12em;
			height: 7em;
			padding:0em 0em 0em 0em;
		}

		.image{
			max-width: 100%;
			object-fit: cover;
			width: 12em;
			height: 7em;
			padding:0em 0em 0em 0em;
		}

		.grid{
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(180px, 2fr));
			grid-template-rows: auto auto auto;
			grid-column-gap: 0.5em;
			grid-row-gap: 1em;
		}

		.no-picture {
			margin-top: 0.5em;
		}

		#section{
			font-size: 0.7em;
		}

		#headline{
			font-size: 0.9em;
		}

		#date{
			font-size: 0.6em;
		}

	</style>
</head>

<h2>CS projects</h2>

<p>Here are some of the projects I've been working on!</p>

<section class="grid">

	<entry-component>
		<a slot="link" href="https://kaylinli.github.io/SentenceMosaicsWebsite/"></a>
		<img slot="imagesrc" src="/img/sentencemosaicswebsite.png">
		<span slot="headline">Sentence Mosaics website</span><br />
		<span slot="description">Developed website</span>
		<span slot="date" id="date">Sept 2020 - present</span></slot>
	</entry-component>

	<!-- <entry-component>
		<a slot="link" href="https://kaylinli.github.io/SentenceMosaicsWebsite/">
				<img src="/img/sentencemosaicswebsite.png">
		</a>
		<a slot="link" href="https://kaylinli.github.io/SentenceMosaicsWebsite/">
			<span id="headline">Sentence Mosaics website</span><br />
		</a>
		<span slot="description">Developed website</span>
		<span slot="date" id="date">Sept 2020 - present</span></slot>
	</entry-component> -->

	<div class="entry">
		<div class="image">
			<a href="https://kaylinli.github.io/SentenceMosaicsWebsite/">
				<img src="/img/sentencemosaicswebsite.png">
			</a>
		</div>
		<div class="text">
			<a href="https://kaylinli.github.io/SentenceMosaicsWebsite/">
				<span id="headline">Sentence Mosaics website</span><br />
				<span>Developed</span><br />
			</a>
			<span id="date">Sept 2020 - present</span><br />
		</div>
	</div>

	<div class="entry">
		<div class="image">
			<a href="https://github.com/shruthikmusukula/homeroom">
				<img src="/img/homeroomtask.png">
			</a>
		</div>
		<div class="text">
			<a href="https://github.com/shruthikmusukula/homeroom">
				<span id="headline">HomeRoom Developer</span><br />
				<span>Developed productivity app at HackIllinois</span><br />
			</a>
			<span id="date">Aug 2020</span><br />
		</div>
	</div>

	<div class="entry">
		<div class="image">
			<a href="https://github.com/shruthikmusukula/DiDAP">
				<img src="https://raw.githubusercontent.com/shruthikmusukula/DiDAP/master/fig1.PNG">
			</a>
		</div>
		<div class="text">
			<span id="section">MONTEREY, CA</span><br />
			<a href="https://github.com/shruthikmusukula/DiDAP">
				<span id="headline">Intern in Science Engineering Apprenticeship Program</span><br />
				<span id="section">Developed sonar data analysis platform at Naval Postgraduate School</span><br />
			</a>
			<span id="date">June-Aug 2019, 2020</span><br />
		</div>
	</div>

</section>
