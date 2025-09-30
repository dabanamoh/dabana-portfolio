# Decap CMS Setup - Mohammed Dabana Portfolio

## Overview
This portfolio website now uses Decap CMS for content management, allowing easy updates to case studies, site settings, and SEO configuration without editing code directly.

## CMS Features Implemented

### ✅ Content Collections
- **Case Studies**: Full CRUD operations with markdown content
- **Site Settings**: Global configuration, theme colors, contact info
- **SEO Settings**: Meta tags, analytics, social sharing
- **Homepage Content**: Hero section, skills, about content

### ✅ CMS Capabilities
- Theme color management with CSS variables
- Featured content selection
- Case study duplication and editing
- Responsive image management
- Markdown content editing
- YAML frontmatter support

### ✅ Technical Implementation
- Hybrid content loading (CMS first, fallback to static)
- CSS variable theming system
- Async content loading with loading states
- Error handling and graceful degradation

## File Structure
```
/
├── admin/
│   ├── index.html          # CMS admin interface
│   └── config.yml          # CMS configuration
├── content/
│   ├── case-studies/       # Markdown case study files
│   ├── settings/           # YAML configuration files
│   └── pages/              # Page content files
├── images/uploads/         # CMS uploaded images
└── js/
    └── cms-loader.js       # Content management system
```

## Using the CMS

### Accessing the Admin Interface
1. Navigate to `/admin/` on your website
2. Authenticate using Netlify Identity (when deployed)
3. For local development, use the "Working with a Local Git Repository" option

### Managing Case Studies
1. Go to "Case Studies" in the CMS
2. Click "New Case Study" to create
3. Fill in all required fields (title, subtitle, category, etc.)
4. Use the rich text editor for overview, challenge, solution, and results
5. Add timeline entries, technologies, and stats
6. Upload images for hero image and gallery
7. Toggle "Featured" to display on homepage
8. Save and publish

### Updating Site Settings
1. Go to "Site Settings" → "Global Settings"
2. Update contact information, theme colors, social links
3. Changes will be applied immediately to the website

### SEO Management
1. Go to "Site Settings" → "SEO Settings"
2. Update meta titles, descriptions, keywords
3. Configure Google Analytics and Search Console

## Deployment Options

### Netlify (Recommended)
- Automatic builds from Git commits
- Built-in authentication
- Form handling
- Edge functions support

### Alternative Hosting
- Vercel with external authentication
- GitHub Pages with GitHub authentication
- Traditional hosting with self-managed auth
- Cloud providers (AWS, Azure, GCP)

## Local Development
1. Start the preview server: `node preview-server.js`
2. Access website at `http://localhost:8000`
3. Access CMS at `http://localhost:8000/admin/`
4. Use "Working with a Local Git Repository" for authentication

## Content Management Workflow
1. Create/edit content in the CMS admin
2. Content is saved as markdown files with YAML frontmatter
3. Website automatically loads content from files
4. Fallback to static data if CMS content unavailable
5. Changes are immediately reflected on the website

## Theme Customization
- Edit theme colors in CMS under "Site Settings" → "Global Settings"
- Colors are applied via CSS variables
- Changes are immediate without code modifications

## Technical Notes
- Content loading is hybrid: CMS first, static fallback
- All content changes are git-tracked for version control
- Images are optimized for web delivery
- Loading states provide smooth user experience
- Error handling ensures site stability

## Troubleshooting
- If CMS doesn't load, check browser console for errors
- Ensure all required files are present in `/content/` directory
- Verify server is serving static files correctly
- Check network requests in browser dev tools

## Future Enhancements
- Automated image optimization
- Content scheduling
- Multi-language support
- Advanced SEO features
- Performance monitoring
- A/B testing integration