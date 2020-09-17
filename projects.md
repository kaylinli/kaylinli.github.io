---
layout: page
title: Coding Projects
permalink: /projects/
---

<style>

	
	.entry{
		<!--background-color: #F5F5F5;-->
		display: grid;
		border-style: solid;
		border-color: #F5F5F5;
		grid-auto-rows: auto;
		padding: 5%;
		position: relative;
		box-sizing: border-box;
	}
	
	img{
		object-fit: cover;
		width: 12em;
		height: 7em;
		padding:0em 0em 0em 0em;
	}
	
	.image{
		max-width: 100%;
	}

	
	.text {
		<!--margin-bottom: 1em;-->
	}
	
	
	.grid{
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		grid-template-rows: auto auto auto;
		grid-column-gap: 0.5em;
		grid-row-gap: 1em;
		
	}
	
	.no-picture {
		margin-top:0.5em;
	}
	
	#section{
		font-size: 0.7em;
	}
	
	#headline{
		font-size: 0.9em;
		<!--margin-top: 30px;-->
	}
	
	#date{
		font-size: 0.6em;
	}

	
	
</style>

<h2>Writing</h2>

<p>Here are some of the projects I've been working on!</p>

<section class="grid">

	<div class="entry">
		<div class="image">
			<a href="https://lhsepic.com/7792/news/senior-graduation-goes-virtual/">
				<img src="https://lhsepic.com/wp-content/uploads/2020/05/20200527084631_IMG_7022.jpg">
			</a>
		</div>
		<div class="text">
			<a href="https://lhsepic.com/7792/news/senior-graduation-goes-virtual/">
				<span id="headline">HomeRoom Developer</span><br />
				<span>Developed productivity</span>
			</a>
			<span id="date">Aug 2020</span><br />
		</div>
	</div>

	<div class="entry">
		<div class="image">
			<a href="https://lhsepic.com/7792/news/senior-graduation-goes-virtual/">
				<img src="https://lhsepic.com/wp-content/uploads/2020/05/20200527084631_IMG_7022.jpg">
			</a>
		</div>
		<div class="text">
			<span id="section">MONTEREY, CA</span><br />
			<a href="https://lhsepic.com/7792/news/senior-graduation-goes-virtual/">
				<span id="headline">Intern in Science Engineering Apprenticeship Program</span><br />
				<span>Developed sonar data analysis platform at Naval Postgraduate School</span>
			</a>
			<span id="date">May 25, 2020</span><br />
		</div>
	</div>

</section>
