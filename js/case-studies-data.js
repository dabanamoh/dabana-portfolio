// Static Case Studies Data
// This file contains all case study data as static JavaScript objects
// and provides the same API interface as the database for seamless integration

// All case study data in a single object
const caseStudiesData = {
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
        "overview": "\n                    <p>TechCorp Ghana, a leading technology solutions provider in West Africa, was struggling with overwhelming customer service demands. Their human support team was receiving over 500 inquiries daily, leading to response delays of 4-6 hours and declining customer satisfaction scores.</p>\n                    \n                    <p>I was brought in to design and implement an AI-powered chatbot solution that could handle routine inquiries automatically while seamlessly escalating complex issues to human agents. The project required careful analysis of customer communication patterns, natural language processing implementation, and integration with existing CRM systems.</p>\n                    \n                    <h3>Key Objectives</h3>\n                    <ul>\n                        <li>Reduce average response time from hours to minutes</li>\n                        <li>Handle 80% of routine inquiries automatically</li>\n                        <li>Maintain high customer satisfaction during the transition</li>\n                        <li>Integrate seamlessly with existing support workflows</li>\n                        <li>Support multiple local languages (English, Twi, Ga)</li>\n                    </ul>\n                ",
        "stats": [
            {
                "number": "85%",
                "label": "Faster Response"
            },
            {
                "number": "40%",
                "label": "Higher Satisfaction"
            },
            {
                "number": "$200K",
                "label": "Annual Savings"
            },
            {
                "number": "24/7",
                "label": "Availability"
            }
        ],
        "challenge": "\n                    <p>The main challenges included:</p>\n                    <ul>\n                        <li><strong>Language Complexity:</strong> Customers communicated in multiple local languages with varying dialects and informal expressions.</li>\n                        <li><strong>Context Understanding:</strong> Technical support queries required understanding of complex product relationships and troubleshooting flows.</li>\n                        <li><strong>Integration Complexity:</strong> The solution needed to integrate with 5 different systems including CRM, ticketing, and inventory management.</li>\n                        <li><strong>Staff Resistance:</strong> The support team was initially concerned about job security and workflow changes.</li>\n                        <li><strong>Data Quality:</strong> Historical support data was inconsistent and poorly categorized, making training challenging.</li>\n                    </ul>\n                ",
        "solution": "\n                    <p>I developed a comprehensive AI chatbot solution with the following components:</p>\n                    <ul>\n                        <li><strong>Multi-language NLP Engine:</strong> Custom-trained models for English, Twi, and Ga languages with local context understanding.</li>\n                        <li><strong>Intelligent Routing System:</strong> Smart escalation logic that routes complex queries to appropriate specialists.</li>\n                        <li><strong>Knowledge Base Integration:</strong> Dynamic connection to product documentation and troubleshooting guides.</li>\n                        <li><strong>Sentiment Analysis:</strong> Real-time emotion detection to prioritize urgent or frustrated customers.</li>\n                        <li><strong>Continuous Learning:</strong> Machine learning pipeline that improves responses based on customer feedback.</li>\n                        <li><strong>Staff Training Program:</strong> Comprehensive training for support agents on working alongside AI systems.</li>\n                    </ul>\n                ",
        "timeline": [
            {
                "date": "Week 1-2",
                "title": "Discovery & Analysis",
                "description": "Analyzed 6 months of customer support data, identified patterns, and conducted stakeholder interviews."
            },
            {
                "date": "Week 3-6",
                "title": "AI Model Development",
                "description": "Developed and trained NLP models using customer data, created multi-language processing capabilities."
            },
            {
                "date": "Week 7-10",
                "title": "System Integration",
                "description": "Integrated chatbot with existing CRM, ticketing system, and knowledge base. Built admin dashboard."
            },
            {
                "date": "Week 11-14",
                "title": "Testing & Training",
                "description": "Conducted extensive testing, trained support staff, and refined bot responses based on feedback."
            },
            {
                "date": "Week 15-16",
                "title": "Launch & Optimization",
                "description": "Launched to production with gradual rollout, monitored performance, and made real-time optimizations."
            }
        ],
        "technologies": [
            {
                "icon": "fab fa-python",
                "name": "Python"
            },
            {
                "icon": "fas fa-brain",
                "name": "TensorFlow"
            },
            {
                "icon": "fas fa-comments",
                "name": "Dialogflow"
            },
            {
                "icon": "fas fa-database",
                "name": "MongoDB"
            },
            {
                "icon": "fab fa-aws",
                "name": "AWS"
            },
            {
                "icon": "fas fa-chart-bar",
                "name": "Analytics"
            }
        ],
        "gallery": [
            {
                "url": "images/ai-chatbot/chatbot-analytics-dashboard.jpg",
                "alt": "Chatbot Analytics Dashboard"
            },
            {
                "url": "images/ai-chatbot/nlp-training-interface.jpg",
                "alt": "NLP Training Interface"
            },
            {
                "url": "images/ai-chatbot/customer-conversation-flow.jpg",
                "alt": "Customer Conversation Flow"
            }
        ],
        "results": "\n                    <p>The AI chatbot implementation exceeded all expectations and delivered transformative results for TechCorp Ghana:</p>\n                    \n                    <p><strong>Operational Efficiency:</strong> The chatbot now handles 82% of all customer inquiries automatically, reducing the workload on human agents and allowing them to focus on complex technical issues that require human expertise.</p>\n                    \n                    <p><strong>Customer Experience:</strong> Average response time dropped from 4-6 hours to under 30 seconds for routine inquiries. Customer satisfaction scores improved from 3.2/5 to 4.5/5, with particular praise for the 24/7 availability and multilingual support.</p>\n                    \n                    <p><strong>Business Impact:</strong> The company saved approximately $200,000 annually in support costs while improving service quality. The solution also enabled them to scale customer support without proportionally increasing staff.</p>\n                ",
        "impactStats": [
            {
                "number": "500+",
                "label": "Daily Inquiries Handled"
            },
            {
                "number": "82%",
                "label": "Automation Rate"
            },
            {
                "number": "30 sec",
                "label": "Average Response Time"
            },
            {
                "number": "4.5/5",
                "label": "Customer Rating"
            }
        ],
        "testimonial": {
            "quote": "Mohammed's AI chatbot solution transformed our customer service operations completely. What used to take hours now happens in seconds, and our customers are happier than ever. The multilingual support was a game-changer for our diverse customer base.",
            "name": "Kwame Asante",
            "role": "Operations Director, TechCorp Ghana"
        }
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
        "overview": "\n                    <p>AfriShop Kenya, one of East Africa's largest e-commerce platforms, was experiencing declining conversion rates and increased customer churn despite growing traffic. Their platform, built three years prior, had become outdated with poor mobile experience and complex checkout processes.</p>\n                    \n                    <p>As the lead product manager, I conducted comprehensive user research, analyzed platform performance data, and developed a strategic roadmap to modernize the platform. The project involved redesigning the entire user journey, implementing advanced analytics, and optimizing for mobile-first commerce.</p>\n                    \n                    <h3>Strategic Focus Areas</h3>\n                    <ul>\n                        <li>Mobile-first user experience design</li>\n                        <li>Simplified checkout and payment processes</li>\n                        <li>Personalized product recommendations</li>\n                        <li>Performance optimization and speed improvements</li>\n                        <li>Advanced analytics and conversion tracking</li>\n                    </ul>\n                ",
        "stats": [
            {
                "number": "60%",
                "label": "Conversion Increase"
            },
            {
                "number": "$2M",
                "label": "Revenue Impact"
            },
            {
                "number": "45%",
                "label": "Better Retention"
            },
            {
                "number": "3.2s",
                "label": "Page Load Time"
            }
        ],
        "challenge": "\n                    <p>Key challenges identified through user research and data analysis:</p>\n                    <ul>\n                        <li><strong>Poor Mobile Experience:</strong> 70% of traffic was mobile, but conversion rate was only 1.2% compared to 4.8% on desktop.</li>\n                        <li><strong>Complex Checkout:</strong> 68% cart abandonment rate with average 7-step checkout process.</li>\n                        <li><strong>Slow Performance:</strong> Average page load time of 8.3 seconds causing high bounce rates.</li>\n                        <li><strong>Limited Payment Options:</strong> Only supported 3 payment methods in a market with diverse payment preferences.</li>\n                        <li><strong>Poor Search & Discovery:</strong> Users couldn't find products easily, with 45% of searches returning no results.</li>\n                        <li><strong>Lack of Personalization:</strong> Generic experience for all users with no product recommendations.</li>\n                    </ul>\n                ",
        "solution": "\n                    <p>I implemented a comprehensive platform optimization strategy:</p>\n                    <ul>\n                        <li><strong>Mobile-First Redesign:</strong> Completely rebuilt the mobile interface with touch-optimized navigation and responsive design.</li>\n                        <li><strong>Streamlined Checkout:</strong> Reduced checkout from 7 steps to 3, implemented guest checkout, and added one-click purchasing.</li>\n                        <li><strong>Performance Optimization:</strong> Implemented CDN, image optimization, and lazy loading to achieve sub-4 second load times.</li>\n                        <li><strong>Enhanced Payment Gateway:</strong> Integrated 8 popular payment methods including mobile money, bank transfers, and digital wallets.</li>\n                        <li><strong>AI-Powered Search:</strong> Implemented intelligent search with auto-complete, spell correction, and visual search capabilities.</li>\n                        <li><strong>Personalization Engine:</strong> Built recommendation system using collaborative filtering and browsing behavior analysis.</li>\n                    </ul>\n                ",
        "timeline": [
            {
                "date": "Month 1",
                "title": "Research & Strategy",
                "description": "Conducted user research, competitive analysis, and developed comprehensive optimization strategy."
            },
            {
                "date": "Month 2-3",
                "title": "Mobile Experience Redesign",
                "description": "Redesigned mobile interface, optimized for touch interactions, and improved navigation structure."
            },
            {
                "date": "Month 4",
                "title": "Checkout Optimization",
                "description": "Streamlined checkout process, integrated multiple payment gateways, and implemented security measures."
            },
            {
                "date": "Month 5",
                "title": "Performance & Search",
                "description": "Optimized platform performance, implemented AI-powered search, and enhanced product discovery."
            },
            {
                "date": "Month 6",
                "title": "Personalization & Analytics",
                "description": "Launched recommendation engine, implemented advanced analytics, and conducted A/B testing."
            }
        ],
        "technologies": [
            {
                "icon": "fab fa-react",
                "name": "React Native"
            },
            {
                "icon": "fab fa-node-js",
                "name": "Node.js"
            },
            {
                "icon": "fas fa-database",
                "name": "PostgreSQL"
            },
            {
                "icon": "fab fa-aws",
                "name": "AWS"
            },
            {
                "icon": "fas fa-search",
                "name": "Elasticsearch"
            },
            {
                "icon": "fas fa-chart-line",
                "name": "Google Analytics"
            }
        ],
        "gallery": [
            {
                "url": "images/ecommerce-optimization/mobile-app-interface.jpg",
                "alt": "Mobile App Interface"
            },
            {
                "url": "images/ecommerce-optimization/analytics-dashboard.jpg",
                "alt": "Analytics Dashboard"
            },
            {
                "url": "images/ecommerce-optimization/checkout-process-flow.jpg",
                "alt": "Checkout Process Flow"
            }
        ],
        "results": "\n                    <p>The platform optimization delivered exceptional results that transformed AfriShop's business performance:</p>\n                    \n                    <p><strong>Conversion Optimization:</strong> Overall conversion rate increased from 2.8% to 4.5%, with mobile conversion jumping from 1.2% to 3.8%. The streamlined checkout process reduced cart abandonment from 68% to 32%.</p>\n                    \n                    <p><strong>Revenue Growth:</strong> The improvements generated an additional $2 million in revenue within the first six months post-launch, with a 60% increase in average order value due to better product discovery and recommendations.</p>\n                    \n                    <p><strong>User Experience:</strong> Customer satisfaction scores improved from 3.1/5 to 4.3/5, with significant improvements in mobile user ratings. Session duration increased by 85% and bounce rate decreased by 40%.</p>\n                ",
        "impactStats": [
            {
                "number": "4.5%",
                "label": "Overall Conversion Rate"
            },
            {
                "number": "3.8%",
                "label": "Mobile Conversion"
            },
            {
                "number": "32%",
                "label": "Cart Abandonment"
            },
            {
                "number": "85%",
                "label": "Session Duration Increase"
            }
        ],
        "testimonial": {
            "quote": "Mohammed's strategic approach to our platform optimization was exactly what we needed. His deep understanding of e-commerce user behavior and technical expertise delivered results beyond our expectations. The $2M revenue increase speaks for itself.",
            "name": "Sarah Wanjiku",
            "role": "CEO, AfriShop Kenya"
        }
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
        "overview": "\n                    <p>RetailMax Nigeria, a leading retail chain with 50+ locations across Nigeria, was struggling with inventory management challenges that were costing them millions in lost sales and excess inventory. Their traditional forecasting methods were proving inadequate for the complex Nigerian retail market with its seasonal variations, regional preferences, and supply chain uncertainties.</p>\n                    \n                    <p>I was engaged to develop an AI-powered inventory prediction system that could analyze historical sales data, seasonal patterns, regional preferences, and external factors to optimize stock levels across all locations. The solution needed to handle the complexity of 10,000+ SKUs across diverse product categories.</p>\n                    \n                    <h3>Project Scope</h3>\n                    <ul>\n                        <li>Demand forecasting for 10,000+ SKUs across 50+ locations</li>\n                        <li>Integration with existing ERP and POS systems</li>\n                        <li>Real-time inventory optimization recommendations</li>\n                        <li>Automated reorder point calculations</li>\n                        <li>Regional and seasonal demand pattern analysis</li>\n                    </ul>\n                ",
        "stats": [
            {
                "number": "45%",
                "label": "Reduced Stock-outs"
            },
            {
                "number": "92%",
                "label": "Forecast Accuracy"
            },
            {
                "number": "30%",
                "label": "Inventory Cost Reduction"
            },
            {
                "number": "10K+",
                "label": "SKUs Managed"
            }
        ],
        "challenge": "\n                    <p>The inventory management challenges were multifaceted:</p>\n                    <ul>\n                        <li><strong>Data Complexity:</strong> 3 years of historical sales data across multiple locations with inconsistent data quality and missing records.</li>\n                        <li><strong>Regional Variations:</strong> Significant differences in demand patterns between Lagos, Abuja, and other regional markets.</li>\n                        <li><strong>Seasonal Fluctuations:</strong> Complex seasonal patterns influenced by local festivals, weather, and economic factors.</li>\n                        <li><strong>Supply Chain Disruptions:</strong> Frequent supplier delays and transportation challenges affecting stock availability.</li>\n                        <li><strong>Product Lifecycle Management:</strong> New product introductions and discontinuations requiring dynamic model adaptation.</li>\n                        <li><strong>Manual Processes:</strong> Existing inventory decisions were based on intuition and basic spreadsheet analysis.</li>\n                    </ul>\n                ",
        "solution": "\n                    <p>I developed a comprehensive machine learning solution with multiple components:</p>\n                    <ul>\n                        <li><strong>Data Pipeline:</strong> Automated ETL processes to clean and integrate data from POS systems, ERP, and external sources.</li>\n                        <li><strong>Feature Engineering:</strong> Created 200+ features including seasonality indices, regional preferences, promotional impacts, and weather correlations.</li>\n                        <li><strong>Ensemble Models:</strong> Combined LSTM neural networks, Random Forest, and XGBoost models for superior accuracy.</li>\n                        <li><strong>Regional Clustering:</strong> Grouped similar stores using clustering algorithms to improve prediction accuracy.</li>\n                        <li><strong>Real-time API:</strong> Built RESTful API for real-time demand predictions and inventory recommendations.</li>\n                        <li><strong>Dashboard Interface:</strong> Created intuitive dashboards for inventory managers with actionable insights and alerts.</li>\n                    </ul>\n                ",
        "timeline": [
            {
                "date": "Month 1",
                "title": "Data Analysis & Strategy",
                "description": "Analyzed historical data, identified patterns, and developed ML strategy and architecture."
            },
            {
                "date": "Month 2",
                "title": "Data Pipeline Development",
                "description": "Built automated data collection and preprocessing pipelines, established data quality measures."
            },
            {
                "date": "Month 3",
                "title": "Model Development",
                "description": "Developed and trained ensemble ML models, conducted extensive feature engineering and optimization."
            },
            {
                "date": "Month 4",
                "title": "System Integration",
                "description": "Integrated models with existing systems, built API endpoints and real-time prediction capabilities."
            },
            {
                "date": "Month 5",
                "title": "Testing & Deployment",
                "description": "Conducted extensive testing, trained staff, and deployed to production with monitoring systems."
            }
        ],
        "technologies": [
            {
                "icon": "fab fa-python",
                "name": "Python"
            },
            {
                "icon": "fas fa-brain",
                "name": "Scikit-learn"
            },
            {
                "icon": "fas fa-chart-line",
                "name": "TensorFlow"
            },
            {
                "icon": "fas fa-database",
                "name": "PostgreSQL"
            },
            {
                "icon": "fab fa-docker",
                "name": "Docker"
            },
            {
                "icon": "fas fa-cloud",
                "name": "Azure ML"
            }
        ],
        "gallery": [
            {
                "url": "images/ml-inventory/ml-model-performance-dashboard.jpg",
                "alt": "ML Model Performance Dashboard"
            },
            {
                "url": "images/ml-inventory/inventory-analytics-interface.jpg",
                "alt": "Inventory Analytics Interface"
            },
            {
                "url": "images/ml-inventory/demand-forecasting-visualization.jpg",
                "alt": "Demand Forecasting Visualization"
            }
        ],
        "results": "\n                    <p>The machine learning inventory system delivered transformational results for RetailMax:</p>\n                    \n                    <p><strong>Operational Excellence:</strong> Stock-out incidents decreased by 45%, while excess inventory was reduced by 30%. The system accurately predicted demand for 92% of products, significantly outperforming the previous 73% accuracy of manual forecasting.</p>\n                    \n                    <p><strong>Financial Impact:</strong> Inventory carrying costs were reduced by $1.2M annually, while increased product availability led to $2.8M in additional revenue from reduced stock-outs.</p>\n                    \n                    <p><strong>Process Transformation:</strong> Inventory management shifted from reactive to proactive, with automated alerts and recommendations enabling the team to focus on strategic decisions rather than routine stock management.</p>\n                ",
        "impactStats": [
            {
                "number": "50+",
                "label": "Store Locations"
            },
            {
                "number": "92%",
                "label": "Prediction Accuracy"
            },
            {
                "number": "$1.2M",
                "label": "Cost Savings"
            },
            {
                "number": "$2.8M",
                "label": "Revenue Increase"
            }
        ],
        "testimonial": {
            "quote": "The ML inventory system Mohammed built for us was a complete game-changer. We went from constantly worrying about stock issues to having confidence in our inventory decisions. The 92% accuracy rate exceeded our wildest expectations.",
            "name": "Adebayo Ogundimu",
            "role": "Operations Manager, RetailMax Nigeria"
        }
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
        "overview": "\n                    <p>PayWave Africa approached me to lead the product management for launching their mobile payment application across three major African markets simultaneously. This was a complex undertaking requiring coordination with multiple regulatory bodies, financial institutions, and technology partners across different countries.</p>\n                    \n                    <p>The challenge was to create a unified payment experience that could adapt to local market preferences while maintaining consistent core functionality. Each market had different regulatory requirements, preferred payment methods, and user behaviors that needed to be accommodated.</p>\n                    \n                    <h3>Project Objectives</h3>\n                    <ul>\n                        <li>Launch in Kenya, Ghana, and Nigeria within 8 months</li>\n                        <li>Achieve regulatory compliance in all three markets</li>\n                        <li>Integrate with local mobile money and banking systems</li>\n                        <li>Reach 50K downloads in the first month</li>\n                        <li>Maintain 4+ star rating across app stores</li>\n                    </ul>\n                ",
        "stats": [
            {
                "number": "100K+",
                "label": "Downloads"
            },
            {
                "number": "3",
                "label": "Markets"
            },
            {
                "number": "4.8/5",
                "label": "App Rating"
            },
            {
                "number": "15+",
                "label": "Payment Methods"
            }
        ],
        "challenge": "\n                    <p>The multi-market launch presented several complex challenges:</p>\n                    <ul>\n                        <li><strong>Regulatory Complexity:</strong> Each country had different financial regulations, KYC requirements, and approval processes that needed careful navigation.</li>\n                        <li><strong>Technical Integration:</strong> Required integration with 15+ different payment providers, banks, and mobile money services across three markets.</li>\n                        <li><strong>User Experience Variations:</strong> Different markets had varying user preferences, from payment methods to UI/UX expectations.</li>\n                        <li><strong>Security Requirements:</strong> Meeting international security standards while complying with local data protection laws.</li>\n                        <li><strong>Market Competition:</strong> Entering markets with established players like M-Pesa, MTN Mobile Money, and traditional banking apps.</li>\n                    </ul>\n                ",
        "solution": "\n                    <p>I developed a comprehensive multi-market launch strategy:</p>\n                    <ul>\n                        <li><strong>Regulatory Strategy:</strong> Established relationships with central banks and regulatory bodies, ensuring compliance before technical development.</li>\n                        <li><strong>Modular Architecture:</strong> Built flexible app architecture that could adapt to different payment methods and local requirements.</li>\n                        <li><strong>Local Partnerships:</strong> Partnered with established financial institutions and mobile network operators in each market.</li>\n                        <li><strong>Phased Rollout:</strong> Implemented staged launch strategy starting with Kenya, then Ghana, followed by Nigeria.</li>\n                        <li><strong>Localization Focus:</strong> Adapted UI/UX for local languages, currencies, and cultural preferences.</li>\n                        <li><strong>Security First:</strong> Implemented advanced encryption, biometric authentication, and fraud detection systems.</li>\n                    </ul>\n                ",
        "timeline": [
            {
                "date": "Month 1-2",
                "title": "Market Research & Regulatory Planning",
                "description": "Conducted extensive market research, initiated regulatory applications, and established key partnerships."
            },
            {
                "date": "Month 3-5",
                "title": "Product Development & Integration",
                "description": "Developed core app functionality, integrated payment systems, and conducted security testing."
            },
            {
                "date": "Month 6",
                "title": "Kenya Launch",
                "description": "Launched in Kenya with M-Pesa integration, achieved 25K downloads in first two weeks."
            },
            {
                "date": "Month 7",
                "title": "Ghana Expansion",
                "description": "Expanded to Ghana with MTN Mobile Money integration, localized for local market preferences."
            },
            {
                "date": "Month 8",
                "title": "Nigeria Launch & Optimization",
                "description": "Completed Nigeria launch, achieved 100K total downloads, and optimized based on user feedback."
            }
        ],
        "technologies": [
            {
                "icon": "fab fa-react",
                "name": "React Native"
            },
            {
                "icon": "fab fa-node-js",
                "name": "Node.js"
            },
            {
                "icon": "fas fa-database",
                "name": "MongoDB"
            },
            {
                "icon": "fab fa-aws",
                "name": "AWS"
            },
            {
                "icon": "fas fa-shield-alt",
                "name": "Security"
            },
            {
                "icon": "fas fa-mobile-alt",
                "name": "Mobile APIs"
            }
        ],
        "gallery": [
            {
                "url": "images/fintech-mobile/mobile-payment-interface.jpg",
                "alt": "Mobile Payment Interface"
            },
            {
                "url": "images/fintech-mobile/payment-dashboard.jpg",
                "alt": "Payment Dashboard"
            },
            {
                "url": "images/fintech-mobile/multi-market-analytics.jpg",
                "alt": "Multi-Market Analytics"
            }
        ],
        "results": "\n                    <p>The multi-market launch exceeded all expectations and established PayWave as a major player in African fintech:</p>\n                    \n                    <p><strong>Market Penetration:</strong> Achieved 100K+ downloads in the first month, surpassing initial targets by 100%. The app quickly gained traction in all three markets with Kenya leading adoption.</p>\n                    \n                    <p><strong>User Satisfaction:</strong> Maintained a 4.8/5 average rating across app stores, with users praising the intuitive interface and reliable transaction processing.</p>\n                    \n                    <p><strong>Business Impact:</strong> Processing over $10M in monthly transactions within six months of launch, establishing sustainable revenue streams across all markets.</p>\n                ",
        "impactStats": [
            {
                "number": "100K+",
                "label": "Users Onboarded"
            },
            {
                "number": "$10M",
                "label": "Monthly Volume"
            },
            {
                "number": "99.9%",
                "label": "Uptime Achievement"
            },
            {
                "number": "3",
                "label": "Markets Conquered"
            }
        ],
        "testimonial": {
            "quote": "Mohammed's strategic approach to our multi-market launch was exceptional. His deep understanding of African financial ecosystems and regulatory landscapes made the impossible possible. We couldn't have achieved this success without his expertise.",
            "name": "David Okafor",
            "role": "CEO, PayWave Africa"
        }
    },
    "process-automation": {
        "id": "process-automation",
        "title": "Business Process Automation Suite",
        "subtitle": "Comprehensive automation system for agricultural data processing that eliminated 30+ hours of manual work weekly and reduced operational costs by 35% for AgriTech Solutions.",
        "category": "AI Automation",
        "client": "AgriTech Solutions",
        "duration": "6 months",
        "location": "Ghana",
        "teamSize": "7 people",
        "heroImage": "images/process-automation/hero.jpg",
        "featured": true,
        "overview": "\n                    <p>AgriTech Solutions, a leading agricultural technology company in Ghana, was struggling with manual data processing workflows that were consuming significant resources and introducing errors. Their team was spending over 30 hours weekly on repetitive tasks like data entry, report generation, and inventory management.</p>\n                    \n                    <p>I was engaged to design and implement a comprehensive business process automation suite that would streamline operations, reduce errors, and free up valuable human resources for more strategic activities. The solution needed to integrate with existing farm management systems and provide intelligent insights for decision-making.</p>\n                    \n                    <h3>Automation Scope</h3>\n                    <ul>\n                        <li>Automated data collection from IoT sensors and farm equipment</li>\n                        <li>Intelligent report generation and distribution</li>\n                        <li>Inventory management and procurement automation</li>\n                        <li>Quality control and compliance monitoring</li>\n                        <li>Customer communication and support automation</li>\n                    </ul>\n                ",
        "stats": [
            {
                "number": "30+",
                "label": "Hours Saved Weekly"
            },
            {
                "number": "35%",
                "label": "Cost Reduction"
            },
            {
                "number": "95%",
                "label": "Error Reduction"
            },
            {
                "number": "5",
                "label": "Processes Automated"
            }
        ],
        "challenge": "\n                    <p>The agricultural data processing challenges were multifaceted:</p>\n                    <ul>\n                        <li><strong>Manual Data Entry:</strong> Staff were manually entering data from various sources including sensors, equipment, and field reports.</li>\n                        <li><strong>Inconsistent Processes:</strong> Different team members followed varying procedures, leading to inconsistencies and errors.</li>\n                        <li><strong>Delayed Reporting:</strong> Critical reports were taking days to generate, impacting decision-making speed.</li>\n                        <li><strong>Integration Challenges:</strong> Multiple disconnected systems required manual data transfer between platforms.</li>\n                        <li><strong>Compliance Requirements:</strong> Agricultural regulations required detailed documentation and audit trails.</li>\n                        <li><strong>Scalability Issues:</strong> Manual processes couldn't scale with business growth.</li>\n                    </ul>\n                ",
        "solution": "\n                    <p>I developed a comprehensive automation ecosystem:</p>\n                    <ul>\n                        <li><strong>IoT Integration Hub:</strong> Automated data collection from 200+ sensors across farms, including soil moisture, temperature, and equipment status.</li>\n                        <li><strong>Intelligent Processing Engine:</strong> ML-powered system that validates, cleans, and processes incoming data automatically.</li>\n                        <li><strong>Automated Reporting:</strong> Dynamic report generation system that creates customized reports for different stakeholders.</li>\n                        <li><strong>Workflow Automation:</strong> Designed automated workflows for inventory management, procurement, and quality control processes.</li>\n                        <li><strong>Exception Handling:</strong> Built intelligent systems to flag anomalies and route them to appropriate team members.</li>\n                        <li><strong>Audit Trail System:</strong> Comprehensive logging system to meet compliance requirements and provide full traceability.</li>\n                    </ul>\n                ",
        "timeline": [
            {
                "date": "Month 1",
                "title": "Process Analysis & Design",
                "description": "Mapped existing workflows, identified automation opportunities, and designed new automated processes."
            },
            {
                "date": "Month 2-3",
                "title": "Core Automation Development",
                "description": "Built data collection automation, processing engines, and basic workflow automation systems."
            },
            {
                "date": "Month 4",
                "title": "Integration & Testing",
                "description": "Integrated with existing systems, conducted extensive testing, and refined automation rules."
            },
            {
                "date": "Month 5",
                "title": "Advanced Features & Training",
                "description": "Implemented intelligent reporting, exception handling, and trained staff on new processes."
            },
            {
                "date": "Month 6",
                "title": "Deployment & Optimization",
                "description": "Full deployment across all operations, monitored performance, and optimized based on real-world usage."
            }
        ],
        "technologies": [
            {
                "icon": "fab fa-python",
                "name": "Python"
            },
            {
                "icon": "fas fa-cogs",
                "name": "Apache Airflow"
            },
            {
                "icon": "fas fa-database",
                "name": "PostgreSQL"
            },
            {
                "icon": "fas fa-cloud",
                "name": "Azure"
            },
            {
                "icon": "fas fa-wifi",
                "name": "IoT Integration"
            },
            {
                "icon": "fas fa-chart-bar",
                "name": "Power BI"
            }
        ],
        "gallery": [
            {
                "url": "images/process-automation/automation-dashboard.jpg",
                "alt": "Automation Dashboard"
            },
            {
                "url": "images/process-automation/workflow-visualization.jpg",
                "alt": "Workflow Visualization"
            },
            {
                "url": "images/process-automation/data-processing-pipeline.jpg",
                "alt": "Data Processing Pipeline"
            }
        ],
        "results": "\n                    <p>The automation suite delivered transformational results for AgriTech Solutions:</p>\n                    \n                    <p><strong>Operational Efficiency:</strong> Eliminated over 30 hours of manual work weekly, allowing staff to focus on strategic initiatives and customer service. Data processing that previously took days now happens in real-time.</p>\n                    \n                    <p><strong>Cost Optimization:</strong> Achieved 35% reduction in operational costs through reduced manual labor, fewer errors, and improved resource utilization. The automation paid for itself within 4 months.</p>\n                    \n                    <p><strong>Quality Improvement:</strong> Reduced data errors by 95% through automated validation and processing, leading to more accurate insights and better decision-making across the organization.</p>\n                ",
        "impactStats": [
            {
                "number": "200+",
                "label": "Sensors Integrated"
            },
            {
                "number": "30+",
                "label": "Hours Saved Weekly"
            },
            {
                "number": "95%",
                "label": "Error Reduction"
            },
            {
                "number": "4 months",
                "label": "ROI Timeline"
            }
        ],
        "testimonial": {
            "quote": "The automation suite Mohammed built transformed our entire operation. What used to take our team days now happens automatically in minutes. The 95% reduction in errors alone has saved us countless hours of rework and improved our decision-making significantly.",
            "name": "Akosua Mensah",
            "role": "Operations Director, AgriTech Solutions"
        }
    },
    "ux-redesign": {
        "id": "ux-redesign",
        "title": "Healthcare Platform UX Redesign",
        "subtitle": "Comprehensive user experience research and redesign for healthcare booking platform that improved user engagement by 75% and reduced churn rate by 25% for MediConnect Ghana.",
        "category": "Design & UX",
        "client": "MediConnect Ghana",
        "duration": "5 months",
        "location": "Accra, Ghana",
        "teamSize": "6 people",
        "heroImage": "images/ux-redesign/hero.jpg",
        "featured": true,
        "overview": "\n                    <p>MediConnect Ghana, the country's leading healthcare booking platform, was experiencing declining user engagement and high churn rates despite growing market demand for digital healthcare services. Users were abandoning the platform during the booking process, and feedback indicated frustration with the complex interface.</p>\n                    \n                    <p>I led a comprehensive UX research and redesign project to transform the platform into an intuitive, accessible, and culturally appropriate healthcare solution. The project required deep understanding of diverse user demographics, healthcare provider workflows, and local healthcare practices.</p>\n                    \n                    <h3>Redesign Focus Areas</h3>\n                    <ul>\n                        <li>User journey optimization from search to appointment completion</li>\n                        <li>Accessibility improvements for diverse user capabilities</li>\n                        <li>Mobile-first design for Ghana's mobile-dominant market</li>\n                        <li>Cultural adaptation for local healthcare preferences</li>\n                        <li>Provider dashboard enhancement for medical professionals</li>\n                    </ul>\n                ",
        "stats": [
            {
                "number": "75%",
                "label": "Engagement Increase"
            },
            {
                "number": "25%",
                "label": "Churn Reduction"
            },
            {
                "number": "50%",
                "label": "More Appointments"
            },
            {
                "number": "4.6/5",
                "label": "User Rating"
            }
        ],
        "challenge": "\n                    <p>The UX challenges were complex and multifaceted:</p>\n                    <ul>\n                        <li><strong>Complex User Journey:</strong> The booking process involved 8+ steps with confusing navigation and unclear information hierarchy.</li>\n                        <li><strong>Accessibility Barriers:</strong> Platform wasn't accessible to users with visual impairments or limited digital literacy.</li>\n                        <li><strong>Cultural Disconnect:</strong> Interface didn't reflect local healthcare practices or cultural expectations around medical care.</li>\n                        <li><strong>Mobile Experience:</strong> Poor mobile experience despite 85% of users accessing via mobile devices.</li>\n                        <li><strong>Provider Frustration:</strong> Healthcare providers struggled with the complex dashboard for managing appointments and patient information.</li>\n                        <li><strong>Trust Issues:</strong> Users expressed concerns about data privacy and platform credibility.</li>\n                    </ul>\n                ",
        "solution": "\n                    <p>I implemented a user-centered redesign strategy:</p>\n                    <ul>\n                        <li><strong>Extensive User Research:</strong> Conducted 50+ user interviews, usability testing sessions, and cultural immersion research across Ghana.</li>\n                        <li><strong>Simplified User Journey:</strong> Reduced booking process from 8 steps to 3, with clear progress indicators and contextual help.</li>\n                        <li><strong>Accessibility First:</strong> Implemented WCAG 2.1 AA compliance with screen reader support, high contrast modes, and large touch targets.</li>\n                        <li><strong>Cultural Adaptation:</strong> Integrated local languages, culturally appropriate imagery, and healthcare practices familiar to Ghanaian users.</li>\n                        <li><strong>Mobile-First Design:</strong> Completely rebuilt mobile experience with touch-optimized interactions and offline capabilities.</li>\n                        <li><strong>Trust Building:</strong> Added provider verification badges, patient reviews, and clear privacy communications.</li>\n                    </ul>\n                ",
        "timeline": [
            {
                "date": "Month 1",
                "title": "User Research & Analysis",
                "description": "Conducted comprehensive user research, analyzed existing platform data, and identified key pain points."
            },
            {
                "date": "Month 2",
                "title": "Design Strategy & Wireframes",
                "description": "Developed design strategy, created user personas, and built detailed wireframes for all key user flows."
            },
            {
                "date": "Month 3",
                "title": "Visual Design & Prototyping",
                "description": "Created high-fidelity designs, interactive prototypes, and conducted initial usability testing."
            },
            {
                "date": "Month 4",
                "title": "Development & Integration",
                "description": "Worked with development team to implement designs, ensuring accessibility and performance standards."
            },
            {
                "date": "Month 5",
                "title": "Testing & Launch",
                "description": "Conducted extensive user testing, refined based on feedback, and launched new experience with monitoring."
            }
        ],
        "technologies": [
            {
                "icon": "fas fa-paint-brush",
                "name": "Figma"
            },
            {
                "icon": "fas fa-mobile-alt",
                "name": "Responsive Design"
            },
            {
                "icon": "fas fa-universal-access",
                "name": "Accessibility"
            },
            {
                "icon": "fas fa-users",
                "name": "User Research"
            },
            {
                "icon": "fas fa-chart-line",
                "name": "Analytics"
            },
            {
                "icon": "fas fa-language",
                "name": "Localization"
            }
        ],
        "gallery": [
            {
                "url": "images/ux-redesign/ux-research-process.jpg",
                "alt": "UX Research Process"
            },
            {
                "url": "images/ux-redesign/mobile-interface-design.jpg",
                "alt": "Mobile Interface Design"
            },
            {
                "url": "images/ux-redesign/user-testing-session.jpg",
                "alt": "User Testing Session"
            }
        ],
        "results": "\n                    <p>The UX redesign delivered exceptional improvements across all key metrics:</p>\n                    \n                    <p><strong>User Engagement:</strong> User engagement increased by 75% with session duration rising from 3 minutes to 8 minutes average. Users now complete the booking process at a 68% higher rate.</p>\n                    \n                    <p><strong>Accessibility Impact:</strong> The platform now serves users with visual impairments and limited digital literacy, expanding the user base by 30% and receiving recognition from Ghana's Disability Rights advocacy groups.</p>\n                    \n                    <p><strong>Business Growth:</strong> Appointment bookings increased by 50%, and the platform's Net Promoter Score improved from 32 to 71, indicating strong user satisfaction and likelihood to recommend.</p>\n                ",
        "impactStats": [
            {
                "number": "75%",
                "label": "Engagement Boost"
            },
            {
                "number": "68%",
                "label": "Completion Rate"
            },
            {
                "number": "71",
                "label": "Net Promoter Score"
            },
            {
                "number": "30%",
                "label": "User Base Growth"
            }
        ],
        "testimonial": {
            "quote": "Mohammed's approach to UX redesign was thorough and culturally sensitive. He didn't just improve our interface; he helped us understand our users better. The 75% increase in engagement speaks for itself, but more importantly, we're now serving our community more effectively.",
            "name": "Dr. Ama Sarpong",
            "role": "Founder & CEO, MediConnect Ghana"
        }
    },
    "ai-fraud-detection": {
        "id": "ai-fraud-detection",
        "title": "AI Fraud Detection System",
        "subtitle": "Developed machine learning-based fraud detection system that analyzes transaction patterns in real-time to identify and prevent fraudulent activities.",
        "category": "AI Automation",
        "client": "SecureBank Nigeria",
        "duration": "4 months",
        "location": "Lagos, Nigeria",
        "teamSize": "5 people",
        "heroImage": "images/ai-fraud-detection/hero.jpg",
        "featured": false,
        "overview": "\n                    <p>SecureBank Nigeria, one of West Africa's largest financial institutions, was experiencing a significant increase in fraudulent transactions that were costing them millions in losses annually. Their existing rule-based fraud detection system was generating too many false positives while missing sophisticated fraud patterns.</p>\n                    \n                    <p>I was tasked with developing an advanced AI-powered fraud detection system that could analyze transaction patterns in real-time, adapt to new fraud techniques, and minimize false positives while maximizing detection accuracy.</p>\n                ",
        "stats": [
            {
                "number": "87%",
                "label": "Detection Accuracy"
            },
            {
                "number": "$1.5M",
                "label": "Fraud Prevention"
            },
            {
                "number": "75%",
                "label": "False Positives Reduced"
            },
            {
                "number": "Real-time",
                "label": "Detection"
            }
        ],
        "challenge": "\n                    <p>The main challenges included:</p>\n                    <ul>\n                        <li><strong>Evolving Fraud Patterns:</strong> Fraudsters were constantly developing new techniques that bypassed traditional rule-based systems.</li>\n                        <li><strong>High False Positives:</strong> Existing system flagged 30% of legitimate transactions as fraudulent, causing customer frustration.</li>\n                        <li><strong>Real-time Processing:</strong> System needed to analyze transactions in milliseconds without impacting user experience.</li>\n                        <li><strong>Data Privacy:</strong> Solution had to comply with strict financial data protection regulations.</li>\n                    </ul>\n                ",
        "solution": "\n                    <p>I developed a comprehensive fraud detection solution:</p>\n                    <ul>\n                        <li><strong>Machine Learning Models:</strong> Ensemble of deep learning models trained on historical transaction data to identify complex fraud patterns.</li>\n                        <li><strong>Real-time Processing:</strong> Stream processing architecture that analyzes transactions within 50 milliseconds.</li>\n                        <li><strong>Adaptive Learning:</strong> Continuous learning system that updates models based on new fraud patterns and feedback.</li>\n                        <li><strong>Behavioral Analytics:</strong> User behavior profiling to detect anomalous activities that deviate from normal patterns.</li>\n                    </ul>\n                ",
        "timeline": [
            {
                "date": "Month 1",
                "title": "Data Analysis",
                "description": "Analyzed 2 years of transaction data to identify fraud patterns and system requirements."
            },
            {
                "date": "Month 2",
                "title": "Model Development",
                "description": "Developed and trained machine learning models using historical fraud data."
            },
            {
                "date": "Month 3",
                "title": "System Integration",
                "description": "Integrated fraud detection system with existing banking infrastructure."
            },
            {
                "date": "Month 4",
                "title": "Testing & Deployment",
                "description": "Conducted extensive testing and deployed system to production."
            }
        ],
        "technologies": [
            {
                "icon": "fab fa-python",
                "name": "Python"
            },
            {
                "icon": "fas fa-brain",
                "name": "TensorFlow"
            },
            {
                "icon": "fas fa-bolt",
                "name": "Apache Kafka"
            },
            {
                "icon": "fas fa-database",
                "name": "MongoDB"
            },
            {
                "icon": "fas fa-shield-alt",
                "name": "Security"
            }
        ],
        "gallery": [
            {
                "url": "images/ai-fraud-detection/fraud-detection-dashboard.jpg",
                "alt": "Fraud Detection Dashboard"
            },
            {
                "url": "images/ai-fraud-detection/fraud-analytics-interface.jpg",
                "alt": "Fraud Analytics Interface"
            }
        ],
        "results": "\n                    <p>The AI fraud detection system delivered exceptional results:</p>\n                    <p><strong>Fraud Prevention:</strong> Detected 87% of fraudulent transactions while reducing false positives by 75%.</p>\n                    <p><strong>Financial Impact:</strong> Prevented $1.5M in annual fraud losses.</p>\n                    <p><strong>User Experience:</strong> Reduced legitimate transaction blocks by 75%, improving customer satisfaction.</p>\n                ",
        "impactStats": [
            {
                "number": "87%",
                "label": "Detection Rate"
            },
            {
                "number": "$1.5M",
                "label": "Annual Savings"
            },
            {
                "number": "75%",
                "label": "False Positives Down"
            }
        ],
        "testimonial": {
            "quote": "Mohammed's fraud detection system has been a game-changer for our bank. The accuracy and real-time processing have saved us millions while improving our customers' experience.",
            "name": "Chinedu Okonkwo",
            "role": "CTO, SecureBank Nigeria"
        }
    },
    "edtech-platform": {
        "id": "edtech-platform",
        "title": "EdTech Platform Development",
        "subtitle": "Managed product development of an online learning platform tailored for African students, incorporating local languages and offline capabilities.",
        "category": "Product Management",
        "client": "LearnAfrica",
        "duration": "8 months",
        "location": "Cape Town, South Africa",
        "teamSize": "12 people",
        "heroImage": "images/edtech-platform/hero.jpg",
        "featured": false,
        "overview": "\n                    <p>LearnAfrica approached me to lead the development of an online learning platform specifically designed for African students. The platform needed to address unique challenges such as limited internet connectivity, diverse language requirements, and varying device capabilities.</p>\n                    \n                    <p>My role involved end-to-end product management, from market research and user experience design to technical implementation and launch strategy across multiple African markets.</p>\n                ",
        "stats": [
            {
                "number": "50K+",
                "label": "Active Students"
            },
            {
                "number": "8",
                "label": "Languages Supported"
            },
            {
                "number": "70%",
                "label": "Offline Usage"
            },
            {
                "number": "4.7/5",
                "label": "User Rating"
            }
        ],
        "challenge": "\n                    <p>Key challenges included:</p>\n                    <ul>\n                        <li><strong>Connectivity Issues:</strong> Many students had limited or unreliable internet access.</li>\n                        <li><strong>Language Diversity:</strong> Platform needed to support 8 different local languages.</li>\n                        <li><strong>Device Fragmentation:</strong> Students used a wide range of devices with varying capabilities.</li>\n                        <li><strong>Content Localization:</strong> Educational content needed to be culturally relevant to different African contexts.</li>\n                    </ul>\n                ",
        "solution": "\n                    <p>I developed a comprehensive solution addressing all challenges:</p>\n                    <ul>\n                        <li><strong>Offline-First Design:</strong> Platform works seamlessly offline with automatic sync when connectivity is restored.</li>\n                        <li><strong>Multilingual Support:</strong> Native support for 8 African languages with voice-over capabilities.</li>\n                        <li><strong>Adaptive Interface:</strong> Automatically adjusts to device capabilities and network conditions.</li>\n                        <li><strong>Localized Content:</strong> Curriculum adapted for different African educational systems and cultural contexts.</li>\n                    </ul>\n                ",
        "timeline": [
            {
                "date": "Month 1-2",
                "title": "Research & Planning",
                "description": "Conducted user research across 5 African countries and defined product requirements."
            },
            {
                "date": "Month 3-5",
                "title": "Development",
                "description": "Built core platform with offline capabilities and multilingual support."
            },
            {
                "date": "Month 6",
                "title": "Content Creation",
                "description": "Developed localized educational content for different markets."
            },
            {
                "date": "Month 7-8",
                "title": "Testing & Launch",
                "description": "Beta testing with 5,000 students followed by full market launch."
            }
        ],
        "technologies": [
            {
                "icon": "fab fa-react",
                "name": "React Native"
            },
            {
                "icon": "fab fa-node-js",
                "name": "Node.js"
            },
            {
                "icon": "fas fa-cloud",
                "name": "AWS"
            },
            {
                "icon": "fas fa-language",
                "name": "Localization"
            },
            {
                "icon": "fas fa-mobile",
                "name": "Offline-First"
            }
        ],
        "gallery": [
            {
                "url": "images/edtech-platform/edtech-platform-interface.jpg",
                "alt": "EdTech Platform Interface"
            },
            {
                "url": "images/edtech-platform/offline-mode-interface.jpg",
                "alt": "Offline Mode Interface"
            }
        ],
        "results": "\n                    <p>The EdTech platform achieved remarkable success:</p>\n                    <p><strong>User Adoption:</strong> Reached 50,000+ active students across 5 African countries within 6 months.</p>\n                    <p><strong>Engagement:</strong> 70% of usage occurs offline, demonstrating successful offline-first design.</p>\n                    <p><strong>User Satisfaction:</strong> Maintained 4.7/5 rating across all app stores.</p>\n                ",
        "impactStats": [
            {
                "number": "50K+",
                "label": "Students Reached"
            },
            {
                "number": "5",
                "label": "Countries"
            },
            {
                "number": "70%",
                "label": "Offline Usage"
            }
        ],
        "testimonial": {
            "quote": "Mohammed's approach to EdTech product development truly understands the African context. The platform's offline capabilities and local language support have made quality education accessible to thousands of students.",
            "name": "Nomsa Dlamini",
            "role": "CEO, LearnAfrica"
        }
    },
    "smart-logistics": {
        "id": "smart-logistics",
        "title": "Smart Logistics Optimization",
        "subtitle": "Implemented AI-powered route optimization and delivery scheduling system that reduced fuel costs and improved delivery times.",
        "category": "AI Automation",
        "client": "ExpressLogistics Kenya",
        "duration": "5 months",
        "location": "Nairobi, Kenya",
        "teamSize": "6 people",
        "heroImage": "images/smart-logistics/hero.jpg",
        "featured": false,
        "overview": "\n                    <p>ExpressLogistics Kenya, a major logistics company in East Africa, was facing increasing operational costs and delivery delays due to inefficient route planning and scheduling. With a fleet of 200+ vehicles serving 5 countries, manual planning was no longer sustainable.</p>\n                    \n                    <p>I led the implementation of an AI-powered logistics optimization system that would automatically calculate the most efficient routes, optimize delivery schedules, and provide real-time tracking and analytics.</p>\n                ",
        "stats": [
            {
                "number": "40%",
                "label": "Faster Delivery"
            },
            {
                "number": "25%",
                "label": "Fuel Savings"
            },
            {
                "number": "30%",
                "label": "Cost Reduction"
            },
            {
                "number": "200+",
                "label": "Vehicles Optimized"
            }
        ],
        "challenge": "\n                    <p>The logistics optimization challenges included:</p>\n                    <ul>\n                        <li><strong>Route Inefficiency:</strong> Drivers were taking suboptimal routes, leading to increased fuel costs and delivery delays.</li>\n                        <li><strong>Scheduling Complexity:</strong> Coordinating deliveries across 5 countries with varying traffic patterns and regulations.</li>\n                        <li><strong>Lack of Real-time Visibility:</strong> No real-time tracking of vehicles or delivery status for customers.</li>\n                        <li><strong>Data Fragmentation:</strong> Delivery data was scattered across multiple systems with no central analytics dashboard.</li>\n                    </ul>\n                ",
        "solution": "\n                    <p>I developed a comprehensive logistics optimization solution:</p>\n                    <ul>\n                        <li><strong>Route Optimization Engine:</strong> AI-powered system that calculates optimal routes based on traffic, weather, and delivery priorities.</li>\n                        <li><strong>Dynamic Scheduling:</strong> Real-time scheduling system that adjusts delivery plans based on new orders and traffic conditions.</li>\n                        <li><strong>Real-time Tracking:</strong> GPS tracking with customer notifications and delivery ETAs.</li>\n                        <li><strong>Analytics Dashboard:</strong> Centralized dashboard for monitoring performance metrics and identifying optimization opportunities.</li>\n                    </ul>\n                ",
        "timeline": [
            {
                "date": "Month 1",
                "title": "Requirements Analysis",
                "description": "Analyzed current logistics operations, identified pain points, and defined optimization requirements."
            },
            {
                "date": "Month 2",
                "title": "System Design",
                "description": "Designed AI algorithms for route optimization and developed system architecture."
            },
            {
                "date": "Month 3",
                "title": "Development & Integration",
                "description": "Built optimization engine and integrated with existing logistics management systems."
            },
            {
                "date": "Month 4",
                "title": "Testing & Training",
                "description": "Conducted pilot testing with 20 vehicles and trained logistics staff on new system."
            },
            {
                "date": "Month 5",
                "title": "Full Deployment",
                "description": "Rolled out system to entire fleet and established monitoring protocols."
            }
        ],
        "technologies": [
            {
                "icon": "fab fa-python",
                "name": "Python"
            },
            {
                "icon": "fas fa-route",
                "name": "Routing Algorithms"
            },
            {
                "icon": "fas fa-map-marked-alt",
                "name": "GIS Mapping"
            },
            {
                "icon": "fas fa-database",
                "name": "PostgreSQL"
            },
            {
                "icon": "fas fa-mobile-alt",
                "name": "Mobile APIs"
            }
        ],
        "gallery": [
            {
                "url": "images/smart-logistics/route-optimization-dashboard.jpg",
                "alt": "Route Optimization Dashboard"
            },
            {
                "url": "images/smart-logistics/delivery-tracking-interface.jpg",
                "alt": "Delivery Tracking Interface"
            }
        ],
        "results": "\n                    <p>The logistics optimization system delivered significant improvements:</p>\n                    <p><strong>Operational Efficiency:</strong> Delivery times improved by 40% with optimized routing reducing average trip duration.</p>\n                    <p><strong>Cost Savings:</strong> Fuel costs decreased by 25% through efficient route planning and reduced idle time.</p>\n                    <p><strong>Customer Satisfaction:</strong> Real-time tracking and accurate ETAs improved customer satisfaction scores by 35%.</p>\n                ",
        "impactStats": [
            {
                "number": "40%",
                "label": "Faster Deliveries"
            },
            {
                "number": "25%",
                "label": "Fuel Savings"
            },
            {
                "number": "35%",
                "label": "Customer Satisfaction"
            },
            {
                "number": "200+",
                "label": "Vehicles Optimized"
            }
        ],
        "testimonial": {
            "quote": "The logistics optimization system Mohammed implemented has transformed our operations. We're saving thousands in fuel costs while delivering packages faster than ever before. The real-time tracking has also improved our customer service significantly.",
            "name": "James Mwangi",
            "role": "Operations Director, ExpressLogistics Kenya"
        }
    }
};

