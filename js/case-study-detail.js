// Case Study Detail Page JavaScript

// Page initialization
document.addEventListener('DOMContentLoaded', function() {
    initializeCaseStudyDetail();
});

function initializeCaseStudyDetail() {
    // Check if the caseStudyAPI is already available
    if (typeof caseStudyAPI === 'undefined') {
        console.error('Case study API not available');
        showErrorState();
        return;
    }
    
    const urlParams = new URLSearchParams(window.location.search);
    const caseId = urlParams.get('id');
    
    if (!caseId) {
        showErrorState();
        return;
    }
    
    loadCaseStudy(caseId);
}

// Remove the dynamic loading functions since we're using static data

function showErrorState() {
    const loadingState = document.getElementById('loading-state');
    const errorState = document.getElementById('error-state');
    
    if (loadingState) loadingState.style.display = 'none';
    if (errorState) errorState.style.display = 'flex';
}

async function loadCaseStudy(caseId) {
    try {
        // Show loading state
        const loadingState = document.getElementById('loading-state');
        if (loadingState) loadingState.style.display = 'flex';
        
        // Get case study data from static data
        const data = await caseStudyAPI.getCaseStudyById(caseId);
        
        if (!data) {
            showErrorState();
            return;
        }
        
        // Update page title
        document.title = `${data.title} - Mohammed Dabana`;
        
        // Update breadcrumb
        const breadcrumbTitle = document.getElementById('breadcrumb-title');
        if (breadcrumbTitle) breadcrumbTitle.textContent = data.title;
        
        // Update hero section
        const categoryBadge = document.getElementById('category-badge');
        if (categoryBadge) categoryBadge.textContent = data.category;
        
        const caseTitle = document.getElementById('case-title');
        if (caseTitle) caseTitle.textContent = data.title;
        
        const caseSubtitle = document.getElementById('case-subtitle');
        if (caseSubtitle) caseSubtitle.textContent = data.subtitle;
        
        const clientName = document.getElementById('client-name');
        if (clientName) clientName.textContent = data.client;
        
        const projectDuration = document.getElementById('project-duration');
        if (projectDuration) projectDuration.textContent = data.duration;
        
        const projectLocation = document.getElementById('project-location');
        if (projectLocation) projectLocation.textContent = data.location;
        
        const teamSize = document.getElementById('team-size');
        if (teamSize) teamSize.textContent = data.teamSize;
        
        const heroImage = document.getElementById('hero-image');
        if (heroImage) {
            heroImage.src = data.heroImage;
            heroImage.alt = data.title;
        }
        
        // Update overview
        const projectOverview = document.getElementById('project-overview');
        if (projectOverview) projectOverview.innerHTML = data.overview;
        
        // Update stats
        const statsContainer = document.getElementById('project-stats');
        if (statsContainer) {
            statsContainer.innerHTML = data.stats.map(stat => `
                <div class="stat-item">
                    <span class="stat-number">${stat.number}</span>
                    <span class="stat-label">${stat.label}</span>
                </div>
            `).join('');
        }
        
        // Update challenge and solution
        const projectChallenge = document.getElementById('project-challenge');
        if (projectChallenge) projectChallenge.innerHTML = data.challenge;
        
        const projectSolution = document.getElementById('project-solution');
        if (projectSolution) projectSolution.innerHTML = data.solution;
        
        // Update timeline
        const timelineContent = document.getElementById('timeline-content');
        if (timelineContent) {
            timelineContent.innerHTML = data.timeline.map(item => `
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h4 class="timeline-title">${item.title}</h4>
                        <p class="timeline-description">${item.description}</p>
                    </div>
                    <div class="timeline-date">${item.date}</div>
                </div>
            `).join('');
        }
        
        // Update technologies
        const techStack = document.getElementById('tech-stack');
        if (techStack) {
            techStack.innerHTML = data.technologies.map(tech => `
                <div class="tech-item">
                    <div class="tech-icon">
                        <i class="${tech.icon}"></i>
                    </div>
                    <div class="tech-name">${tech.name}</div>
                </div>
            `).join('');
        }
        
        // Update gallery
        const projectImages = document.getElementById('project-images');
        if (projectImages) {
            projectImages.innerHTML = data.gallery.map(image => `
                <div class="gallery-item">
                    <img src="${image.url}" alt="${image.alt}" class="gallery-img" loading="lazy">
                </div>
            `).join('');
        }
        
        // Update results
        const projectResults = document.getElementById('project-results');
        if (projectResults) projectResults.innerHTML = data.results;
        
        // Update impact stats
        const impactStats = document.getElementById('impact-stats');
        if (impactStats) {
            impactStats.innerHTML = data.impactStats.map(stat => `
                <div class="impact-item">
                    <span class="impact-number">${stat.number}</span>
                    <span class="impact-label">${stat.label}</span>
                </div>
            `).join('');
        }
        
        // Update testimonial
        const clientTestimonial = document.getElementById('client-testimonial');
        if (clientTestimonial) clientTestimonial.textContent = data.testimonial.quote;
        
        const testimonialName = document.getElementById('testimonial-name');
        if (testimonialName) testimonialName.textContent = data.testimonial.name;
        
        const testimonialRole = document.getElementById('testimonial-role');
        if (testimonialRole) testimonialRole.textContent = data.testimonial.role;
        
        // Update related studies (simplified for now)
        const relatedStudies = document.getElementById('related-studies');
        if (relatedStudies) {
            // Get all case studies and filter out the current one
            const allStudies = caseStudyDB.getAllCaseStudies();
            const otherCases = allStudies
                .filter(study => study.id !== caseId)
                .slice(0, 3);
            
            // Clear existing content
            relatedStudies.innerHTML = '';
            
            // Create and append related case study cards
            otherCases.forEach(related => {
                const relatedCard = document.createElement('div');
                relatedCard.className = 'related-card';
                relatedCard.setAttribute('data-case-id', related.id);
                relatedCard.innerHTML = `
                    <h4>${related.title}</h4>
                    <p>${related.subtitle.substring(0, 100)}...</p>
                `;
                relatedStudies.appendChild(relatedCard);
            });
        }
        
        // Hide loading and show content
        if (loadingState) loadingState.style.display = 'none';
        const caseStudyContent = document.getElementById('case-study-content');
        if (caseStudyContent) caseStudyContent.style.display = 'block';
        
        // Initialize animations
        initializeAnimations();
    } catch (error) {
        console.error('Failed to load case study:', error);
        showErrorState();
    }
}

function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Animate elements on scroll
    const animatedElements = document.querySelectorAll('.section-title, .timeline-item, .tech-item, .gallery-item');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
}

// Add smooth scrolling for internal links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
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

// Add event listeners for related case study cards
document.addEventListener('click', function(e) {
    const relatedCard = e.target.closest('.related-card');
    if (relatedCard) {
        const caseId = relatedCard.getAttribute('data-case-id');
        if (caseId) {
            window.location.href = `case-study-detail.html?id=${caseId}`;
        }
    }
});

console.log('🎯 Case Study Detail Page Loaded Successfully');