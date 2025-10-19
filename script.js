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

// Email obfuscation function
function sendEmail() {
    const email = 'mypcpclinic@gmail.com';
    const subject = 'Inquiry from myPCP Website';
    const body = 'Hello,\n\nI am interested in learning more about your services.\n\nThank you.';
    
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}

// Input sanitization function
function sanitizeInput(input) {
    return input.replace(/[<>]/g, '');
}

// Honeypot validation
function checkHoneypot() {
    const honeypot = document.getElementById('website');
    return honeypot && honeypot.value === '';
}

// Rate limiting for form submissions
let lastSubmitTime = 0;
const SUBMIT_COOLDOWN = 5000; // 5 seconds

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Rate limiting check
    const now = Date.now();
    if (now - lastSubmitTime < SUBMIT_COOLDOWN) {
        alert('Please wait a moment before submitting another message.');
        return;
    }
    
    // Honeypot check
    if (!checkHoneypot()) {
        console.log('Bot detected, form submission blocked');
        return;
    }
    
    const formData = new FormData(this);
    const name = sanitizeInput(formData.get('name'));
    const email = sanitizeInput(formData.get('email'));
    const message = sanitizeInput(formData.get('message'));
    
    // Execute reCAPTCHA
    grecaptcha.ready(function() {
        grecaptcha.execute('6LfAIu8rAAAAAGUUu6rdFSv5ISgBTmqCku3r4HMv', {action: 'contact'}).then(function(token) {
            // Submit form with reCAPTCHA token
            fetch('https://formspree.io/f/xdkwjklg', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message,
                    _subject: 'New Contact Form Submission',
                    _autoresponse: 'Thank you for contacting myPCP! We will get back to you soon.',
                    'g-recaptcha-response': token
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    alert('Thank you for your message! We will get back to you soon.');
                    this.reset();
                    lastSubmitTime = now;
                } else {
                    console.error('Form submission error:', data);
                    alert('There was an error sending your message. Please call us at (786) 525-5664.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error sending your message. Please call us at (786) 525-5664.');
            });
        });
    });
});

// Appointment form submission
document.getElementById('appointmentForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Rate limiting check
    const now = Date.now();
    if (now - lastSubmitTime < SUBMIT_COOLDOWN) {
        alert('Please wait a moment before submitting another appointment request.');
        return;
    }
    
    // Honeypot check
    if (!checkHoneypot()) {
        console.log('Bot detected, form submission blocked');
        return;
    }
    
    const formData = new FormData(this);
    const name = sanitizeInput(formData.get('name'));
    const email = sanitizeInput(formData.get('email'));
    const phone = sanitizeInput(formData.get('phone'));
    const appointmentDate = formData.get('appointmentDate');
    const appointmentTime = formData.get('appointmentTime');
    const reason = sanitizeInput(formData.get('reason'));
    
    // Execute reCAPTCHA
    grecaptcha.ready(function() {
        grecaptcha.execute('6LfAIu8rAAAAAGUUu6rdFSv5ISgBTmqCku3r4HMv', {action: 'appointment'}).then(function(token) {
            // Submit form with reCAPTCHA token
            fetch('https://formspree.io/f/xdkwjklg', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    phone: phone,
                    appointmentDate: appointmentDate,
                    appointmentTime: appointmentTime,
                    reason: reason,
                    _subject: 'New Appointment Request',
                    _autoresponse: 'Thank you for requesting an appointment! We will contact you soon to confirm.',
                    'g-recaptcha-response': token
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    alert('Thank you for your appointment request! We will contact you soon to confirm.');
                    this.reset();
                    lastSubmitTime = now;
                    closeAppointmentModal();
                } else {
                    console.error('Form submission error:', data);
                    alert('There was an error submitting your appointment request. Please call us at (786) 525-5664.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error submitting your appointment request. Please call us at (786) 525-5664.');
            });
        });
    });
});

// Appointment modal functions
function openAppointmentModal() {
    // Open Calendly popup widget
    Calendly.initPopupWidget({
        url: 'https://calendly.com/mypcpclinic/booking'
    });
}

function closeAppointmentModal() {
    const modal = document.getElementById('appointmentModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('appointmentModal');
    if (event.target === modal) {
        closeAppointmentModal();
    }
});

// FAQ Toggle functionality
document.querySelectorAll('.faq-toggle').forEach(toggle => {
    toggle.addEventListener('click', function() {
        const faqItem = this.closest('.faq-item');
        const answer = faqItem.querySelector('.faq-answer');
        
        // Close all other FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
                const otherAnswer = item.querySelector('.faq-answer');
                const otherToggle = item.querySelector('.faq-toggle');
                if (otherAnswer) {
                    otherAnswer.style.maxHeight = null;
                }
                if (otherToggle) {
                    otherToggle.textContent = '+';
                }
            }
        });
        
        // Toggle current FAQ item
        faqItem.classList.toggle('active');
        
        if (faqItem.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            this.textContent = '−';
        } else {
            answer.style.maxHeight = null;
            this.textContent = '+';
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

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-card, .value-card, .trust-badge, .welcome-item').forEach(el => {
    observer.observe(el);
});