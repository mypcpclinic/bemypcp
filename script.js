// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll to contact section
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Modal functionality
const appointmentModal = document.getElementById('appointmentModal');
const confirmationModal = document.getElementById('confirmationModal');
const closeButtons = document.querySelectorAll('.close');

// Open appointment modal when clicking "Book an Appointment"
document.querySelectorAll('.cta-button').forEach(button => {
    if (button.textContent.includes('Book an Appointment')) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            openAppointmentModal();
        });
    }
});

function openAppointmentModal() {
    appointmentModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('appointmentDate').setAttribute('min', today);
}

function closeAppointmentModal() {
    appointmentModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function openConfirmationModal() {
    confirmationModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeConfirmationModal() {
    confirmationModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modals when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === appointmentModal) {
        closeAppointmentModal();
    }
    if (event.target === confirmationModal) {
        closeConfirmationModal();
    }
});

// Close modals with close buttons
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (appointmentModal.style.display === 'block') {
            closeAppointmentModal();
        }
        if (confirmationModal.style.display === 'block') {
            closeConfirmationModal();
        }
    });
});

// Email obfuscation
function sendEmail() {
    const em = 'mypcpclinic' + '@' + 'gmail.com';
    const link = document.getElementById('email-link');
    if (link) {
        link.href = 'mailto:' + em;
        link.textContent = em;
        link.onclick = null;
    }
    // Also update footer email links
    document.querySelectorAll('[onclick*="sendEmail"]').forEach(el => {
        el.href = 'mailto:' + em;
        el.textContent = em;
        el.onclick = null;
    });
}

// Rate limiting for form submissions
let lastSubmitTime = 0;
const SUBMIT_COOLDOWN = 5000; // 5 seconds between submissions

function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}

// Honeypot validation
function checkHoneypot(form) {
    const honeypot = form.querySelector('input[name="website"]');
    if (honeypot && honeypot.value !== '') {
        console.log('Bot detected via honeypot');
        return false; // Bot detected
    }
    return true; // Human user
}

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Honeypot check
    if (!checkHoneypot(this)) {
        console.log('Spam submission blocked');
        return; // Silently reject bot submissions
    }
    
    // Rate limiting check
    const now = Date.now();
    if (now - lastSubmitTime < SUBMIT_COOLDOWN) {
        alert('Please wait a few seconds before submitting again.');
        return;
    }
    
    // Get form data
    const formData = new FormData(this);
    const name = sanitizeInput(formData.get('name'));
    const email = sanitizeInput(formData.get('email'));
    const message = sanitizeInput(formData.get('message'));
    
    // Basic validation
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }
    
    // Length validation
    if (name.length > 100 || email.length > 100 || message.length > 1000) {
        alert('Input too long. Please shorten your message.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    lastSubmitTime = now;
    
    // Execute reCAPTCHA v3
    if (typeof grecaptcha !== 'undefined') {
        grecaptcha.ready(() => {
            grecaptcha.execute('6LfAIu8rAAAAAGUUu6rdFSv5ISgBTmqCku3r4HMv', {action: 'contact_form'}).then((token) => {
                // Send form with reCAPTCHA token
                submitContactForm(name, email, message, token);
            });
        });
    } else {
        // Fallback if reCAPTCHA fails to load
        submitContactForm(name, email, message, null);
    }
});

function submitContactForm(name, email, message, recaptchaToken) {
    // Send email using Formspree
    fetch('https://formspree.io/f/xdkwjklg', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message,
            subject: 'New Contact Form Message from myPCP Website',
            _replyto: email,
            _captcha: recaptchaToken ? 'reCAPTCHA verified' : 'N/A'
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Contact form submitted successfully', data);
        if (data.ok || data.success) {
            openConfirmationModal();
            document.getElementById('contactForm').reset();
        } else {
            alert('There was an error. Please call us at (786) 525-5664.');
        }
    })
    .catch(error => {
        console.error('Error submitting form:', error);
        alert('There was an error sending your message. Please call us at (786) 525-5664.');
    });
}

