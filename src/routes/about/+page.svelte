<script lang="ts">
	import * as config from '$lib/config';
</script>

<nav>
	<a href="/" class="title">
		<b>{config.title}</b>
	</a>
</nav>
<h2><i>California, USA</i></h2>
<p>Digging holes, planting seeds, and watering so others may find inspiration and solace in our gardn.
</p>
<hr />
<h2>Our Mission</h2>
<p>To create a web presence enabled by nostr that celebrates our gardn 
	as well as other nostrgardns around the world.</p>
<p>&nbsp;</p>

<h2>How it works</h2>
<p>This site reads posts from a specific nostr relay and displays images from 
	selected kind 1 events.</p>
<p>We determine which posts to display by this decision tree:<br />&nbsp;</p>
<ol>
	<li>Is the post coming from our specific relay?</li>
</ol>
<ul>
	<li><strong>Yes</strong>; continue:<br />&nbsp;</li>
</ul>

<ol start="2">
	<li>Is the post coming from our white label pubkey(s)?</li>
</ol>
<ul>
	<li><strong>Yes! Print the full kind 1 event.</strong><br />
		<span style="font-style: italic;">Future implementations may only display posts that 
			meet specific conditions (have photos, use tags, etc.), but for now we display 
			any k1 event.</span></li>
	<li><strong>No, it's from another pubkey</strong>. Continue:<br />&nbsp;</li>
</ul>

<ol start="3">
	<li>Does the post coming contain one of the specified tags?</li>
</ol>
<ul>
	<li><strong>Yes</strong>; continue:</li>
	<li><strong>No</strong>; ignore it 😫<br />&nbsp;</li>
</ul>

<ol start="4">
	<li>Does the post coming contain one or more images?</li>
</ol>
<ul>
	<li><strong>Yes! Parse out the image(s) and display them.</strong><br />
		<span style="font-style: italic;">We will not display textual content, 
			though we may display metadata (author name, posted date, etc.)
		</span></li>
	<li><strong>No</strong>. Sorry, you almost made it. Better luck next time.</li>
	<li style="font-style: italic;">Future implementations may include AI-driven 
		image filters to assure that photos are nature-themed.</li>
</ul>

<style>

	a {
		font-size: 100px;
		color: inherit;
	}

	a:hover {
		text-decoration: none; /*needs this or else an underline shows*/
		color: white;
		text-shadow: rgb(58, 161, 130) 0px 0px 10px;
	}

	p {
		font-size: var(--font-size-fluid-1);
		font-weight: var(--font-weight-2);
		white-space: nowrap;
		word-break: normal;
		display: flex;
	}
</style>
