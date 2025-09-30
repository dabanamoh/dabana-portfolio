# CMS Troubleshooting Guide

## Issue: CMS Changes Not Visible

If you're not seeing the content in the CMS, try these steps in order:

### Step 1: Clear Browser Cache
1. In your browser, press `Ctrl + Shift + R` (or `Cmd + Shift + R` on Mac) to hard refresh
2. Or open Developer Tools (F12) → Right-click refresh button → "Empty Cache and Hard Reload"

### Step 2: Check CMS Access
1. Go to: `http://127.0.0.1:8000/admin/`
2. You should see the Decap CMS interface
3. Click "Working with a Local Git Repository" when prompted

### Step 3: Verify Collections
In the CMS, you should see these sections:
- **Case Studies** (should show 4 entries)
- **Site Settings** (Global Settings, SEO Settings)
- **Portfolio Content** (Home Page)

### Step 4: If Still Not Working
Try opening the CMS in an incognito/private browser window:
1. Open new incognito window
2. Navigate to `http://127.0.0.1:8000/admin/`
3. Select "Working with a Local Git Repository"

### Step 5: Alternative Access Method
If the above doesn't work, try:
1. Close all browser windows
2. Open a fresh browser window
3. Type the URL manually: `http://127.0.0.1:8000/admin/`

### What You Should See in CMS:
- **Case Studies Collection**: 4 case studies listed
  - AI-Powered Customer Service Chatbot
  - E-commerce Platform Optimization  
  - Machine Learning Inventory Prediction
  - Mobile Payment App Launch

- **Site Settings**: Global settings and SEO configuration
- **Portfolio Content**: Home page content management

### If Content Still Not Showing:
The server might need a restart. Ask me to restart the server and try again.

### Expected Behavior:
- CMS should load without authentication errors
- All 4 case studies should be visible and editable
- You should be able to click on any case study to edit it
- All fields should be populated with current content