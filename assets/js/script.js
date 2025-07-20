// AK Accounting - Custom JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all components
    initSmoothScrolling();
    initNavbarScroll();
    initContactForm();
    initAnimations();
    initLightbox();
    initAccessibility();
    
    // Smooth scrolling for navigation links
    function initSmoothScrolling() {
        const navLinks = document.querySelectorAll('a[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                        bsCollapse.hide();
                    }
                }
            });
        });
    }
    
    // Navbar scroll effect
    function initNavbarScroll() {
        const navbar = document.querySelector('.navbar');
        
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                navbar.classList.add('navbar-scrolled');
                navbar.style.backgroundColor = 'rgba(0, 48, 135, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
            } else {
                navbar.classList.remove('navbar-scrolled');
                navbar.style.backgroundColor = '';
                navbar.style.backdropFilter = '';
            }
        });
    }
    
    // Contact form handling
    function initContactForm() {
        const contactForm = document.getElementById('contactForm');
        
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form data
                const formData = new FormData(this);
                const formObject = {};
                
                formData.forEach((value, key) => {
                    formObject[key] = value;
                });
                
                // Validate form
                if (validateForm(formObject)) {
                    // Show loading state
                    const submitBtn = this.querySelector('button[type="submit"]');
                    const originalText = submitBtn.innerHTML;
                    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Gönderiliyor...';
                    submitBtn.disabled = true;
                    
                    // Simulate form submission (replace with actual backend integration)
                    setTimeout(() => {
                        showNotification('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.', 'success');
                        contactForm.reset();
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                    }, 2000);
                }
            });
        }
    }
    
    // Form validation
    function validateForm(data) {
        const errors = [];
        
        if (!data.name || data.name.trim().length < 2) {
            errors.push('Ad Soyad en az 2 karakter olmalıdır.');
        }
        
        if (!data.email || !isValidEmail(data.email)) {
            errors.push('Geçerli bir e-posta adresi giriniz.');
        }
        
        if (!data.message || data.message.trim().length < 10) {
            errors.push('Mesaj en az 10 karakter olmalıdır.');
        }
        
        if (errors.length > 0) {
            showNotification(errors.join('<br>'), 'error');
            return false;
        }
        
        return true;
    }
    
    // Email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Show notification
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
                <span>${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999;
            max-width: 400px;
            background: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#3B82F6'};
            color: white;
            padding: 1rem;
            border-radius: 8px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            animation: slideInRight 0.3s ease;
        `;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 5000);
        
        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        });
    }
    
    // Initialize animations
    function initAnimations() {
        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe elements for animation
        const animateElements = document.querySelectorAll('.service-card, .feature-card, .section-title');
        animateElements.forEach(el => {
            el.classList.add('loading');
            observer.observe(el);
        });
        
        // Add loaded class after a short delay to ensure images are visible
        setTimeout(() => {
            animateElements.forEach(el => {
                el.classList.add('loaded');
            });
        }, 100);
        
        // Trigger animations on scroll
        window.addEventListener('scroll', () => {
            animateElements.forEach(el => {
                if (isElementInViewport(el) && !el.classList.contains('fade-in-up')) {
                    el.classList.add('fade-in-up');
                }
            });
        });
    }
    
    // Check if element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Initialize Lightbox
    function initLightbox() {
        // Lightbox is already initialized via CDN
        // Additional customizations can be added here
        if (typeof lightbox !== 'undefined') {
            lightbox.option({
                'resizeDuration': 200,
                'wrapAround': true,
                'albumLabel': 'Resim %1 / %2'
            });
        }
    }
    
    // Initialize accessibility features
    function initAccessibility() {
        // Add skip link
        const skipLink = document.createElement('a');
        skipLink.href = '#home';
        skipLink.className = 'skip-link';
        skipLink.textContent = 'Ana içeriğe geç';
        document.body.insertBefore(skipLink, document.body.firstChild);
        
        // Add ARIA labels
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach((card, index) => {
            const title = card.querySelector('h4');
            if (title) {
                card.setAttribute('aria-labelledby', `service-${index}`);
                title.id = `service-${index}`;
            }
        });
        
        // Keyboard navigation for service cards
        serviceCards.forEach(card => {
            card.setAttribute('tabindex', '0');
            card.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    // Add any card click functionality here
                }
            });
        });
    }
    
    // Service price calculator (example functionality)
    function calculateServicePrice(serviceType, duration = 'monthly') {
        const prices = {
            'vergi-danismanligi': { monthly: 1200, yearly: 12000 },
            'defter-tutma': { monthly: 800, yearly: 8000 },
            'bordro-hizmetleri': { monthly: 600, yearly: 6000 },
            'mali-raporlama': { monthly: 1500, yearly: 15000 },
            'sirket-kurulusu': { oneTime: 2000 },
            'denetim-hizmetleri': { monthly: 3000, yearly: 30000 }
        };
        
        return prices[serviceType]?.[duration] || prices[serviceType]?.oneTime || 0;
    }
    
    // Update service prices based on selection
    const serviceSelect = document.getElementById('service');
    if (serviceSelect) {
        serviceSelect.addEventListener('change', function() {
            const selectedService = this.value;
            const price = calculateServicePrice(selectedService);
            
            if (price > 0) {
                showNotification(`Seçilen hizmet: ${this.options[this.selectedIndex].text} - Fiyat: ₺${price.toLocaleString()}`, 'info');
            }
        });
    }
    
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
            gap: 0.5rem;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: white;
            font-size: 1.2rem;
            cursor: pointer;
            margin-left: auto;
        }
        
        .navbar-scrolled {
            transition: all 0.3s ease;
        }
    `;
    document.head.appendChild(style);
    
    // Performance optimization: Lazy load images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // Console welcome message
    console.log(`
    🎉 AK Accounting Website Template
    
    Geliştirici: a.koc
    GitHub: https://github.com/ak-hosting
    İletişim: ak@ak-pro.com
    
    Bu şablon Türkiye'deki muhasebe ve mali müşavirlik ofisleri için tasarlanmıştır.
    `);
});

// Export functions for potential external use
window.AKAccounting = {
    calculateServicePrice: function(serviceType, duration) {
        const prices = {
            'vergi-danismanligi': { monthly: 1200, yearly: 12000 },
            'defter-tutma': { monthly: 800, yearly: 8000 },
            'bordro-hizmetleri': { monthly: 600, yearly: 6000 },
            'mali-raporlama': { monthly: 1500, yearly: 15000 },
            'sirket-kurulusu': { oneTime: 2000 },
            'denetim-hizmetleri': { monthly: 3000, yearly: 30000 }
        };
        
        return prices[serviceType]?.[duration] || prices[serviceType]?.oneTime || 0;
    },
    
    showNotification: function(message, type = 'info') {
        // Implementation would be the same as above
        console.log(`${type.toUpperCase()}: ${message}`);
    }
}; 