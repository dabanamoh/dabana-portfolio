// Case Studies Page JavaScript
// Updated to work with CMS content loader

document.addEventListener('DOMContentLoaded', function() {
    initializeCaseStudiesPage();
    loadAllCaseStudies(); // Load case studies from CMS
    
    // Add event listeners for the CTA buttons
    const bookConsultationBtn = document.getElementById('book-consultation');
    if (bookConsultationBtn) {
        bookConsultationBtn.addEventListener('click', function() {
            window.location.href = 'index.html#about';
        });
    }
    
    const getInTouchBtn = document.getElementById('get-in-touch');
    if (getInTouchBtn) {
        getInTouchBtn.addEventListener('click', function() {
            window.location.href = 'mailto:mohammed@dabana.com';
        });
    }
});

function initializeCaseStudiesPage() {
    initializeFiltering();
    initializeCaseAnimations();
    addCaseStudyInteractions();
}

// Load all case studies from CMS with improved loading states
async function loadAllCaseStudies() {
    const casesGrid = document.querySelector('.cases-grid');
    if (!casesGrid) return;
    
    // Show loading state with skeleton loaders
    casesGrid.innerHTML = `
        <div class="case-card loading-skeleton">
            <div class="skeleton-image"></div>
            <div class="skeleton-title"></div>
            <div class="skeleton-description"></div>
            <div class="skeleton-metrics"></div>
        </div>
        <div class="case-card loading-skeleton">
            <div class="skeleton-image"></div>
            <div class="skeleton-title"></div>
            <div class="skeleton-description"></div>
            <div class="skeleton-metrics"></div>
        </div>
        <div class="case-card loading-skeleton">
            <div class="skeleton-image"></div>
            <div class="skeleton-title"></div>
            <div class="skeleton-description"></div>
            <div class="skeleton-metrics"></div>
        </div>
        <div class="case-card loading-skeleton">
            <div class="skeleton-image"></div>
            <div class="skeleton-title"></div>
            <div class="skeleton-description"></div>
            <div class="skeleton-metrics"></div>
        </div>
        <div class="case-card loading-skeleton">
            <div class="skeleton-image"></div>
            <div class="skeleton-title"></div>
            <div class="skeleton-description"></div>
            <div class="skeleton-metrics"></div>
        </div>
        <div class="case-card loading-skeleton">
            <div class="skeleton-image"></div>
            <div class="skeleton-title"></div>
            <div class="skeleton-description"></div>
            <div class="skeleton-metrics"></div>
        </div>
    `;
    
    try {
        console.log('Attempting to fetch case studies from CMS...');
        
        // Try to load from CMS first
        const cmsData = await window.CMS.loadCaseStudies();
        const allStudies = Object.values(cmsData).map(study => ({
            ...study,
            tags: study.technologies ? study.technologies.map(tech => tech.name) : []
        }));
        
        console.log('Successfully fetched case studies from CMS:', allStudies);
        renderAllCaseStudies(allStudies);
    } catch (error) {
        console.error('Failed to load case studies from CMS:', error);
        
        // Fallback to static data if available
        try {
            const allStudies = caseStudyAPI.getCaseStudyCards();
            console.log('Falling back to static data:', allStudies);
            renderAllCaseStudies(allStudies);
        } catch (fallbackError) {
            console.error('Failed to load fallback data:', fallbackError);
            casesGrid.innerHTML = '<div class="error-placeholder">Failed to load case studies. Please try again later.</div>';
        }
    }
}

// Render all case studies in the grid
function renderAllCaseStudies(caseStudies) {
    const casesGrid = document.querySelector('.cases-grid');
    if (!casesGrid) return;
    
    // Clear existing content
    casesGrid.innerHTML = '';
    
    // Render each case study
    caseStudies.forEach((study, index) => {
        const caseCard = document.createElement('div');
        caseCard.className = 'case-card';
        caseCard.setAttribute('data-case-id', study.id);
        caseCard.setAttribute('data-category', study.category.toLowerCase().replace(/\s+/g, '-'));
        
        // Add loading attribute to images for lazy loading
        caseCard.innerHTML = `
            <div class="case-image">
                <img src="${study.heroImage}" alt="${study.title}" class="case-img" loading="lazy">
                <div class="case-icon">
                    <i class="fas fa-${getCategoryIcon(study.category)}"></i>
                </div>
            </div>
            <h3 class="case-title">${study.title}</h3>
            <p class="case-description">${study.subtitle}</p>
            <div class="case-metrics">
                ${study.stats.map(stat => `
                    <div class="metric">
                        <span class="metric-value">${stat.number}</span>
                        <span class="metric-label">${stat.label}</span>
                    </div>
                `).join('')}
            </div>
            <div class="case-tags">
                ${study.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        `;
        
        casesGrid.appendChild(caseCard);
    });
    
    // Re-initialize interactions for the new cards
    addCaseStudyInteractions();
    initializeCaseAnimations();
}

// Get appropriate icon for category
function getCategoryIcon(category) {
    const iconMap = {
        'AI Automation': 'robot',
        'Product Management': 'chart-line',
        'Design & UX': 'users',
        'FinTech': 'mobile-alt',
        'Machine Learning': 'brain',
        'E-commerce': 'shopping-cart',
        'Fraud Detection': 'shield-alt',
        'EdTech': 'graduation-cap',
        'Logistics': 'truck',
        'Digital Payments': 'credit-card',
        'Accessibility': 'universal-access',
        'Agriculture': 'leaf',
        'Real Estate': 'home',
        'Personal Finance': 'chart-pie',
        'Brand Identity': 'palette'
    };
    
    // Convert category to match our icon map
    const normalizedCategory = category.replace('&', 'and');
    return iconMap[normalizedCategory] || 'folder';
}

