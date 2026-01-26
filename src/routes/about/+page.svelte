<script lang="ts">
	import * as config from '$lib/config';
</script>

<svelte:head>
	<title>About - {config.site.title}</title>
</svelte:head>

<header class="page-header">
	<h1><a href="/">{config.site.title}</a></h1>
	<p class="subtitle">about the garden</p>
</header>

<h2>California, USA</h2>
<p>Here a gardn, there a gardn, everywhere a nostrgardn.</p>
<hr />

<h2>Mission</h2>
<p>&nbsp;</p>
<h3>nostrgardn</h3>
<p>
	We aim to be responsibile stewards of the gardn;<br />
	protecting, preserving, building, and celebrating our ecosystems and habitats.
</p>
<p>
	We tend this virtual space so to promote coding and practicing freedom technologies<br />
	within a tranquil surrounding of nature's thriving abundance.
</p>
<p>&nbsp;</p>
<h3>duobudo</h3>
<p>As a team, we strive to learn one thing at a time, together, and learn it well.</p>
<p>
	Further, we believe that the future is decentralized and that Nostr vibrates as did glastnost
	and gutenberg in their time.
</p>
<hr />

<h2>How it works</h2>
<p>&nbsp;</p>
<p>
	This site reads posts from a specific nostr relay and displays images from selected kind 1
	events.
</p>
<p>We determine which posts to display by this decision tree:<br />&nbsp;</p>
<ol>
	<li>
		Is the post coming from
		<a href="https://relay.tools/" target="_blank">our specific relay</a>?
	</li>
</ol>
<ul>
	<li><strong>Yes</strong>; continue:<br />&nbsp;</li>
</ul>

<ol start="2">
	<li>Is the post coming from our white label pubkey(s)?</li>
</ol>
<ul>
	<li>
		<strong>Yes! Print the full kind 1 event.</strong><br />
		<span style="font-style: italic;"
			>Future implementations may only display posts that meet specific conditions (have
			photos, use tags, etc.), but for now we display any k1 event.</span
		>
	</li>
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
	<li>
		<strong>Yes! Parse out the image(s) and display them.</strong><br />
		<span style="font-style: italic;"
			>We will not display textual content, though we may display metadata (author name,
			posted date, etc.)
		</span>
	</li>
	<li><strong>No</strong>. Sorry, you almost made it. Better luck next time.</li>
	<li style="font-style: italic;">
		Future implementations may include AI-driven image filters to assure that photos are
		nature-themed.
	</li>
</ul>
<hr />

<h2>Using NDK</h2>
<p>
	This site reads posts from a specific nostr relay and displays images from selected kind 1
	events...
</p>
<hr />

<h3>Lyrics in ma head</h3>
<blockquote>
	Lovin' the free and feelin' spirit<br />
	Of huggin' a tree when you get near it<br />
	Diggin' the snow and the rain<br />
	&nbsp; &nbsp; and the bright sunshine<br />
	Draggin' the line
</blockquote>

<style>
	.page-header {
		text-align: center;
		margin-bottom: var(--size-5);
	}

	.page-header h1 {
		color: var(--brand);
		font-size: clamp(2.5rem, 12vw, 6rem);
		font-weight: var(--font-weight-3);
		margin-block: var(--size-3);
		margin-bottom: 0;
	}

	.page-header h1 a {
		color: inherit;
		text-decoration: none;
	}

	.page-header h1 a:hover {
		color: white;
		text-shadow: rgb(58, 161, 130) 0px 0px 10px;
	}

	.subtitle {
		color: var(--text-2);
		font-size: var(--font-size-fluid-0);
		font-style: italic;
		margin-top: var(--size-1);
	}

	a {
		color: var(--brand);
	}

	a:hover {
		text-decoration: none;
		color: white;
		text-shadow: rgb(58, 161, 130) 0px 0px 10px;
	}

	p {
		font-size: var(--font-size-fluid-0);
		font-weight: var(--font-weight-2);
		line-height: 1.6;
	}
</style>
