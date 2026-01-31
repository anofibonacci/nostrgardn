#!/usr/bin/env python3
"""
NostrGardn Proof of Work (PoW) Metadata Generator
Generates metadata for the visual history heatmap and strips GPS data from all photos.

Tasks:
1. Scans /pix for all images (IMG_*.jpeg, card_*.jpeg, thumb_*.jpeg, MOV, depth files)
2. Extracts EXIF metadata from JPEG files
3. Strips GPS location data from ALL images (privacy-first)
4. Generates pow-metadata.json (indexed by date, with technical specs)
5. Creates pow-diaries.json template (for future diary entries)
6. Validates filename dates vs EXIF DateTimeOriginal
7. Generates statistics report

Output files:
- pow-metadata.json    — Complete image metadata indexed by date
- pow-diaries.json     — Diary entry template (empty, ready for manual entries)
- pow-metadata-stats.json — Statistics and validation report
"""

import os
import json
import subprocess
from pathlib import Path
from datetime import datetime
from collections import defaultdict
import sys

# Configuration
PIX_DIR = Path("/home/pi/web-studio/projects/nostrgardn/build/pix")
OUTPUT_DIR = PIX_DIR.parent / "public" / "data"  # For SvelteKit static assets
BACKUP_DIR = PIX_DIR.parent / "backups" / f"pix-backup-{datetime.now().strftime('%Y%m%d-%H%M%S')}"

def run_exiftool_command(img_path, cmd_args):
    """Execute exiftool command safely."""
    try:
        result = subprocess.run(
            ["exiftool"] + cmd_args + [str(img_path)],
            capture_output=True,
            text=True,
            timeout=10
        )
        return result.stdout.strip() if result.returncode == 0 else None
    except Exception as e:
        print(f"⚠️  exiftool error on {img_path.name}: {str(e)}")
        return None

def get_exif_value(img_path, tag):
    """Get specific EXIF tag value."""
    output = run_exiftool_command(img_path, ["-s", "-S", f"-{tag}"])
    return output.strip() if output else None

def get_all_exif(img_path):
    """Get all EXIF data as JSON."""
    output = run_exiftool_command(img_path, ["-json"])
    try:
        data = json.loads(output) if output else []
        return data[0] if data else {}
    except json.JSONDecodeError:
        return {}

def strip_gps_from_image(img_path):
    """Remove all GPS location data from image file."""
    try:
        # Strip GPS tags and other location metadata
        result = subprocess.run(
            ["exiftool", "-GPSInfo=", "-GPSLatitude=", "-GPSLongitude=",
             "-GPSAltitude=", "-overwrite_original", str(img_path)],
            capture_output=True,
            text=True,
            timeout=10
        )
        return result.returncode == 0
    except Exception as e:
        print(f"⚠️  Failed to strip GPS from {img_path.name}: {str(e)}")
        return False

def extract_date_from_filename(filename):
    """Extract YYYYMMDD from filename like IMG_20210308_9071.jpeg"""
    parts = filename.split('_')
    if len(parts) >= 2 and len(parts[1]) == 8:
        date_str = parts[1]
        try:
            datetime.strptime(date_str, "%Y%m%d")
            return date_str
        except ValueError:
            return None
    return None

def validate_date_match(filename, exif_date_str):
    """Check if filename date matches EXIF DateTimeOriginal (YYYY:MM:DD HH:MM:SS)"""
    filename_date = extract_date_from_filename(filename)
    if not filename_date or not exif_date_str:
        return None

    try:
        exif_yyyymmdd = exif_date_str.split()[0].replace(':', '')
        return filename_date == exif_yyyymmdd
    except:
        return None

