#!/usr/bin/env python3
"""
NostrGardn Image Pipeline - Resize and Optimize 1000+ Images
Converts high-res iPhone photos to web-optimized gallery, card, and thumbnail versions.

Process (from each original):
1. Creates 1200px gallery version (replaces original)
2. Creates 600px card version (card_*.jpeg)
3. Creates 200×200 square thumbnail (thumbs/thumb_*.jpeg)
"""

import os
import sys
from PIL import Image
from pathlib import Path
import time

# Configuration
PIX_DIR = Path("/home/pi/web-studio/projects/nostrgardn/build/pix")
THUMBS_DIR = PIX_DIR / "thumbs"
QUALITY = 85

# Image dimensions
GALLERY_WIDTH = 1200      # Gallery images: 1200px wide
CARD_WIDTH = 600          # Card images: 600px wide
THUMB_SIZE = (200, 200)   # Thumbnails: 200×200 square

def get_image_files():
    """Get all JPEG files in root pix directory (excluding subdirs)."""
    return sorted([f for f in PIX_DIR.glob("*.jpeg") if f.is_file()])

def process_single_image(img_path):
    """
    Process a single image: create gallery, card, and thumbnail versions.
    Returns tuple of (gallery_size, card_size, thumb_size) or (None, None, None) on error.
    """
    try:
        # Load original once
        with Image.open(img_path) as img:
            # Convert to RGB if needed
            if img.mode == 'RGBA':
                rgb_img = Image.new('RGB', img.size, (255, 255, 255))
                rgb_img.paste(img, mask=img.split()[3])
                img = rgb_img
            elif img.mode != 'RGB':
                img = img.convert('RGB')

            base_name = img_path.name.rsplit('.', 1)[0]  # Remove .jpeg
            aspect_ratio = img.height / img.width

            # 1. Create gallery version (1200px wide) - replaces original
            gallery_img = img.resize((GALLERY_WIDTH, int(GALLERY_WIDTH * aspect_ratio)), Image.LANCZOS)
            gallery_img.save(img_path, 'JPEG', quality=QUALITY, optimize=True)
            gallery_size = img_path.stat().st_size

            # 2. Create card version (600px wide)
            card_img = img.resize((CARD_WIDTH, int(CARD_WIDTH * aspect_ratio)), Image.LANCZOS)
            card_path = PIX_DIR / f"card_{base_name}.jpeg"
            card_img.save(card_path, 'JPEG', quality=QUALITY, optimize=True)
            card_size = card_path.stat().st_size

            # 3. Create thumbnail (200×200 square with center crop)
            img_width, img_height = img.size
            min_dim = min(img_width, img_height)

            # Center crop to square
            left = (img_width - min_dim) // 2
            top = (img_height - min_dim) // 2
            right = left + min_dim
            bottom = top + min_dim

            thumb_img = img.crop((left, top, right, bottom))
            thumb_img = thumb_img.resize(THUMB_SIZE, Image.LANCZOS)
            thumb_path = THUMBS_DIR / f"thumb_{base_name}.jpeg"
            thumb_img.save(thumb_path, 'JPEG', quality=QUALITY, optimize=True)
            thumb_size = thumb_path.stat().st_size

            return gallery_size, card_size, thumb_size

    except Exception as e:
        print(f"\n❌ Error processing {img_path.name}: {str(e)}")
        return None, None, None

def format_size(bytes_val):
    """Format bytes to human-readable size."""
    for unit in ['B', 'KB', 'MB']:
        if bytes_val < 1024:
            return f"{bytes_val:.1f}{unit}"
        bytes_val /= 1024
    return f"{bytes_val:.1f}GB"

def main():
    print("🌱 NostrGardn Image Pipeline - Starting Process")
    print("=" * 60)
    print()

    # Get list of images
    images = get_image_files()
    total = len(images)

    if total == 0:
        print("❌ No JPEG files found in pix directory!")
        sys.exit(1)

    print(f"📸 Found {total} images to process")
    print(f"📁 Output: {PIX_DIR}")
    print()
    print("Processing each image:")
    print("  1️⃣  Gallery version → 1200px (q85) [replaces original]")
    print("  2️⃣  Card version → 600px (q85)")
    print("  3️⃣  Thumbnail → 200×200 square (q85)")
    print()

    start_time = time.time()

    # Get original total size
    original_total_size = sum(f.stat().st_size for f in images)
    print(f"Original total size: {format_size(original_total_size)}")
    print()

    # Statistics
    gallery_total_size = 0
    card_total_size = 0
    thumb_total_size = 0
    successful = 0
    failed = 0
    errors = []

    # Process each image
    for idx, img_path in enumerate(images, 1):
        filename = img_path.name

        # Progress indicator
        pct = (idx / total) * 100
        bar_length = 40
        filled = int(bar_length * idx / total)
        bar = '█' * filled + '░' * (bar_length - filled)
        print(f"\r[{bar}] {idx}/{total} ({pct:5.1f}%) {filename[:30]:<30}", end='', flush=True)

        gallery_size, card_size, thumb_size = process_single_image(img_path)

        if gallery_size is None:
            failed += 1
            errors.append(filename)
        else:
            successful += 1
            gallery_total_size += gallery_size
            card_total_size += card_size
            thumb_total_size += thumb_size

    print()
    print()

    # Summary
    elapsed = time.time() - start_time
    mins, secs = divmod(elapsed, 60)

    print("=" * 60)
    print("✅ PROCESSING COMPLETE")
    print("=" * 60)
    print()
    print("📊 Statistics:")
    print(f"  ⏱️  Time elapsed: {int(mins)}m {int(secs)}s")
    print(f"  📸 Images processed: {successful}/{total}")
    if failed > 0:
        print(f"  ⚠️  Failed: {failed}")
    print()
    print("📦 Storage Summary:")
    print(f"  Original size:     {format_size(original_total_size)}")
    print(f"  Gallery (1200px):  {format_size(gallery_total_size)}")
    print(f"  Cards (600px):     {format_size(card_total_size)}")
    print(f"  Thumbs (200×200):  {format_size(thumb_total_size)}")
    print(f"  Total web files:   {format_size(gallery_total_size + card_total_size + thumb_total_size)}")
    print(f"  Space saved:       {format_size(original_total_size - gallery_total_size)} (gallery only)")
    print()
    print("📁 Output Files:")
    print(f"  Gallery versions:  {successful} originals in pix/")
    print(f"  Card versions:     {successful} in pix/card_*.jpeg")
    print(f"  Thumbnails:        {successful} in pix/thumbs/thumb_*.jpeg")
    print()

    if errors:
        print(f"⚠️  Failed files ({len(errors)}):")
        for filename in errors[:10]:  # Show first 10
            print(f"  - {filename}")
        if len(errors) > 10:
            print(f"  ... and {len(errors) - 10} more")
    else:
        print("🌱 All images processed successfully!")

    print()

if __name__ == "__main__":
    main()