// API functions that mimic the database API interface
const caseStudyAPI = {
    // Get all case studies
    getAllCaseStudies: function() {
        return Object.values(caseStudiesData);
    },

    // Get featured case studies (for homepage)
    getFeaturedCaseStudies: function() {
        return Object.values(caseStudiesData).filter(study => study.featured);
    },

    // Get case study by ID
    getCaseStudyById: function(id) {
        return caseStudiesData[id] || null;
    },

    // Get case studies by category
    getCaseStudiesByCategory: function(category) {
        return Object.values(caseStudiesData).filter(study => 
            study.category.toLowerCase() === category.toLowerCase());
    },

    // Get all unique categories
    getCategories: function() {
        const categories = new Set();
        Object.values(caseStudiesData).forEach(study => {
            categories.add(study.category);
        });
        return Array.from(categories);
    },

    // Search case studies
    searchCaseStudies: function(query) {
        const searchTerm = query.toLowerCase();
        return Object.values(caseStudiesData).filter(study => 
            study.title.toLowerCase().includes(searchTerm) ||
            study.subtitle.toLowerCase().includes(searchTerm) ||
            study.category.toLowerCase().includes(searchTerm) ||
            (study.description && study.description.toLowerCase().includes(searchTerm))
        );
    },

    // Get case study cards data (simplified version for listing)
    getCaseStudyCards: function() {
        return Object.values(caseStudiesData).map(study => ({
            id: study.id,
            title: study.title,
            subtitle: study.subtitle,
            category: study.category,
            heroImage: study.heroImage,
            featured: study.featured,
            stats: study.stats ? study.stats.slice(0, 2) : [],
            tags: [study.category]
        }));
    },

    // Get featured case study cards (for homepage)
    getFeaturedCaseStudyCards: function() {
        return Object.values(caseStudiesData)
            .filter(study => study.featured)
            .map(study => ({
                id: study.id,
                title: study.title,
                subtitle: study.subtitle,
                category: study.category,
                heroImage: study.heroImage,
                featured: study.featured,
                stats: study.stats ? study.stats.slice(0, 2) : [],
                tags: [study.category]
            }));
    }
};

// Make the API available globally
window.caseStudyAPI = caseStudyAPI;

// Also create a mock database object for compatibility
const caseStudyDB = {
    getAllCaseStudies: function() {
        return Object.values(caseStudiesData);
    },

    getFeaturedCaseStudies: function() {
        return Object.values(caseStudiesData).filter(study => study.featured);
    },

    getCaseStudyById: function(id) {
        return caseStudiesData[id] || null;
    },

    getCaseStudiesByCategory: function(category) {
        return Object.values(caseStudiesData).filter(study => 
            study.category.toLowerCase() === category.toLowerCase());
    },

    getCategories: function() {
        const categories = new Set();
        Object.values(caseStudiesData).forEach(study => {
            categories.add(study.category);
        });
        return Array.from(categories);
    }
};

// Make the database available globally for backward compatibility
window.caseStudyDB = caseStudyDB;

console.log('✅ Static Case Studies Data Loaded Successfully');
console.log(`📊 Loaded ${Object.keys(caseStudiesData).length} case studies`);