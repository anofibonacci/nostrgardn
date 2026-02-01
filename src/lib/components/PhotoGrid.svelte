<script lang="ts">
	import { onMount } from 'svelte';
	import type { ImageMetadata } from '../types';

	export let photos: ImageMetadata[] = [];

	let loadedImages = new Set<string>();
	let lightboxOpen = false;
	let lightboxIndex = 0;

	// Map photos to image paths
	function getCardImagePath(filename: string): string {
		// Transform IMG_*.jpeg -> card_IMG_*.jpeg (600px, for grid display)
		const baseName = filename.replace(/^IMG_/, 'card_IMG_');
		return `/pix/${baseName}`;
	}

	function getFullImagePath(filename: string): string {
		// Gallery image (1200px, for lightbox)
		return `/pix/${filename}`;
	}

	function setupIntersectionObserver() {
		if (typeof window === 'undefined') return;

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const img = entry.target as HTMLImageElement;
					const src = img.dataset.src;
					if (src) {
						img.src = src;
						img.classList.remove('lazy');
						loadedImages.add(src);
						observer.unobserve(img);
					}
				}
			});
		});

		const lazyImages = document.querySelectorAll('img.lazy');
		lazyImages.forEach((img) => observer.observe(img));
	}

	function openLightbox(index: number) {
		lightboxIndex = index;
		lightboxOpen = true;
	}

	function closeLightbox() {
		lightboxOpen = false;
	}

	onMount(() => {
		setupIntersectionObserver();
	});
</script>

<div class="photo-grid">
	{#each photos as photo, index (photo.filename)}
		<div class="photo-card" on:click={() => openLightbox(index)} role="button" tabindex="0">
			<img
				class="lazy"
				data-src={getCardImagePath(photo.filename)}
				alt={`Photo from ${photo.date}`}
				loading="lazy"
			/>
		</div>
	{/each}
</div>

{#if lightboxOpen}
	<div class="lightbox-overlay" on:click={closeLightbox} on:keydown={(e) => e.key === 'Escape' && closeLightbox()}>
		<div class="lightbox-content" on:click|stopPropagation>
			<button class="lightbox-close" on:click={closeLightbox} aria-label="Close lightbox">
				✕
			</button>

			<div class="lightbox-image-wrapper">
				<img src={getFullImagePath(photos[lightboxIndex].filename)} alt={`Photo from ${photos[lightboxIndex].date}`} />
			</div>

			<div class="lightbox-nav">
				{#if lightboxIndex > 0}
					<button
						class="lightbox-prev"
						on:click={() => {
							lightboxIndex--;
						}}
						aria-label="Previous photo"
					>
						←
					</button>
				{/if}

				<span class="lightbox-counter">
					{lightboxIndex + 1} / {photos.length}
				</span>

				{#if lightboxIndex < photos.length - 1}
					<button
						class="lightbox-next"
						on:click={() => {
							lightboxIndex++;
						}}
						aria-label="Next photo"
					>
						→
					</button>
				{/if}
			</div>
		</div>
	</div>
{/if}

<style>
	.photo-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: var(--size-4);
		margin-bottom: var(--size-7);
	}

	.photo-card {
		position: relative;
		overflow: hidden;
		border-radius: var(--radius-2);
		cursor: pointer;
		background-color: var(--color-bg-tertiary);
		aspect-ratio: 4/3;
		border: 1px solid var(--color-border);
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.photo-card:hover {
		transform: scale(1.02);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	}

	.photo-card img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.photo-card img.lazy {
		background-color: var(--color-bg-tertiary);
	}

	/* Lightbox styles */
	.lightbox-overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.8);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		animation: fadeIn 0.2s ease;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.lightbox-content {
		position: relative;
		width: 90%;
		max-width: 1000px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.lightbox-image-wrapper {
		width: 100%;
		max-height: 80vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.lightbox-image-wrapper img {
		max-width: 100%;
		max-height: 80vh;
		object-fit: contain;
	}

	.lightbox-close {
		position: absolute;
		top: -40px;
		right: 0;
		width: 40px;
		height: 40px;
		background: transparent;
		border: none;
		color: white;
		font-size: 24px;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: opacity 0.2s ease;
		z-index: 1001;
	}

	.lightbox-close:hover {
		opacity: 0.8;
	}

	.lightbox-nav {
		display: flex;
		gap: var(--size-4);
		margin-top: var(--size-4);
		align-items: center;
		justify-content: center;
	}

	.lightbox-prev,
	.lightbox-next {
		width: 40px;
		height: 40px;
		background-color: rgba(255, 255, 255, 0.2);
		border: 1px solid rgba(255, 255, 255, 0.3);
		border-radius: var(--radius-2);
		color: white;
		cursor: pointer;
		font-size: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: background-color 0.2s ease;
	}

	.lightbox-prev:hover,
	.lightbox-next:hover {
		background-color: rgba(255, 255, 255, 0.3);
	}

	.lightbox-counter {
		color: white;
		font-size: var(--font-size-0);
		min-width: 100px;
		text-align: center;
	}

	@media (max-width: 640px) {
		.photo-grid {
			grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
			gap: var(--size-3);
		}

		.lightbox-overlay {
			padding: var(--size-4);
		}

		.lightbox-content {
			width: 100%;
		}

		.lightbox-close {
			top: 10px;
			right: 10px;
		}
	}
</style>
