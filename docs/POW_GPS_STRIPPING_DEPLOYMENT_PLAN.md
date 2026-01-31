# GPS Stripping Deployment Plan
## NostrGardn Proof of Work (PoW) - Production Privacy Protocol

**Date:** January 31, 2026
**Purpose:** Ensure all served images have GPS location data stripped before public deployment

---

## Overview

All images in `/pix/` have GPS metadata stripped locally (via `generate_pow_metadata.py`). This document describes the process for stripping GPS from served images at deployment time to GoDaddy production.

---

## Strategy

We use `exiftool` to strip GPS metadata from all images before syncing to production. This happens **once at deployment**, not on every build.

### Timeline

1. **Pre-Deployment Check** — Verify GPS has been stripped locally
2. **Deployment Sync** — Copy clean images to GoDaddy
3. **Verification** — Spot-check production images to confirm GPS is gone

---

## Implementation

### Step 1: Create Deployment Script

**File:** `/home/pi/web-studio/projects/nostrgardn/scripts/deploy_pow_images.sh`

```bash
#!/bin/bash
# Deploy PoW images to GoDaddy with GPS stripped

PIX_DIR="/home/pi/web-studio/projects/nostrgardn/build/pix"
GODADDY_HOST="your-godaddy-host.com"
GODADDY_USER="your-sftp-user"
GODADDY_PATH="/home/user/public_html/nostrgardn/pix"

echo "🔒 Deploying PoW images with GPS protection..."

# 1. Verify local GPS stripping (should already be done)
echo "Verifying local GPS stripping..."
for file in $PIX_DIR/IMG_*.jpeg; do
  if exiftool "$file" | grep -q "GPS Position"; then
    echo "⚠️  WARNING: $file still has GPS data!"
  fi
done

# 2. Create temporary clean copy for deployment (optional extra safety)
TEMP_DEPLOY="/tmp/pix-clean-$(date +%s)"
cp -r "$PIX_DIR" "$TEMP_DEPLOY"

# 3. Strip GPS from temp copy (belt-and-suspenders approach)
echo "Stripping GPS from deployment copy..."
find "$TEMP_DEPLOY" -type f \( -name "*.jpeg" -o -name "*.MOV" \) -exec \
  exiftool -GPSInfo= -overwrite_original {} +

# 4. Deploy to GoDaddy via SFTP
echo "Uploading to production..."
lftp -u "$GODADDY_USER" "$GODADDY_HOST" << EOF
mirror -R --delete "$TEMP_DEPLOY" "$GODADDY_PATH"
quit
EOF

# 5. Verify production (spot check)
echo "Verifying production deployment..."
# (Could add remote exiftool check here if needed)

# 6. Cleanup
rm -rf "$TEMP_DEPLOY"
echo "✅ Deployment complete"
```

**To use:**
```bash
chmod +x /home/pi/web-studio/projects/nostrgardn/scripts/deploy_pow_images.sh
./deploy_pow_images.sh
```

---

### Step 2: Simpler Alternative (Manual Check)

If scripting is complex, manual approach:

```bash
# Before deployment, verify no GPS in any file
exiftool -GPS* /home/pi/web-studio/projects/nostrgardn/build/pix/**/*.jpeg

# Should return NO matches (empty output = good)
```

**Then deploy normally** (git push, GoDaddy sync, etc.)

---

### Step 3: Post-Deployment Verification

Check a random sample of production files:

```bash
# Spot-check one gallery image on production
exiftool https://your-domain.com/pix/IMG_20210308_9071.jpeg | grep GPS

# Should return nothing (GPS stripped)
```

---

## Why This Approach?

| Aspect | Benefit |
|--------|---------|
| **Local Stripping** | Privacy protection at source; reversible if needed |
| **Temp Deploy Copy** | Extra safety layer; original files untouched |
| **Belt-and-Suspenders** | Strip again at deploy time just to be sure |
| **Verification** | Confirm production is clean before going live |

---

## Alternative: Keep Original Originals

If you want to preserve original EXIF data locally but serve clean images:

1. Store originals in a **private backup** directory
2. Create a separate `/pix-served/` directory with GPS-stripped copies
3. Deploy from `/pix-served/`

This preserves historical EXIF metadata locally while protecting privacy on the web.

---

## Cron Job (Automated Regular Stripping)

Optionally, run GPS stripping on a schedule:

```bash
# /etc/cron.d/nostrgardn-gps-strip
# Weekly check: verify and re-strip any GPS data (paranoia mode)

0 2 * * 0 exiftool -GPS*= -overwrite_original \
  /home/pi/web-studio/projects/nostrgardn/build/pix/**/*.jpeg \
  2>> /var/log/nostrgardn-gps.log
```

---

## Quick Reference

| Task | Command |
|------|---------|
| Check for GPS in local files | `exiftool -GPS* /pix/*.jpeg` |
| Strip GPS from a file | `exiftool -GPSInfo= -overwrite_original file.jpeg` |
| Strip GPS from entire directory | `exiftool -GPS*= -overwrite_original /pix/**/*.jpeg` |
| Check production file | `exiftool image-url \| grep GPS` |

---

## Status

- ✅ Local GPS stripping: Implemented in `generate_pow_metadata.py`
- ⏳ Deployment script: Ready to create (above)
- ⏳ Regular verification: Can be automated via cron

---

**Next Step:** When ready to deploy PoW to production, run the deployment script or manual verification before syncing to GoDaddy.