// Appointment form submission
document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Honeypot check
    if (!checkHoneypot(this)) {
        console.log('Spam submission blocked');
        return; // Silently reject bot submissions
    }
    
    // Rate limiting check
    const now = Date.now();
    if (now - lastSubmitTime < SUBMIT_COOLDOWN) {
        alert('Please wait a few seconds before submitting again.');
        return;
    }
    
    // Get form data
    const formData = new FormData(this);
    const serviceType = sanitizeInput(formData.get('serviceType'));
    const appointmentDate = sanitizeInput(formData.get('appointmentDate'));
    const appointmentTime = sanitizeInput(formData.get('appointmentTime'));
    const patientName = sanitizeInput(formData.get('patientName'));
    const patientEmail = sanitizeInput(formData.get('patientEmail'));
    const patientPhone = sanitizeInput(formData.get('patientPhone'));
    
    // Basic validation
    if (!serviceType || !appointmentDate || !appointmentTime || !patientName || !patientEmail || !patientPhone) {
        alert('Please fill in all fields.');
        return;
    }
    
    // Length validation
    if (patientName.length > 100 || patientEmail.length > 100 || patientPhone.length > 20) {
        alert('Input too long. Please check your entries.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(patientEmail)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    lastSubmitTime = now;
    
    // Phone validation (basic)
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(patientPhone.replace(/[\s\-\(\)]/g, ''))) {
        alert('Please enter a valid phone number.');
        return;
    }
    
    // Date validation (not in the past)
    const selectedDate = new Date(appointmentDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
        alert('Please select a future date.');
        return;
    }
    
    // Get service type label for better email readability
    const serviceLabels = {
        'general': 'General Checkup',
        'telehealth': 'Telehealth',
        'preventive': 'Preventive Medicine',
        'medspa': 'Med Spa',
        'clinical': 'Clinical Trials',
        'infusions': 'Infusions'
    };
    const serviceLabel = serviceLabels[serviceType] || serviceType;
    
    // Execute reCAPTCHA v3
    if (typeof grecaptcha !== 'undefined') {
        grecaptcha.ready(() => {
            grecaptcha.execute('6LfAIu8rAAAAAGUUu6rdFSv5ISgBTmqCku3r4HMv', {action: 'appointment_form'}).then((token) => {
                // Send form with reCAPTCHA token
                submitAppointmentForm(patientName, patientEmail, patientPhone, serviceLabel, appointmentDate, appointmentTime, token);
            });
        });
    } else {
        // Fallback if reCAPTCHA fails to load
        submitAppointmentForm(patientName, patientEmail, patientPhone, serviceLabel, appointmentDate, appointmentTime, null);
    }
});

function submitAppointmentForm(patientName, patientEmail, patientPhone, serviceLabel, appointmentDate, appointmentTime, recaptchaToken) {
    // Send appointment email using Formspree
    fetch('https://formspree.io/f/xdkwjklg', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: patientName,
            email: patientEmail,
            phone: patientPhone,
            serviceType: serviceLabel,
            appointmentDate: appointmentDate,
            appointmentTime: appointmentTime,
            subject: 'New Appointment Request from myPCP Website',
            _replyto: patientEmail,
            _captcha: recaptchaToken ? 'reCAPTCHA verified' : 'N/A'
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Appointment submitted successfully', data);
        
        if (data.ok || data.success) {
            // Close appointment modal and show confirmation
            closeAppointmentModal();
            
            // Update confirmation message for appointments
            const confirmationContent = document.querySelector('.confirmation-content');
            confirmationContent.innerHTML = `
                <div class="confirmation-icon">📅</div>
                <h2>Appointment Request Received!</h2>
                <p>Your appointment request for <strong>${serviceLabel}</strong> on <strong>${appointmentDate}</strong> at <strong>${appointmentTime}</strong> has been received.</p>
                <p>We'll contact you shortly to confirm your appointment.</p>
                <button class="cta-button" onclick="closeConfirmationModal()">Close</button>
            `;
            
            openConfirmationModal();
            
            // Reset form
            document.getElementById('appointmentForm').reset();
        } else {
            alert('There was an error. Please call us at (786) 525-5664.');
        }
    })
    .catch(error => {
        console.error('Error submitting appointment:', error);
        alert('There was an error submitting your appointment. Please call us at (786) 525-5664.');
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(249, 245, 233, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(249, 245, 233, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .value-card, .team-card, .payment-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Keyboard navigation for modals
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (appointmentModal.style.display === 'block') {
            closeAppointmentModal();
        }
        if (confirmationModal.style.display === 'block') {
            closeConfirmationModal();
        }
    }
});

// Form field enhancements
document.addEventListener('DOMContentLoaded', () => {
    // Add floating labels effect
    const formInputs = document.querySelectorAll('input, textarea, select');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
        
        // Check if input has value on load
        if (input.value) {
            input.parentElement.classList.add('focused');
        }
    });
});

// Service card hover effects
document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderLeftColor = 'var(--dark-teal)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.borderLeftColor = 'var(--primary-teal)';
        });
    });
});

// Loading animation for buttons
function addLoadingState(button) {
    const originalText = button.textContent;
    button.textContent = 'Loading...';
    button.disabled = true;
    
    return () => {
        button.textContent = originalText;
        button.disabled = false;
    };
}

// FAQ Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });
});

// Enhanced form submission with loading states
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitButton = this.querySelector('button[type="submit"]');
    const resetLoading = addLoadingState(submitButton);
    
    // Simulate API call
    setTimeout(() => {
        resetLoading();
        openConfirmationModal();
        this.reset();
    }, 1500);
});

document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitButton = this.querySelector('button[type="submit"]');
    const resetLoading = addLoadingState(submitButton);
    
    // Simulate API call
    setTimeout(() => {
        resetLoading();
        closeAppointmentModal();
        
        // Update confirmation message
        const formData = new FormData(this);
        const serviceType = formData.get('serviceType');
        const appointmentDate = formData.get('appointmentDate');
        const appointmentTime = formData.get('appointmentTime');
        
        const confirmationContent = document.querySelector('.confirmation-content');
        confirmationContent.innerHTML = `
            <div class="confirmation-icon">📅</div>
            <h2>Appointment Booked!</h2>
            <p>Your appointment for <strong>${serviceType}</strong> on <strong>${appointmentDate}</strong> at <strong>${appointmentTime}</strong> has been confirmed.</p>
            <p>We'll send you a confirmation email shortly.</p>
            <button class="cta-button" onclick="closeConfirmationModal()">Close</button>
        `;
        
        openConfirmationModal();
        this.reset();
    }, 1500);
});
