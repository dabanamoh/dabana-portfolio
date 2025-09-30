// Content Management System
// This service handles loading content from markdown files and YAML configuration

class CMSContentLoader {
    constructor() {
        this.cache = new Map();
        this.settings = null;
    }

    // Load case studies from CMS backend (Git Gateway with local backend)
    async loadCaseStudies() {
        if (this.cache.has('caseStudies')) {
            return this.cache.get('caseStudies');
        }

        try {
            // When using git-gateway with local_backend: true, 
            // we access content through the CMS API rather than direct file access
            
            // For now, we'll use the static data but in the structure expected by CMS
            // This ensures the frontend works while we have the CMS properly configured
            const staticData = this.getStaticCaseStudies();
            
            // Transform static data to match CMS format if needed
            const cmsFormattedData = {};
            Object.keys(staticData).forEach(key => {
                const study = staticData[key];
                cmsFormattedData[key] = {
                    ...study,
                    // Ensure all required fields are present
                    frontmatter: study,
                    content: study.overview || ''
                };
            });
            
            this.cache.set('caseStudies', cmsFormattedData);
            console.log('Loaded case studies from integrated data source:', cmsFormattedData);
            return cmsFormattedData;
        } catch (error) {
            console.error('Failed to load case studies:', error);
            // Fallback to static data if CMS content fails
            return this.getStaticCaseStudies();
        }
    }

    // Load site settings
    async loadSettings() {
        if (this.settings) {
            return this.settings;
        }

        try {
            const [globalResponse, seoResponse, homeResponse] = await Promise.all([
                fetch('/content/settings/global.yml'),
                fetch('/content/settings/seo.yml'),
                fetch('/content/pages/home.yml')
            ]);

            const settings = {
                global: globalResponse.ok ? this.parseYAML(await globalResponse.text()) : this.getDefaultGlobalSettings(),
                seo: seoResponse.ok ? this.parseYAML(await seoResponse.text()) : this.getDefaultSEOSettings(),
                home: homeResponse.ok ? this.parseYAML(await homeResponse.text()) : this.getDefaultHomeSettings()
            };

            this.settings = settings;
            return settings;
        } catch (error) {
            console.error('Failed to load settings:', error);
            return this.getDefaultSettings();
        }
    }

    // Parse markdown with YAML frontmatter
    parseMarkdownWithFrontmatter(content) {
        const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
        const match = content.match(frontmatterRegex);

        if (match) {
            const frontmatter = this.parseYAML(match[1]);
            const markdownContent = match[2];
            return {
                frontmatter,
                content: markdownContent
            };
        }

        return {
            frontmatter: {},
            content: content
        };
    }

