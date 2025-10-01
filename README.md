# Mohammed Dabana - Portfolio Website

A modern, responsive portfolio website for Mohammed Dabana featuring case studies, projects, and professional experience. Built with vanilla HTML, CSS, and JavaScript, integrated with Decap CMS for easy content management.

## 🌟 Features

- **Responsive Design**: Mobile-first design that works on all devices
- **Case Studies**: Detailed project showcases with interactive elements
- **Content Management**: Integrated Decap CMS for easy content updates
- **Modern UI**: Clean, professional design with smooth animations
- **Fast Loading**: Optimized static site for best performance
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🚀 Live Demo

Visit the live website: [https://dabanamoh.github.io/dabana-portfolio](https://dabanamoh.github.io/dabana-portfolio)

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Grid and Flexbox
- **CMS**: Decap CMS (formerly Netlify CMS)
- **Fonts**: Inter font family from Google Fonts
- **Icons**: Font Awesome icons
- **Hosting**: GitHub Pages

## 📁 Project Structure

```
├── index.html              # Homepage
├── case-studies.html       # Case studies listing page
├── case-study-detail.html  # Individual case study page
├── css/
│   ├── style.css          # Main stylesheet
│   ├── case-studies.css   # Case studies page styles
│   └── case-study-detail.css # Case study detail styles
├── js/
│   ├── main.js           # Main JavaScript functionality
│   ├── case-studies.js   # Case studies page logic
│   ├── case-study-detail.js # Case study detail logic
│   └── cms-loader.js     # CMS content loader
├── admin/
│   ├── index.html        # CMS admin interface
│   ├── config.yml        # CMS configuration
│   ├── cms-styles.css    # CMS styling
│   └── cms-init.js       # CMS initialization
├── content/
│   ├── case-studies/     # Case study markdown files
│   ├── settings/         # Site settings
│   └── pages/           # Page content
└── images/              # Image assets
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher)

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
npm run dev
```

4. Open your browser and navigate to:
   - Website: `http://localhost:8000`
   - CMS Admin: `http://localhost:8000/admin`

### Production Build

For production deployment:

```bash
npm run build
```

## 📝 Content Management

### Using the CMS

1. Navigate to `/admin` on your live site
2. Log in with your credentials
3. Edit case studies, site settings, and page content
4. Changes are automatically saved to the repository

### Manual Content Updates

Case studies are stored as markdown files in `/content/case-studies/`. Each file contains:
- YAML frontmatter with metadata
- Markdown content for detailed sections

## 🎨 Customization

### Colors and Branding

Primary colors are defined in CSS custom properties:
- Primary: `#FF6B35` (Orange)
- Background: `#0F1419` (Dark)
- Text: `#FFFFFF` (White)
- Accent: `#A0A0A0` (Gray)

### Adding New Case Studies

1. Use the CMS admin interface, or
2. Create a new markdown file in `/content/case-studies/`
3. Follow the existing file structure for consistency

## 📱 Mobile Responsiveness

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🔧 Development

### Scripts

- `npm start` - Start HTTP server only
- `npm run cms-server` - Start CMS server only
- `npm run dev` - Start both servers concurrently
- `npm run build` - Production build (static site)

### Code Quality

- Semantic HTML5 markup
- Modern CSS with custom properties
- ES6+ JavaScript features
- Accessibility best practices
- Performance optimizations

## 🚀 Deployment

### GitHub Pages

1. Push changes to the main branch
2. Enable GitHub Pages in repository settings
3. Site deploys automatically

### Other Hosting Platforms

The site works on any static hosting platform:
- Netlify
- Vercel
- Firebase Hosting
- AWS S3 + CloudFront

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Mohammed Dabana**
- Portfolio: [dabanamoh.github.io/dabana-portfolio](https://dabanamoh.github.io/dabana-portfolio)
- LinkedIn: [Mohammed Dabana](https://linkedin.com/in/mohammed-dabana)
- Email: mohammed@dabana.com

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please reach out via:
- Email: mohammed@dabana.com
- LinkedIn: [Mohammed Dabana](https://linkedin.com/in/mohammed-dabana)

---

© 2024 Mohammed Dabana. All rights reserved.