// Content Management System
// This service handles loading content from markdown files and YAML configuration

class CMSContentLoader {
    constructor() {
        this.cache = new Map();
        this.settings = null;
    }

    // Load case studies from markdown files
    async loadCaseStudies() {
        if (this.cache.has('caseStudies')) {
            return this.cache.get('caseStudies');
        }

        try {
            // For now, we'll use a hybrid approach where we fetch available case studies
            // In a real deployment, this would be handled by a build process or server-side rendering
            const caseStudyFiles = ['ai-chatbot', 'ecommerce-optimization', 'ml-inventory', 'fintech-mobile'];
            const caseStudies = {};

            for (const file of caseStudyFiles) {
                try {
                    const response = await fetch(`/content/case-studies/${file}.md`);
                    if (response.ok) {
                        const content = await response.text();
                        const parsed = this.parseMarkdownWithFrontmatter(content);
                        caseStudies[file] = {
                            id: file,
                            ...parsed.frontmatter,
                            content: parsed.content
                        };
                    }
                } catch (error) {
                    console.warn(`Failed to load case study: ${file}`, error);
                }
            }

            this.cache.set('caseStudies', caseStudies);
            return caseStudies;
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
                stats: [
                    { number: "85%", label: "Faster Response" },
                    { number: "40%", label: "Higher Satisfaction" },
                    { number: "$200K", label: "Annual Savings" },
                    { number: "24/7", label: "Availability" }
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
                stats: [
                    { number: "60%", label: "Conversion Increase" },
                    { number: "$2M", label: "Revenue Impact" },
                    { number: "45%", label: "Better Retention" },
                    { number: "3.2s", label: "Page Load Time" }
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