#!/bin/bash

# Create fonts directory if it doesn't exist
mkdir -p public/fonts

# Download Inter Bold font
echo "Downloading Inter Bold font..."
curl -L "https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap" -o public/fonts/inter.css
echo "Font CSS downloaded. You'll need to manually download the actual font files."

# Note to user
echo "Please note: For a production site, you should properly download and host the font files."
echo "For now, we're using Google Fonts in the CSS."