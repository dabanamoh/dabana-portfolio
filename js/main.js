// DOM Content Loaded
document.addEventListener('DOMContentLoaded', async function() {
    // Initialize CMS and apply theme colors first
    await initializeCMS();
    initializeApp();
    
    // Add event listener for the View All Case Studies button in case studies section
    const viewAllCaseStudiesBtn = document.getElementById('view-all-case-studies');
    if (viewAllCaseStudiesBtn) {
        viewAllCaseStudiesBtn.addEventListener('click', function() {
            window.location.href = 'case-studies.html';
        });
    }
    
    // Add event listener for the View All Case Studies button in contact section
    const contactViewAllCaseStudiesBtn = document.getElementById('contact-view-all-case-studies');
    if (contactViewAllCaseStudiesBtn) {
        contactViewAllCaseStudiesBtn.addEventListener('click', function() {
            window.location.href = 'case-studies.html';
        });
    }
    
    // Add event listener for the Get In Touch button
    const getInTouchBtn = document.getElementById('get-in-touch');
    if (getInTouchBtn) {
        getInTouchBtn.addEventListener('click', async function() {
            // Get email from CMS settings
            try {
                const settings = await window.CMS.loadSettings();
                const email = settings.global.contact?.email || 'mohammed@dabana.com';
                window.location.href = `mailto:${email}`;
            } catch (error) {
                // Fallback to default email
                window.location.href = 'mailto:mohammed@dabana.com';
            }
        });
    }
});

// Initialize CMS and apply settings
async function initializeCMS() {
    try {
        // Apply theme colors from CMS
        await window.CMS.applyThemeColors();
        
        // Update page content from CMS settings
        const settings = await window.CMS.loadSettings();
        updatePageContent(settings);
    } catch (error) {
        console.error('Failed to initialize CMS:', error);
    }
}

// Update page content with CMS settings
function updatePageContent(settings) {
    // Update page title
    if (settings.seo?.metaTitle) {
        document.title = settings.seo.metaTitle;
    }
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription && settings.seo?.metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        metaDescription.content = settings.seo.metaDescription;
        document.head.appendChild(metaDescription);
    } else if (settings.seo?.metaDescription) {
        metaDescription.content = settings.seo.metaDescription;
    }
    
    // Update hero content
    if (settings.home) {
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle && settings.home.heroTitle) {
            heroTitle.textContent = settings.home.heroTitle;
        }
        
        const heroDescription = document.querySelector('.hero-description');
        if (heroDescription && settings.home.heroDescription) {
            heroDescription.textContent = settings.home.heroDescription;
        }
        
        const heroSecondary = document.querySelector('.hero-secondary');
        if (heroSecondary && settings.home.heroSecondary) {
            heroSecondary.textContent = settings.home.heroSecondary;
        }
    }
    
    // Update contact information
    if (settings.global?.contact) {
        const phoneElement = document.querySelector('.contact-item span');
        if (phoneElement && settings.global.contact.phone) {
            phoneElement.textContent = settings.global.contact.phone;
        }
        
        const emailElement = document.querySelector('.contact-item:last-child span');
        if (emailElement && settings.global.contact.email) {
            emailElement.textContent = settings.global.contact.email;
        }
    }
}

// Initialize all app functionality
function initializeApp() {
    initializeNavigation();
    initializeAnimations();
    initializeSkillBars();
    initializeForms();
    initializeScrollEffects();
    initializeCaseStudyClicks();
    loadFeaturedCaseStudies(); // Add this line to load featured case studies
}