def build_metadata_entry(img_path, is_original=False):
    """Build metadata entry for a single image."""
    filename = img_path.name
    filename_date = extract_date_from_filename(filename)

    if not filename_date:
        return None

    exif = get_all_exif(img_path) if is_original else {}
    exif_datetime = exif.get('DateTimeOriginal', '')
    date_match = validate_date_match(filename, exif_datetime)

    year = int(filename_date[:4])
    month = int(filename_date[4:6])
    day = int(filename_date[6:8])
    date_iso = f"{year:04d}-{month:02d}-{day:02d}"

    entry = {
        "filename": filename,
        "date": date_iso,
        "year": year,
        "month": month,
        "day": day,
        "type": "gallery" if filename.startswith("IMG_") else "card" if filename.startswith("card_") else "thumb",
        "date_match": date_match
    }

    # Add EXIF technical metadata (for originals only)
    if is_original and exif:
        entry["exif"] = {
            "dateTimeOriginal": exif.get('DateTimeOriginal', ''),
            "camera": exif.get('Model', ''),
            "iso": exif.get('ISO', ''),
            "fNumber": exif.get('FNumber', ''),
            "exposureTime": exif.get('ExposureTime', ''),
            "focalLength": exif.get('FocalLength', ''),
            "software": exif.get('Software', ''),
            "whiteBalance": exif.get('WhiteBalance', ''),
            "flash": exif.get('Flash', ''),
            "orientation": exif.get('Orientation', '')
        }

    return entry

def get_all_images():
    """Get all image files, organized by type."""
    gallery = sorted(PIX_DIR.glob("IMG_*.jpeg"))
    cards = sorted(PIX_DIR.glob("card_IMG_*.jpeg"))
    thumbs = sorted((PIX_DIR / "thumbs").glob("thumb_*.jpeg")) if (PIX_DIR / "thumbs").exists() else []
    movs = sorted((PIX_DIR / "mov").glob("*.MOV")) if (PIX_DIR / "mov").exists() else []
    depths = sorted((PIX_DIR / "depth").glob("*-depth.jpeg")) if (PIX_DIR / "depth").exists() else []

    return {
        "gallery": gallery,
        "cards": cards,
        "thumbs": thumbs,
        "movs": movs,
        "depths": depths
    }

