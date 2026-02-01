/**
 * Proof of Work (PoW) Feature Types
 * Visual history heatmap + day view galleries
 */

export interface ExifData {
	dateTimeOriginal: string;
	camera: string;
	iso: string;
	fNumber: string;
	exposureTime: string;
	focalLength: string;
	software: string;
	whiteBalance: string;
	flash: string;
	orientation: string;
}

export interface ImageMetadata {
	filename: string;
	date: string; // ISO format: YYYY-MM-DD
	year: number;
	month: number;
	day: number;
	type: 'gallery' | 'card' | 'thumb' | 'mov' | 'depth';
	date_match: string | null;
	exif: ExifData;
}

export interface PowMetadataJson {
	metadata_version: number;
	generated: string;
	pix_directory: string;
	images_by_date: Record<string, ImageMetadata[]>;
	stats: {
		total_images: number;
		total_cards: number;
		total_thumbnails: number;
		total_movs: number;
		total_depths: number;
		date_range: string; // Format: "YYYY-MM-DD to YYYY-MM-DD"
		days_with_photos: number;
		photos_per_day: {
			min: number;
			max: number;
			avg: number;
		};
		year_distribution: Record<string, number>;
	};
}

export interface DiaryEntryData {
	date: string; // ISO format: YYYY-MM-DD
	title?: string;
	entry: string;
	photos?: ImageMetadata[];
}

export interface PowDiariesJson {
	metadata_version: number;
	description: string;
	entries: Record<string, DiaryEntryData>;
}

export interface DayStats {
	date: string;
	count: number;
	intensity: 0 | 1 | 2 | 3 | 4;
}

export interface HeatmapData {
	year: number;
	weeks: DayStats[][];
}