// Load featured case studies from CMS with improved loading states
async function loadFeaturedCaseStudies() {
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
    `;
    
    try {
        console.log('Attempting to fetch featured case studies from CMS...');
        
        // Try to load from CMS first
        const cmsData = await window.CMS.loadCaseStudies();
        const featuredStudies = Object.values(cmsData)
            .filter(study => study.featured)
            .map(study => ({
                ...study,
                tags: study.technologies ? study.technologies.map(tech => tech.name) : []
            }));
        
        console.log('Successfully fetched featured case studies from CMS:', featuredStudies);
        renderFeaturedCaseStudies(featuredStudies);
    } catch (error) {
        console.error('Failed to load featured case studies from CMS:', error);
        
        // Fallback to static data if available
        try {
            const featuredStudies = caseStudyAPI.getFeaturedCaseStudyCards();
            console.log('Falling back to static data:', featuredStudies);
            renderFeaturedCaseStudies(featuredStudies);
        } catch (fallbackError) {
            console.error('Failed to load fallback data:', fallbackError);
            casesGrid.innerHTML = '<div class="error-placeholder">Failed to load projects. Please try again later.</div>';
        }
    }
}

// Render featured case studies in the homepage grid
function renderFeaturedCaseStudies(caseStudies) {
    const casesGrid = document.querySelector('.cases-grid');
    if (!casesGrid) return;
    
    // Clear existing content
    casesGrid.innerHTML = '';
    
    // Render each case study
    caseStudies.forEach((study, index) => {
        const caseCard = document.createElement('div');
        caseCard.className = 'case-card';
        caseCard.setAttribute('data-case-id', study.id);
        
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
    
    // Re-initialize click handlers for the new cards
    initializeCaseStudyClicks();
}

// Get appropriate icon for category
function getCategoryIcon(category) {
    const iconMap = {
        'AI Automation': 'robot',
        'Product Management': 'chart-line',
        'Design & UX': 'users',
        'FinTech': 'mobile-alt',
        'Machine Learning': 'brain',
        'E-commerce': 'shopping-cart'
    };
    
    return iconMap[category] || 'folder';
}

// Navigation functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Only prevent default and handle smooth scrolling for anchor links within the same page
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Update active nav link
                    updateActiveNavLink(this);
                }
            }
            // For external links (like case-studies.html), let the default behavior happen
        });
    });
    
    // Update active nav link on scroll (only for same-page anchors)
    window.addEventListener('scroll', function() {
        let current = '';
        const headerHeight = document.querySelector('.header').offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            // Only update active state for anchor links
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

function updateActiveNavLink(activeLink) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

// Animation on scroll
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Add animation classes to elements
    const animatedElements = document.querySelectorAll('.section-title, .section-subtitle, .hero-text, .about-quote, .form-card, .skill-item, .case-studies-placeholder');
    
    animatedElements.forEach((el, index) => {
        el.classList.add('fade-in');
        observer.observe(el);
        
        // Add delay for staggered animations
        el.style.transitionDelay = `${index * 0.1}s`;
    });
}

// Skill bars animation
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.getAttribute('data-width');
                
                setTimeout(() => {
                    progressBar.style.width = width + '%';
                }, 200);
                
                skillObserver.unobserve(progressBar);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// Form handling
function initializeForms() {
    const bookingForm = document.querySelector('.booking-form-inner');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission(this);
        });
    }
    
    // Form validation
    const formInputs = document.querySelectorAll('.form-input, .form-textarea, .form-select');
    formInputs.forEach(input => {
        input.addEventListener('blur', validateInput);
        input.addEventListener('input', clearValidationError);
    });
}

function handleFormSubmission(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Initialize EmailJS (using public service)
    emailjs.init("service_defzgja");
    
    // Prepare email parameters
    const emailParams = {
        from_name: data.name || data['full-name'] || 'Unknown',
        from_email: data.email,
        phone: data.phone || data['phone-number'] || 'Not provided',
        message: data.message || data.project || 'No message provided',
        consultation_type: data.consultation || data['consultation-type'] || 'General consultation',
        to_email: 'dabana.mohammed@gmail.com',
        to_name: 'Mohammed Dabana',
        reply_to: data.email
    };
    
    // Send email using EmailJS
    emailjs.send('service_defzgja', 'template_booking', emailParams)
        .then(function(response) {
            console.log('Email sent successfully:', response);
            showNotification('Thank you! Your booking request has been sent. I\'ll contact you within 24 hours.', 'success');
            form.reset();
        })
        .catch(function(error) {
            console.error('Email send failed:', error);
            // Fallback to mailto
            const subject = `Free Consultation Request from ${emailParams.from_name}`;
            const body = `Name: ${emailParams.from_name}%0D%0AEmail: ${emailParams.from_email}%0D%0APhone: ${emailParams.phone}%0D%0AConsultation Type: ${emailParams.consultation_type}%0D%0A%0D%0AMessage:%0D%0A${emailParams.message}`;
            const mailtoLink = `mailto:dabana.mohammed@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
            
            window.open(mailtoLink, '_blank');
            showNotification('Opening your email client to send the booking request...', 'info');
            form.reset();
        })
        .finally(function() {
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
}

function validateInput(e) {
    const input = e.target;
    const value = input.value.trim();
    
    // Remove existing error
    clearValidationError(e);
    
    if (!value) {
        showInputError(input, 'This field is required');
        return false;
    }
    
    // Email validation
    if (input.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showInputError(input, 'Please enter a valid email address');
            return false;
        }
    }
    
    // Phone validation
    if (input.type === 'tel') {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(value.replace(/\s/g, ''))) {
            showInputError(input, 'Please enter a valid phone number');
            return false;
        }
    }
    
    return true;
}

