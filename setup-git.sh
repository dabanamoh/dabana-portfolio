#!/bin/bash

# Git Repository Setup Script for Dabana Portfolio
# Run these commands in your terminal where Git is available

echo "Setting up Git repository for Dabana Portfolio..."

# Initialize Git repository
git init

# Add GitHub remote
git remote add origin https://github.com/dabanamoh/dabana-portfolio.git

# Add all files to staging
git add .

# Commit with initial message
git commit -m "Initial commit: Portfolio website with Decap CMS integration

- Modern responsive portfolio website
- Decap CMS for content management
- Case studies with markdown support
- Theme configuration and SEO settings
- Node.js development server
- Complete CMS admin interface"

# Push to GitHub
git push -u origin main

echo "Repository setup complete!"
echo "Your portfolio is now available at: https://github.com/dabanamoh/dabana-portfolio"