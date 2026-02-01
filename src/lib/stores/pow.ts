import { writable, derived } from 'svelte/store';
import type { PowMetadataJson, PowDiariesJson, ImageMetadata, DayStats, HeatmapData } from '../types';
import powMetadata from '../data/pow-metadata.json';
import powDiaries from '../data/pow-diaries.json';

// Type cast the imported JSON
const metadata = powMetadata as PowMetadataJson;
const diaries = powDiaries as PowDiariesJson;

// Store for selected year (defaults to current year or max year in data)
export const selectedYear = writable<number>(new Date().getFullYear());

// Store for selected day (YYYY-MM-DD format, null if none selected)
export const selectedDay = writable<string | null>(null);

/**
 * Get all years available in the metadata
 */
export function getAvailableYears(): number[] {
	const years = new Set<number>();
	Object.keys(metadata.images_by_date).forEach((dateStr) => {
		const year = parseInt(dateStr.substring(0, 4));
		years.add(year);
	});
	return Array.from(years).sort((a, b) => a - b);
}

/**
 * Calculate color intensity based on photo count
 * 0: no photos
 * 1: 1-2 photos (light sage)
 * 2: 3-5 photos (medium green)
 * 3: 6-8 photos (deep green)
 * 4: 9+ photos (blooming pink)
 */
export function getColorIntensity(count: number): 0 | 1 | 2 | 3 | 4 {
	if (count === 0) return 0;
	if (count <= 2) return 1;
	if (count <= 5) return 2;
	if (count <= 8) return 3;
	return 4;
}

/**
 * Get heatmap data for a specific year
 * Returns a map of date (YYYY-MM-DD) to DayStats
 */
export function getHeatmapDataForYear(year: number): Map<string, DayStats> {
	const yearData = new Map<string, DayStats>();

	// Get all dates in the year (Jan 1 - Dec 31)
	const startDate = new Date(year, 0, 1);
	const endDate = new Date(year, 11, 31);
	const currentDate = new Date(startDate);

	while (currentDate <= endDate) {
		const dateStr = currentDate.toISOString().split('T')[0];
		const count = metadata.images_by_date[dateStr]?.length || 0;
		const intensity = getColorIntensity(count);

		yearData.set(dateStr, {
			date: dateStr,
			count,
			intensity
		});

		currentDate.setDate(currentDate.getDate() + 1);
	}

	return yearData;
}

/**
 * Get photos for a specific day
 * Filters for gallery images only (600px card versions)
 */
export function getPhotosForDay(dateStr: string): ImageMetadata[] {
	const allImages = metadata.images_by_date[dateStr] || [];
	// Return only gallery images (not thumbs, MOVs, or depths)
	return allImages.filter((img) => img.type === 'gallery');
}

/**
 * Get diary entry for a specific day
 */
export function getDiaryForDay(dateStr: string): string | null {
	const entry = (diaries as any).entries?.[dateStr];
	return entry?.entry || null;
}

/**
 * Get week data for calendar grid rendering
 * Returns array of 7-day weeks for the year
 */
export function getWeeksForYear(year: number): DayStats[][] {
	const heatmapData = getHeatmapDataForYear(year);

	// Start from Jan 1, group by weeks
	const weeks: DayStats[][] = [];
	let currentWeek: DayStats[] = [];

	// Create Jan 1 of that year
	const jan1 = new Date(year, 0, 1);
	const dayOfWeek = jan1.getDay(); // 0 = Sunday, 1 = Monday, etc.

	// Add empty slots before Jan 1 if needed (Sunday = 0, so we want Mon-Sun)
	// Actually, let's start weeks on Monday (ISO week)
	for (let i = 0; i < dayOfWeek; i++) {
		currentWeek.push({
			date: '',
			count: 0,
			intensity: 0
		});
	}

	// Iterate through all days in the year
	const startDate = new Date(year, 0, 1);
	const endDate = new Date(year, 11, 31);
	const currentDate = new Date(startDate);

	while (currentDate <= endDate) {
		const dateStr = currentDate.toISOString().split('T')[0];
		const stats = heatmapData.get(dateStr) || {
			date: dateStr,
			count: 0,
			intensity: 0
		};

		currentWeek.push(stats);

		// If we have 7 days, push week and start new one
		if (currentWeek.length === 7) {
			weeks.push(currentWeek);
			currentWeek = [];
		}

		currentDate.setDate(currentDate.getDate() + 1);
	}

	// Push final week if it has any days
	if (currentWeek.length > 0) {
		weeks.push(currentWeek);
	}

	return weeks;
}

/**
 * Derived store for current year's heatmap weeks
 */
export const currentYearWeeks = derived(selectedYear, ($selectedYear) => {
	return getWeeksForYear($selectedYear);
});

/**
 * Derived store for current day's photos
 */
export const currentDayPhotos = derived(selectedDay, ($selectedDay) => {
	if (!$selectedDay) return [];
	return getPhotosForDay($selectedDay);
});

/**
 * Derived store for current day's diary
 */
export const currentDayDiary = derived(selectedDay, ($selectedDay) => {
	if (!$selectedDay) return null;
	return getDiaryForDay($selectedDay);
});

/**
 * Get the year range available in metadata
 */
export function getYearRange(): [number, number] {
	// date_range is a string like "2021-03-08 to 2026-01-27"
	const rangeStr = (metadata as any).stats?.date_range || '2021-01-01 to 2026-12-31';
	const [startDateStr, endDateStr] = rangeStr.split(' to ');
	const startYear = parseInt(startDateStr.substring(0, 4));
	const endYear = parseInt(endDateStr.substring(0, 4));
	return [startYear, endYear];
}