function showInputError(input, message) {
    input.style.borderColor = '#ff4444';
    
    // Create error message
    let errorMsg = input.parentNode.querySelector('.error-message');
    if (!errorMsg) {
        errorMsg = document.createElement('div');
        errorMsg.className = 'error-message';
        errorMsg.style.color = '#ff4444';
        errorMsg.style.fontSize = '0.8rem';
        errorMsg.style.marginTop = '0.25rem';
        input.parentNode.appendChild(errorMsg);
    }
    errorMsg.textContent = message;
}

function clearValidationError(e) {
    const input = e.target;
    input.style.borderColor = '';
    
    const errorMsg = input.parentNode.querySelector('.error-message');
    if (errorMsg) {
        errorMsg.remove();
    }
}

// Scroll effects
function initializeScrollEffects() {
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Header hide/show on scroll
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Add scroll transition to header
    header.style.transition = 'transform 0.3s ease';
}

// Notification system
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
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Case study card click handlers
function initializeCaseStudyClicks() {
    document.addEventListener('click', function(e) {
        const caseCard = e.target.closest('.case-card[data-case-id]');
        if (caseCard) {
            const caseId = caseCard.getAttribute('data-case-id');
            window.location.href = `case-study-detail.html?id=${caseId}`;
        }
    });
}

// Button interactions
document.addEventListener('click', function(e) {
    // Handle CTA buttons
    if (e.target.matches('.btn') || e.target.closest('.btn')) {
        const btn = e.target.matches('.btn') ? e.target : e.target.closest('.btn');
        
        // Add click effect
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btn.style.transform = '';
        }, 150);
        
        // Handle specific button actions
        const btnText = btn.textContent.trim();
        
        if (btnText.includes('Let\'s Work Together')) {
            // Smooth scroll to booking form
            const bookingForm = document.querySelector('.booking-form');
            if (bookingForm) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = bookingForm.offsetTop - headerHeight - 50;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                // Focus on first input after scroll
                setTimeout(() => {
                    const firstInput = bookingForm.querySelector('.form-input');
                    if (firstInput) firstInput.focus();
                }, 500);
            }
        } else if (btnText.includes('Get In Touch')) {
            window.location.href = 'mailto:dabana.mohammed@gmail.com';
        } else if (btnText.includes('View All Case Studies')) {
            window.location.href = 'case-studies.html';
        } else if (btnText.includes('Book Free Session') || btnText.includes('Book Free Consultation')) {
            // Form submission is handled by the form handler
        }
    }
});

// Smooth scroll for any anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Only apply smooth scrolling to anchor links on the same page
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Check if this is an anchor link on the same page
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0.25rem;
        margin-left: auto;
        opacity: 0.8;
        transition: opacity 0.2s ease;
    }
    
    .notification-close:hover {
        opacity: 1;
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

// Console message for developers
console.log(`
🚀 Mohammed Dabana - Product Manager & AI Expert
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Built with ❤️ using modern web technologies
🔧 Need AI automation for your business? Let's connect!
📧 mohammed@dabana.com
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);