// Filter functionality
function initializeFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active filter button
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter case studies
            filterCaseStudies(filterValue);
        });
    });
}

function filterCaseStudies(filterValue) {
    const caseCards = document.querySelectorAll('.case-card');
    
    caseCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (filterValue === 'all' || cardCategory === filterValue) {
            // Show card with animation
            card.style.display = 'block';
            card.classList.remove('hide');
            
            // Trigger reflow and add animation
            setTimeout(() => {
                card.style.animation = 'fadeIn 0.5s ease';
            }, 10);
        } else {
            // Hide card
            card.classList.add('hide');
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
    
    // Update results count
    updateResultsCount(filterValue);
}

function updateResultsCount(filterValue) {
    const visibleCards = document.querySelectorAll('.case-card:not(.hide)');
    const count = visibleCards.length;
    
    // You could add a results counter here if needed
    console.log(`Showing ${count} case studies for filter: ${filterValue}`);
}

// Animation on scroll for case studies
function initializeCaseAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all case cards
    const caseCards = document.querySelectorAll('.case-card');
    caseCards.forEach((card, index) => {
        // Add initial hidden state
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        // Add staggered delay
        card.style.animationDelay = `${index * 0.1}s`;
        
        observer.observe(card);
    });
}

// Add interactions to case study cards
function addCaseStudyInteractions() {
    const caseCards = document.querySelectorAll('.case-card');
    
    caseCards.forEach(card => {
        // Add hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px) scale(1)';
        });
        
        // Add click interaction to navigate to detail page
        card.addEventListener('click', function() {
            const caseId = this.getAttribute('data-case-id');
            if (caseId) {
                window.location.href = `case-study-detail.html?id=${caseId}`;
            } else {
                // Fallback for cases without detail pages yet
                const title = this.querySelector('.case-title').textContent;
                showNotification(`Detailed page for "${title}" coming soon!`, 'info');
            }
        });
    });
}

// Notification system for case studies page
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)' : 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 9999;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Add event listener to close button
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', function() {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 3000);
}

// Search functionality (if you want to add it later)
function initializeSearch() {
    const searchInput = document.getElementById('case-search');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const caseCards = document.querySelectorAll('.case-card');
        
        caseCards.forEach(card => {
            const title = card.querySelector('.case-title').textContent.toLowerCase();
            const description = card.querySelector('.case-description').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'block';
                card.classList.remove('hide');
            } else {
                card.classList.add('hide');
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
}

// Add smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Stats counter animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.textContent.replace(/[^0-9]/g, ''));
                const prefix = counter.textContent.replace(/[0-9]/g, '').split('')[0] || '';
                const suffix = counter.textContent.replace(/[0-9]/g, '').slice(1) || '';
                
                let current = 0;
                const increment = target / 50;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = prefix + Math.floor(current) + suffix;
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = prefix + target + suffix;
                    }
                };
                
                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Initialize counter animation
animateCounters();

// Add CSS for smooth transitions
const style = document.createElement('style');
style.textContent = `
    .case-card {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .filter-btn {
        transition: all 0.3s ease;
    }
    
    .highlight:hover {
        background: rgba(255, 255, 255, 0.08);
        transform: translateX(5px);
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .case-tags .tag:hover {
        background: rgba(255, 107, 53, 0.3);
        transform: scale(1.05);
    }
    
    .loading-placeholder {
        text-align: center;
        padding: 2rem;
        color: #666;
    }
    
    .error-placeholder {
        text-align: center;
        padding: 2rem;
        color: #ff4444;
    }
    
    /* Skeleton loader styles */
    .loading-skeleton {
        background: #f0f0f0;
        border-radius: 8px;
        overflow: hidden;
        animation: pulse 1.5s ease-in-out infinite;
    }
    
    @keyframes pulse {
        0% { opacity: 1; }
        50% { opacity: 0.5; }
        100% { opacity: 1; }
    }
    
    .skeleton-image {
        height: 200px;
        background: linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%);
        background-size: 200% 100%;
        animation: loading 1.5s infinite;
    }
    
    .skeleton-title {
        height: 24px;
        background: #e0e0e0;
        margin: 16px;
        border-radius: 4px;
    }
    
    .skeleton-description {
        height: 16px;
        background: #e0e0e0;
        margin: 0 16px 16px 16px;
        border-radius: 4px;
    }
    
    .skeleton-metrics {
        height: 40px;
        background: #e0e0e0;
        margin: 0 16px 16px 16px;
        border-radius: 4px;
    }
    
    @keyframes loading {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
    }
`;
document.head.appendChild(style);

// Add keyboard navigation for filters
document.addEventListener('keydown', function(e) {
    if (e.target.classList.contains('filter-btn')) {
        const buttons = Array.from(document.querySelectorAll('.filter-btn'));
        const currentIndex = buttons.indexOf(e.target);
        
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
            e.preventDefault();
            buttons[currentIndex - 1].focus();
        } else if (e.key === 'ArrowRight' && currentIndex < buttons.length - 1) {
            e.preventDefault();
            buttons[currentIndex + 1].focus();
        } else if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            e.target.click();
        }
    }
});

// Analytics tracking (optional)
function trackCaseStudyInteraction(action, caseTitle) {
    // Add your analytics tracking here
    console.log(`Analytics: ${action} - ${caseTitle}`);
    
    // Example for Google Analytics
    // gtag('event', action, {
    //     'event_category': 'Case Study',
    //     'event_label': caseTitle
    // });
}

// Console message
console.log(`
🎯 Case Studies Page Loaded Successfully
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 15 detailed case studies showcasing:
• AI Automation Solutions
• Product Management Excellence  
• Design & UX Optimization
• FinTech Innovation

🔍 Interactive filtering and smooth animations active
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);