    // Simple YAML parser (basic implementation)
    parseYAML(yamlString) {
        try {
            // This is a simplified YAML parser for basic key-value pairs
            // In production, you'd use a proper YAML library
            const lines = yamlString.split('\n');
            const result = {};
            let currentKey = null;
            let currentArray = null;
            let indentLevel = 0;

            for (let line of lines) {
                line = line.trim();
                if (!line || line.startsWith('#')) continue;

                if (line.includes(':')) {
                    const [key, ...valueParts] = line.split(':');
                    const value = valueParts.join(':').trim();
                    
                    if (value) {
                        // Simple value
                        if (value.startsWith('"') && value.endsWith('"')) {
                            result[key.trim()] = value.slice(1, -1);
                        } else if (value === 'true') {
                            result[key.trim()] = true;
                        } else if (value === 'false') {
                            result[key.trim()] = false;
                        } else if (!isNaN(value)) {
                            result[key.trim()] = Number(value);
                        } else {
                            result[key.trim()] = value;
                        }
                    } else {
                        // Object or array
                        currentKey = key.trim();
                        result[currentKey] = {};
                    }
                } else if (line.startsWith('-')) {
                    // Array item
                    if (!currentArray) {
                        currentArray = [];
                        if (currentKey) {
                            result[currentKey] = currentArray;
                        }
                    }
                    const item = line.substring(1).trim();
                    if (item.includes(':')) {
                        const [itemKey, itemValue] = item.split(':');
                        const obj = {};
                        obj[itemKey.trim()] = itemValue.trim().replace(/"/g, '');
                        currentArray.push(obj);
                    } else {
                        currentArray.push(item.replace(/"/g, ''));
                    }
                }
            }

            return result;
        } catch (error) {
            console.error('YAML parsing error:', error);
            return {};
        }
    }

    // Fallback to static data if CMS fails
    getStaticCaseStudies() {
        // Ensure featured studies are properly marked
        return {
            "ai-chatbot": {
                "id": "ai-chatbot",
                "title": "AI-Powered Customer Service Chatbot",
                "subtitle": "Intelligent automation that revolutionized customer support operations for TechCorp Ghana, achieving 85% faster response times and 40% improvement in customer satisfaction.",
                "category": "AI Automation",
                "client": "TechCorp Ghana",
                "duration": "4 months",
                "location": "Accra, Ghana",
                "teamSize": "6 people",
                "heroImage": "images/ai-chatbot/hero.jpg",
                "featured": true,
                "date": "2024-09-15T00:00:00.000Z",
                "stats": [
                    { "number": "85%", "label": "Faster Response" },
                    { "number": "40%", "label": "Higher Satisfaction" },
                    { "number": "$200K", "label": "Annual Savings" },
                    { "number": "24/7", "label": "Availability" }
                ],
                "technologies": [
                    { "icon": "fab fa-python", "name": "Python" },
                    { "icon": "fas fa-brain", "name": "TensorFlow" },
                    { "icon": "fas fa-comments", "name": "Dialogflow" }
                ]
            },
            "ecommerce-optimization": {
                "id": "ecommerce-optimization",
                "title": "E-commerce Platform Optimization",
                "subtitle": "Complete product strategy overhaul that transformed user experience and drove $2M in additional revenue for AfriShop Kenya through data-driven improvements and conversion optimization.",
                "category": "Product Management",
                "client": "AfriShop Kenya",
                "duration": "6 months",
                "location": "Nairobi, Kenya",
                "teamSize": "8 people",
                "heroImage": "images/ecommerce-optimization/hero.jpg",
                "featured": true,
                "date": "2024-08-01T00:00:00.000Z",
                "stats": [
                    { "number": "60%", "label": "Conversion Increase" },
                    { "number": "$2M", "label": "Revenue Impact" },
                    { "number": "45%", "label": "Better Retention" },
                    { "number": "3.2s", "label": "Page Load Time" }
                ],
                "technologies": [
                    { "icon": "fab fa-react", "name": "React Native" },
                    { "icon": "fab fa-node-js", "name": "Node.js" },
                    { "icon": "fas fa-database", "name": "PostgreSQL" }
                ]
            },
            "ml-inventory": {
                "id": "ml-inventory",
                "title": "Machine Learning Inventory Prediction",
                "subtitle": "Advanced ML pipeline that revolutionized inventory management for RetailMax Nigeria, reducing stock-outs by 45% and achieving 92% forecast accuracy across 50+ retail locations.",
                "category": "AI Automation",
                "client": "RetailMax Nigeria",
                "duration": "5 months",
                "location": "Lagos, Nigeria",
                "teamSize": "5 people",
                "heroImage": "images/ml-inventory/hero.jpg",
                "featured": true,
                "date": "2024-07-01T00:00:00.000Z",
                "stats": [
                    { "number": "45%", "label": "Reduced Stock-outs" },
                    { "number": "92%", "label": "Forecast Accuracy" },
                    { "number": "30%", "label": "Inventory Cost Reduction" },
                    { "number": "10K+", "label": "SKUs Managed" }
                ],
                "technologies": [
                    { "icon": "fab fa-python", "name": "Python" },
                    { "icon": "fas fa-brain", "name": "Scikit-learn" },
                    { "icon": "fas fa-chart-line", "name": "TensorFlow" }
                ]
            },
            "fintech-mobile": {
                "id": "fintech-mobile",
                "title": "Mobile Payment App Launch",
                "subtitle": "End-to-end product management of mobile payment application launch across Kenya, Ghana, and Nigeria, achieving 100K+ downloads and 4.8/5 rating in first month.",
                "category": "FinTech",
                "client": "PayWave Africa",
                "duration": "8 months",
                "location": "Kenya, Ghana, Nigeria",
                "teamSize": "12 people",
                "heroImage": "images/fintech-mobile/hero.jpg",
                "featured": true,
                "date": "2024-06-01T00:00:00.000Z",
                "stats": [
                    { "number": "100K+", "label": "Downloads" },
                    { "number": "3", "label": "Markets" },
                    { "number": "4.8/5", "label": "App Rating" },
                    { "number": "15+", "label": "Payment Methods" }
                ],
                "technologies": [
                    { "icon": "fab fa-react", "name": "React Native" },
                    { "icon": "fab fa-node-js", "name": "Node.js" },
                    { "icon": "fas fa-shield-alt", "name": "Security" }
                ]
            }
        };
    }

    // Default settings fallbacks
    getDefaultGlobalSettings() {
        return {
            siteTitle: "Mohammed Dabana - Product Manager & AI Expert",
            siteDescription: "Based across Kenya, Ghana & Nigeria, I'm a product manager and design expert specializing in AI automation and business solutions.",
            contact: {
                phone: "+254 111 456 789",
                email: "mohammed@dabana.com",
                location: "Kenya, Ghana & Nigeria"
            },
            themeColors: {
                primary: "#007bff",
                secondary: "#6c757d",
                accent: "#28a745"
            }
        };
    }

    getDefaultSEOSettings() {
        return {
            metaTitle: "Mohammed Dabana - Product Manager & AI Expert Portfolio",
            metaDescription: "Experienced Product Manager and AI Expert based across Kenya, Ghana & Nigeria. Specializing in AI automation, product strategy, and business solutions."
        };
    }

    getDefaultHomeSettings() {
        return {
            heroTitle: "Mohammed Dabana",
            heroSubtitle: "PRODUCT MANAGER",
            heroDescription: "Based across Kenya, Ghana & Nigeria, I'm a product manager and design expert."
        };
    }

    getDefaultSettings() {
        return {
            global: this.getDefaultGlobalSettings(),
            seo: this.getDefaultSEOSettings(),
            home: this.getDefaultHomeSettings()
        };
    }

    // Apply theme colors (disabled to preserve original design)
    async applyThemeColors() {
        // Theme colors are managed by the original CSS
        // This method is preserved for future use but doesn't modify the design
        console.log('Theme colors preserved - using original design');
    }
}

// Global CMS instance
window.CMS = new CMSContentLoader();