# Deployment Instructions for Dabana Portfolio

## 📋 Pre-Deployment Checklist

Your portfolio website is ready for deployment with the following features:
- ✅ Responsive design preserved (no visual changes made)
- ✅ Decap CMS integration for content management
- ✅ Proper file structure with .gitignore
- ✅ Updated README with current project info
- ✅ Node.js dependencies configured

## 🔧 Git Setup (Manual)

Since Git is not available on this system, please run these commands in a terminal where Git is installed:

### 1. Navigate to your project directory
```bash
cd "d:\Personal\Portfolio\My portfolio website\Dabana"
```

### 2. Initialize Git repository
```bash
git init
```

### 3. Add GitHub remote
```bash
git remote add origin https://github.com/dabanamoh/dabana-portfolio.git
```

### 4. Add all files
```bash
git add .
```

### 5. Commit changes
```bash
git commit -m "Initial commit: Portfolio website with Decap CMS integration

- Modern responsive portfolio website
- Decap CMS for content management  
- Case studies with markdown support
- Theme configuration and SEO settings
- Node.js development server
- Complete CMS admin interface"
```

### 6. Push to GitHub
```bash
git push -u origin main
```

## 🚀 Deployment Options

### Option 1: Netlify (Recommended for CMS)
1. **Connect Repository**: Link your GitHub repo to Netlify
2. **Build Settings**:
   - Build command: `npm install`
   - Publish directory: `./`
3. **Enable Netlify Identity**: For CMS authentication
4. **Deploy**: Automatic deployment on every push

### Option 2: Vercel
1. **Import Project**: Import from GitHub
2. **Build Settings**:
   - Framework: None (Static)
   - Build command: `npm install`
   - Output directory: `./`
3. **Deploy**: Automatic deployment

### Option 3: GitHub Pages
1. **Repository Settings**: Go to Settings > Pages
2. **Source**: Deploy from branch (main)
3. **Folder**: Root directory
4. **Note**: CMS requires external authentication setup

## 🎛️ CMS Configuration for Production

### Netlify Deployment
Update `admin/config.yml`:
```yaml
backend:
  name: git-gateway
  branch: main

# Update site_url to your actual domain
site_url: https://your-site-name.netlify.app
display_url: https://your-site-name.netlify.app
```

### Other Platforms
For non-Netlify deployments, update the backend configuration:
```yaml
backend:
  name: github
  repo: dabanamoh/dabana-portfolio
  branch: main
```

## 📁 Files Included in Repository

### Core Website Files
- `index.html` - Homepage
- `case-studies.html` - Case studies listing
- `case-study-detail.html` - Case study detail template
- `css/` - All stylesheets (design preserved)
- `js/` - JavaScript functionality with CMS integration
- `images/` - Image assets

### CMS Files
- `admin/` - Decap CMS admin interface
- `content/` - Markdown content and settings
- `js/cms-loader.js` - Content management system

### Configuration
- `package.json` - Node.js dependencies
- `preview-server.js` - Development server
- `.gitignore` - Git ignore rules
- `README.md` - Project documentation

## 🔒 Important Notes

1. **Design Preservation**: No visual changes were made to the frontend
2. **CMS Integration**: Content management works alongside existing design
3. **Fallback System**: Website works with or without CMS content
4. **Authentication**: CMS requires proper authentication setup for production

## 📞 Next Steps

1. Run the Git commands above to push to GitHub
2. Choose your preferred deployment platform
3. Configure CMS authentication if using Netlify
4. Test the CMS admin interface at `/admin/`
5. Start managing content through the CMS

## 🆘 Troubleshooting

### If CMS Admin doesn't load:
- Check that `/admin/` directory is deployed
- Verify authentication is configured
- Ensure proper HTTPS for production

### If content doesn't load:
- Check browser console for errors
- Verify content files are in `/content/` directory
- Test fallback to static data

## 📧 Support

For deployment assistance, contact: mohammed@dabana.com

---

Your portfolio website is ready for deployment with full CMS capabilities! 🎉