def main():
    print("🌱 NostrGardn Proof of Work Metadata Generator")
    print("=" * 60)
    print()

    # Create output directory
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    print(f"📁 Output: {OUTPUT_DIR}")
    print()

    # Get all images
    all_images = get_all_images()
    total_files = sum(len(v) for v in all_images.values())

    print(f"📸 Found {total_files} files:")
    print(f"  Gallery (IMG_*.jpeg):      {len(all_images['gallery'])}")
    print(f"  Cards (card_*.jpeg):       {len(all_images['cards'])}")
    print(f"  Thumbnails:                {len(all_images['thumbs'])}")
    print(f"  MOV videos:                {len(all_images['movs'])}")
    print(f"  Depth files:               {len(all_images['depths'])}")
    print()

    # Phase 1: Strip GPS from all images
    print("🔒 Phase 1: Stripping GPS location data from all files...")
    print()

    gps_stripped = 0
    gps_errors = 0

    all_to_process = (all_images['gallery'] + all_images['cards'] +
                      all_images['thumbs'] + all_images['movs'] + all_images['depths'])

    for idx, img_path in enumerate(all_to_process, 1):
        pct = (idx / len(all_to_process)) * 100
        bar_length = 40
        filled = int(bar_length * idx / len(all_to_process))
        bar = '█' * filled + '░' * (bar_length - filled)

        print(f"\r[{bar}] {idx}/{len(all_to_process)} ({pct:5.1f}%)", end='', flush=True)

        if strip_gps_from_image(img_path):
            gps_stripped += 1
        else:
            gps_errors += 1

    print()
    print(f"✅ GPS stripped from {gps_stripped} files")
    if gps_errors > 0:
        print(f"⚠️  Errors: {gps_errors} files")
    print()

    # Phase 2: Generate metadata
    print("📊 Phase 2: Generating metadata...")
    print()

    metadata_by_date = defaultdict(list)
    date_counts = defaultdict(int)
    date_match_issues = []

    for idx, img_path in enumerate(all_images['gallery'], 1):
        pct = (idx / len(all_images['gallery'])) * 100
        bar_length = 40
        filled = int(bar_length * idx / len(all_images['gallery']))
        bar = '█' * filled + '░' * (bar_length - filled)

        print(f"\r[{bar}] {idx}/{len(all_images['gallery'])} ({pct:5.1f}%)", end='', flush=True)

        entry = build_metadata_entry(img_path, is_original=True)
        if entry:
            metadata_by_date[entry['date']].append(entry)
            date_counts[entry['date']] += 1

            if entry['date_match'] is False:
                date_match_issues.append({
                    "file": img_path.name,
                    "expected_date": entry['date']
                })

    print()
    print()

    # Build complete metadata structure
    metadata = {
        "metadata_version": 1,
        "generated": datetime.now().isoformat(),
        "pix_directory": str(PIX_DIR),
        "images_by_date": dict(metadata_by_date),
        "stats": {
            "total_images": len(all_images['gallery']),
            "total_cards": len(all_images['cards']),
            "total_thumbnails": len(all_images['thumbs']),
            "total_movs": len(all_images['movs']),
            "total_depths": len(all_images['depths']),
            "date_range": f"{min(date_counts.keys())} to {max(date_counts.keys())}",
            "days_with_photos": len(date_counts),
            "photos_per_day": {
                "min": min(date_counts.values()),
                "max": max(date_counts.values()),
                "avg": sum(date_counts.values()) / len(date_counts)
            },
            "year_distribution": {}
        }
    }

    # Calculate year distribution
    for date_str, count in date_counts.items():
        year = int(date_str[:4])
        if year not in metadata["stats"]["year_distribution"]:
            metadata["stats"]["year_distribution"][year] = 0
        metadata["stats"]["year_distribution"][year] += count

    # Save pow-metadata.json
    metadata_path = OUTPUT_DIR / "pow-metadata.json"
    with open(metadata_path, 'w') as f:
        json.dump(metadata, f, indent=2)
    print(f"✅ Saved: {metadata_path}")

    # Generate pow-diaries.json template
    diaries = {
        "metadata_version": 1,
        "description": "Diary entries for each day in the garden. Add entries with date keys (YYYY-MM-DD)",
        "entries": {}
    }

    # Create empty entries for all days with photos
    for date_str in sorted(metadata_by_date.keys()):
        diaries["entries"][date_str] = {
            "date": date_str,
            "title": "",
            "entry": "",
            "photos": metadata_by_date[date_str]
        }

    diaries_path = OUTPUT_DIR / "pow-diaries.json"
    with open(diaries_path, 'w') as f:
        json.dump(diaries, f, indent=2)
    print(f"✅ Saved: {diaries_path}")

    # Generate statistics report
    stats = {
        "generation_timestamp": datetime.now().isoformat(),
        "gps_stripping": {
            "files_processed": len(all_to_process),
            "gps_stripped": gps_stripped,
            "errors": gps_errors
        },
        "metadata": metadata["stats"],
        "date_validation": {
            "total_files_checked": len(all_images['gallery']),
            "date_mismatches": len(date_match_issues),
            "issues": date_match_issues[:10] if date_match_issues else []
        },
        "year_range": f"2018–2026 available for UI dropdown"
    }

    stats_path = OUTPUT_DIR / "pow-metadata-stats.json"
    with open(stats_path, 'w') as f:
        json.dump(stats, f, indent=2)
    print(f"✅ Saved: {stats_path}")

    # Summary
    print()
    print("=" * 60)
    print("✅ GENERATION COMPLETE")
    print("=" * 60)
    print()
    print("📊 Summary:")
    print(f"  Total gallery images processed: {len(all_images['gallery'])}")
    print(f"  Days with photos: {metadata['stats']['days_with_photos']}")
    print(f"  Date range: {metadata['stats']['date_range']}")
    print(f"  Photos per day: {metadata['stats']['photos_per_day']['min']} – {metadata['stats']['photos_per_day']['max']} (avg: {metadata['stats']['photos_per_day']['avg']:.1f})")
    print()
    print("📁 Output files:")
    print(f"  ✅ pow-metadata.json (complete image metadata)")
    print(f"  ✅ pow-diaries.json (diary template, ready for entries)")
    print(f"  ✅ pow-metadata-stats.json (statistics & validation)")
    print()
    print("🔒 Privacy:")
    print(f"  GPS stripped from {gps_stripped} files")
    if gps_errors > 0:
        print(f"  ⚠️  {gps_errors} files had errors (check manually)")
    print()

    if date_match_issues:
        print(f"⚠️  Date validation: {len(date_match_issues)} filename/EXIF mismatches")
        print("  (This is usually OK—check if EXIF was edited)")
    else:
        print("✅ All filenames match EXIF dates perfectly")

    print()

if __name__ == "__main__":
    main()
