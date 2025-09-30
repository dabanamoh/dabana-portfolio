# Mohammed Dabana - Portfolio Website

A modern, responsive portfolio website showcasing expertise in Product Management and AI solutions across Kenya, Ghana, and Nigeria.

## 🌟 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Case Studies**: Detailed project showcases with metrics and outcomes
- **Contact Integration**: Direct email and consultation booking
- **Fast Performance**: Optimized loading and smooth user experience
- **CMS Integration**: Decap CMS for easy content management

## 🛠 Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with responsive design patterns
- **Content Management**: Decap CMS
- **Server**: Node.js with Express
- **Fonts**: Inter font family from Google Fonts
- **Icons**: Font Awesome 6

## 📁 Project Structure

```
├── admin/                  # CMS admin interface
│   ├── index.html         # CMS admin panel
│   └── config.yml         # CMS configuration
├── content/               # CMS content files
│   ├── case-studies/      # Markdown case studies
│   ├── settings/          # Site configuration
│   └── pages/             # Page content
├── css/                   # Stylesheets
│   ├── style.css          # Main styles
│   ├── case-studies.css   # Case studies page styles
│   └── case-study-detail.css # Individual case study styles
├── js/                    # JavaScript files
│   ├── main.js            # Main application logic
│   ├── cms-loader.js      # CMS content loader
│   ├── case-studies.js    # Case studies functionality
│   ├── case-studies-data.js # Static case studies data
│   └── case-study-detail.js # Case study detail page
├── images/                # Image assets
│   └── uploads/           # CMS uploaded images
├── index.html             # Homepage
├── case-studies.html      # Case studies listing
├── case-study-detail.html # Case study detail template
├── preview-server.js      # Development server
└── package.json           # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/dabanamoh/dabana-portfolio.git
cd dabana-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
node preview-server.js
```

4. Open your browser and navigate to:
   - Website: `http://localhost:8000`
   - CMS Admin: `http://localhost:8000/admin/`

## 📝 Content Management

### Using Decap CMS

1. Access the admin interface at `/admin/`
2. For local development, use "Working with a Local Git Repository"
3. Create and edit case studies with rich content
4. Manage site settings, SEO, and theme configuration
5. Upload and manage images

### Content Types

- **Case Studies**: Project showcases with full details
- **Site Settings**: Global configuration and contact info
- **SEO Settings**: Meta tags and analytics
- **Homepage Content**: Hero section and skills

## 🎨 Customization

### Styling
- Edit CSS files in the `/css/` directory
- Maintain responsive design principles
- Follow the existing color scheme and typography

### Content
- Use the CMS admin interface for content updates
- Edit markdown files directly in `/content/` if needed
- Update settings in YAML files for configuration changes

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Recommended: Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm install`
3. Set publish directory: `./`
4. Enable Netlify Identity for CMS authentication

### Alternative Platforms
- Vercel
- GitHub Pages
- Traditional hosting providers

## 📊 Performance

- Optimized images with lazy loading
- Minimal JavaScript for fast loading
- CSS optimization for smooth animations
- Mobile-first responsive design

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

**Mohammed Dabana**
- Email: mohammed@dabana.com
- Phone: +254 111 456 789
- Location: Kenya, Ghana & Nigeria

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by Font Awesome
- Fonts by Google Fonts
- CMS powered by Decap CMS