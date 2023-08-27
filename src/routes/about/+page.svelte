<script lang="ts">
	import * as config from '$lib/config';
</script>

<nav>
	<a href="/" class="title">
		<b>{config.title}</b>
	</a>
</nav>

<h2>California, USA</h2>
<p>Here a gardn, there a gardn, everywhere a nostrgardn.</p>
<hr />

<h2>Our Mission</h2>
<p>We aim to be responsibile stewards of the gardn;<br />
	protecting, preserving, building, and celebrating our ecosystems and habitats.
<p>We tend this virtual space so to promote coding and practicing freedom technologies<br />
	within a tranquil surrounding of nature's thriving abundance.</p>
<hr />

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
	<li>Does the post coming from this unknown pleb contain one of the requiried tags?</li>
</ol>
<ul>
	<li><strong>Yes</strong>; continue:</li>
	<li><strong>No</strong>; ignore it 😫<br />&nbsp;</li>
</ul>

<ol start="4">
	<li>Did the steadfast pleb include one or more images?</li>
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

<hr />

<h3>Lyrics in ma head</h3>
<blockquote>
	Lovin' the free and feelin' spirit<br />
	Of huggin' a tree when you get near it<br />
	Diggin' the snow & the rain & the bright sunshine<br />
	Draggin' the line, draggin' the line
</blockquote>

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
