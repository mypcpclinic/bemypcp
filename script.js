// ===================================
// LANGUAGE TRANSLATION SYSTEM
// ===================================

// Translations object
const translations = {
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-services': 'Services',
        'nav-team': 'Team',
        'nav-faq': 'FAQ',
        'nav-contact': 'Contact',
        'nav-appointment': 'Make Appointment',
        
        // Hero Section
        'hero-title': 'Your Partner in Health, Every Step of the Way.',
        'hero-tagline': 'Comprehensive Internal Medicine for Lifelong Wellness.',
        'hero-cta-appointment': 'Book Appointment',
        'hero-cta-contact': "We'd Love to Hear From You!",
        'hero-highlight-1': 'Same-Day Appointments',
        'hero-highlight-2': 'Telehealth Available',
        'hero-highlight-3': 'English & Spanish',
        
        // Stats Card
        'stats-welcome': 'Your Health, Our Priority',
        'stats-clinic': 'Specialized in Internal Medicine',
        'stats-years': 'Years of Experience',
        'stats-patients': 'Happy Patients',
        'stats-rating': 'Patient Satisfaction',
        'stats-cta': 'Comprehensive care for adults with focus on prevention, diagnosis, and treatment of diseases.',
        
        // Welcome Features
        'welcome-feature-1-title': 'Compassionate Care',
        'welcome-feature-1-desc': 'Every patient is treated with empathy, respect, and genuine concern for their wellbeing.',
        'welcome-feature-2-title': 'Personalized Approach',
        'welcome-feature-2-desc': 'Your health journey is unique, and we tailor our care to meet your individual needs and goals.',
        'welcome-feature-3-title': 'Modern Convenience',
        'welcome-feature-3-desc': 'From telehealth visits to online scheduling, we make healthcare accessible and convenient for you.',
        'welcome-feature-4-title': 'Trusted Expertise',
        'welcome-feature-4-desc': 'Board-certified physicians with years of experience, staying current with the latest medical advances.',
        
        // Trust Section
        'trust-title': 'Trusted Healthcare You Can Rely On',
        'trust-badge-1-title': 'Board Certified',
        'trust-badge-1-desc': 'American Board of Internal Medicine',
        'trust-badge-2-title': '5-Star Rated',
        'trust-badge-2-desc': 'Patient Satisfaction',
        'trust-badge-3-title': 'HIPAA Compliant',
        'trust-badge-3-desc': 'Your Privacy Protected',
        'trust-badge-4-title': 'Insurance Accepted',
        'trust-badge-4-desc': 'Most Major Plans',
        'trust-testimonial': '"Dr. Rodriguez takes the time to listen and provides thorough, compassionate care. I finally found a doctor who treats me as a person, not just a patient."',
        'trust-author': '— Verified Patient',
        
        // About Section
        'about-title': 'About Us',
        'about-intro': '"At myPCP, we believe internal medicine should be personal, comprehensive, and focused on your overall health."',
        'about-description': 'Our mission is to redefine the traditional clinic experience by combining modern technology, evidence-based medicine, and compassionate care.',
        'about-value-1-title': 'Compassion',
        'about-value-1-desc': 'Delivering every service with empathy and understanding.',
        'about-value-2-title': 'Trust',
        'about-value-2-desc': 'Building lasting relationships through transparency and respect.',
        'about-value-3-title': 'Innovation',
        'about-value-3-desc': 'Integrating modern telemedicine and wellness treatments for holistic care.',
        
        // Services Section
        'services-title': 'Our Services',
        'service-1-title': 'Preventive Medicine',
        'service-1-desc': 'Comprehensive check-ups, annual physicals, and lifestyle counseling focused on keeping you healthy — not just treating illness.',
        'service-2-title': 'Telehealth',
        'service-2-desc': 'See your physician from anywhere.',
        'service-3-title': 'Med Spa',
        'service-3-desc': 'Where wellness meets aesthetics.',
        'service-4-title': 'Clinical Trials',
        'service-4-desc': 'Be part of medical innovation.',
        'service-5-title': 'Infusions',
        'service-5-desc': 'Restorative IV therapy sessions for hydration, vitamin repletion, immune support, and fatigue recovery — all in a calm, spa-inspired environment.',
        
        // Team Section
        'team-title': 'Meet Our Team',
        'team-subtitle': 'Dedicated professionals who combine warmth with expertise.',
        'team-role': 'Board-Certified Internal Medicine Specialist',
        'team-bio': 'Dr. Melanio J. Rodriguez is a dedicated and compassionate board-certified internist with extensive experience in comprehensive adult healthcare. His practice philosophy centers on building lasting relationships with his patients through personalized, evidence-based medicine.',
        'team-bio-2': 'With a commitment to preventive care and chronic disease management, Dr. Rodriguez takes the time to listen to each patient\'s concerns and develop individualized treatment plans. He believes in empowering patients with knowledge and working collaboratively to achieve optimal health outcomes.',
        'team-bio-3': 'Dr. Rodriguez is fluent in both English and Spanish, allowing him to serve the diverse Miami community with cultural sensitivity and understanding. He stays current with the latest medical advances to provide his patients with cutting-edge, compassionate care.',
        'team-quote': '"My goal is to bring back the human touch in medicine — accessible, compassionate, and modern."',
        
        // FAQ Section
        'faq-title': 'Frequently Asked Questions',
        'faq-q1': 'What insurance plans do you accept?',
        'faq-a1': 'We accept most major insurance plans, including Medicare and Medicaid. Please contact our office to verify your specific plan.',
        'faq-q2': 'Do you offer same-day appointments?',
        'faq-a2': 'Yes, we do our best to accommodate same-day appointments for urgent concerns. Please call our office as early as possible.',
        'faq-q3': 'What should I bring to my first appointment?',
        'faq-a3': 'Please bring your insurance card, a valid ID, a list of current medications, and any relevant medical records or test results.',
        'faq-q4': 'Do you offer telemedicine visits?',
        'faq-a4': 'Yes, we offer telemedicine appointments for certain types of visits. Contact us to see if your concern is appropriate for a virtual visit.',
        'faq-q5': 'What are your office hours?',
        'faq-a5': 'Our office is open Monday through Friday, 9 AM to 5 PM. We are closed on weekends and major holidays.',
        
        // Contact Section
        'contact-title': 'Get in Touch',
        'contact-subtitle': 'We\'re here to help. Reach out to us today.',
        'contact-info-title': 'Contact Information',
        'contact-address-label': 'Address',
        'contact-address': '123 Healthcare Blvd, Miami, FL 33101',
        'contact-phone-label': 'Phone',
        'contact-email-label': 'Email',
        'contact-hours-label': 'Hours',
        'contact-hours': 'Mon-Fri: 9:00 AM - 5:00 PM',
        'contact-form-title': 'Send Us a Message',
        'contact-form-name': 'Your Name',
        'contact-form-email': 'Your Email',
        'contact-form-message': 'Your Message',
        'contact-form-submit': 'Send Message',
        'contact-form-warning': '⚠️ Do not include any sensitive medical or personal information in this form.',
        
        // Footer
        'footer-tagline': 'Expert Internal Medicine Care in Miami',
        'footer-quick-links': 'Quick Links',
        'footer-legal': 'Legal',
        'footer-privacy': 'Privacy Policy',
        'footer-hipaa': 'HIPAA Notice',
        'footer-recaptcha': 'This site is protected by reCAPTCHA and the Google',
        'footer-privacy-policy': 'Privacy Policy',
        'footer-and': 'and',
        'footer-terms': 'Terms of Service',
        'footer-apply': 'apply.',
        'footer-copyright': '© 2025 myPCP. All rights reserved.',
        
        // Modal
        'modal-close': 'Close'
    },
    es: {
        // Navegación
        'nav-home': 'Inicio',
        'nav-about': 'Nosotros',
        'nav-services': 'Servicios',
        'nav-team': 'Equipo',
        'nav-faq': 'Preguntas',
        'nav-contact': 'Contacto',
        'nav-appointment': 'Hacer Cita',
        
        // Sección Hero
        'hero-title': 'Su Compañero en Salud, en Cada Paso del Camino.',
        'hero-tagline': 'Medicina Interna Integral para el Bienestar de Toda la Vida.',
        'hero-cta-appointment': 'Reservar Cita',
        'hero-cta-contact': '¡Nos Encantaría Escucharte!',
        'hero-highlight-1': 'Citas el Mismo Día',
        'hero-highlight-2': 'Telesalud Disponible',
        'hero-highlight-3': 'Inglés y Español',
        
        // Tarjeta de Estadísticas
        'stats-welcome': 'Su Salud, Nuestra Prioridad',
        'stats-clinic': 'Especializado en Medicina Interna',
        'stats-years': 'Años de Experiencia',
        'stats-patients': 'Pacientes Satisfechos',
        'stats-rating': 'Satisfacción del Paciente',
        'stats-cta': 'Atención integral para adultos con enfoque en prevención, diagnóstico y tratamiento de enfermedades.',
        
        // Características de Bienvenida
        'welcome-feature-1-title': 'Atención Compasiva',
        'welcome-feature-1-desc': 'Cada paciente es tratado con empatía, respeto y genuina preocupación por su bienestar.',
        'welcome-feature-2-title': 'Enfoque Personalizado',
        'welcome-feature-2-desc': 'Su viaje de salud es único, y adaptamos nuestra atención para satisfacer sus necesidades y objetivos individuales.',
        'welcome-feature-3-title': 'Conveniencia Moderna',
        'welcome-feature-3-desc': 'Desde visitas de telesalud hasta programación en línea, hacemos que la atención médica sea accesible y conveniente para usted.',
        'welcome-feature-4-title': 'Experiencia Confiable',
        'welcome-feature-4-desc': 'Médicos certificados con años de experiencia, manteniéndose actualizados con los últimos avances médicos.',
        
        // Sección de Confianza
        'trust-title': 'Atención Médica Confiable en la que Puede Confiar',
        'trust-badge-1-title': 'Certificado',
        'trust-badge-1-desc': 'Junta Americana de Medicina Interna',
        'trust-badge-2-title': 'Calificación 5 Estrellas',
        'trust-badge-2-desc': 'Satisfacción del Paciente',
        'trust-badge-3-title': 'Cumple con HIPAA',
        'trust-badge-3-desc': 'Su Privacidad Protegida',
        'trust-badge-4-title': 'Seguro Aceptado',
        'trust-badge-4-desc': 'La Mayoría de los Planes',
        'trust-testimonial': '"El Dr. Rodríguez se toma el tiempo para escuchar y brinda atención compasiva y exhaustiva. Finalmente encontré un doctor que me trata como persona, no solo como paciente."',
        'trust-author': '— Paciente Verificado',
        
        // Sección Nosotros
        'about-title': 'Nosotros',
        'about-intro': '"En myPCP, creemos que la medicina interna debe ser personal, integral y enfocada en su salud general."',
        'about-description': 'Nuestra misión es redefinir la experiencia clínica tradicional combinando tecnología moderna, medicina basada en evidencia y atención compasiva.',
        'about-value-1-title': 'Compasión',
        'about-value-1-desc': 'Entregando cada servicio con empatía y comprensión.',
        'about-value-2-title': 'Confianza',
        'about-value-2-desc': 'Construyendo relaciones duraderas a través de la transparencia y el respeto.',
        'about-value-3-title': 'Innovación',
        'about-value-3-desc': 'Integrando telemedicina moderna y tratamientos de bienestar para una atención holística.',
        
        // Sección de Servicios
        'services-title': 'Nuestros Servicios',
        'service-1-title': 'Medicina Preventiva',
        'service-1-desc': 'Chequeos completos, exámenes físicos anuales y asesoramiento sobre el estilo de vida enfocado en mantenerlo saludable, no solo en tratar enfermedades.',
        'service-2-title': 'Telesalud',
        'service-2-desc': 'Vea a su médico desde cualquier lugar.',
        'service-3-title': 'Med Spa',
        'service-3-desc': 'Donde el bienestar se encuentra con la estética.',
        'service-4-title': 'Ensayos Clínicos',
        'service-4-desc': 'Sea parte de la innovación médica.',
        'service-5-title': 'Infusiones',
        'service-5-desc': 'Sesiones restaurativas de terapia intravenosa para hidratación, reposición de vitaminas, apoyo inmunológico y recuperación de la fatiga, todo en un ambiente tranquilo y tipo spa.',
        
        // Sección del Equipo
        'team-title': 'Conozca a Nuestro Equipo',
        'team-subtitle': 'Profesionales dedicados que combinan calidez con experiencia.',
        'team-role': 'Especialista Certificado en Medicina Interna',
        'team-bio': 'El Dr. Melanio J. Rodríguez es un internista certificado dedicado y compasivo con amplia experiencia en atención integral para adultos. Su filosofía de práctica se centra en construir relaciones duraderas con sus pacientes a través de medicina personalizada y basada en evidencia.',
        'team-bio-2': 'Con un compromiso con la atención preventiva y el manejo de enfermedades crónicas, el Dr. Rodríguez se toma el tiempo para escuchar las preocupaciones de cada paciente y desarrollar planes de tratamiento individualizados. Cree en empoderar a los pacientes con conocimiento y trabajar colaborativamente para lograr resultados de salud óptimos.',
        'team-bio-3': 'El Dr. Rodríguez es fluido tanto en inglés como en español, lo que le permite servir a la diversa comunidad de Miami con sensibilidad cultural y comprensión. Se mantiene actualizado con los últimos avances médicos para brindar a sus pacientes atención compasiva y de vanguardia.',
        'team-quote': '"Mi objetivo es devolver el toque humano a la medicina: accesible, compasiva y moderna."',
        
        // Sección de Preguntas
        'faq-title': 'Preguntas Frecuentes',
        'faq-q1': '¿Qué planes de seguro aceptan?',
        'faq-a1': 'Aceptamos la mayoría de los principales planes de seguro, incluidos Medicare y Medicaid. Comuníquese con nuestra oficina para verificar su plan específico.',
        'faq-q2': '¿Ofrecen citas el mismo día?',
        'faq-a2': 'Sí, hacemos nuestro mejor esfuerzo para acomodar citas el mismo día para preocupaciones urgentes. Llame a nuestra oficina lo antes posible.',
        'faq-q3': '¿Qué debo traer a mi primera cita?',
        'faq-a3': 'Traiga su tarjeta de seguro, una identificación válida, una lista de medicamentos actuales y cualquier registro médico o resultado de pruebas relevante.',
        'faq-q4': '¿Ofrecen visitas de telemedicina?',
        'faq-a4': 'Sí, ofrecemos citas de telemedicina para ciertos tipos de visitas. Contáctenos para ver si su preocupación es apropiada para una visita virtual.',
        'faq-q5': '¿Cuáles son sus horarios de oficina?',
        'faq-a5': 'Nuestra oficina está abierta de lunes a viernes, de 9 AM a 5 PM. Estamos cerrados los fines de semana y días festivos.',
        
        // Sección de Contacto
        'contact-title': 'Contáctenos',
        'contact-subtitle': 'Estamos aquí para ayudar. Comuníquese con nosotros hoy.',
        'contact-info-title': 'Información de Contacto',
        'contact-address-label': 'Dirección',
        'contact-address': '123 Healthcare Blvd, Miami, FL 33101',
        'contact-phone-label': 'Teléfono',
        'contact-email-label': 'Correo',
        'contact-hours-label': 'Horario',
        'contact-hours': 'Lun-Vie: 9:00 AM - 5:00 PM',
        'contact-form-title': 'Envíenos un Mensaje',
        'contact-form-name': 'Su Nombre',
        'contact-form-email': 'Su Correo',
        'contact-form-message': 'Su Mensaje',
        'contact-form-submit': 'Enviar Mensaje',
        'contact-form-warning': '⚠️ No incluya información médica o personal sensible en este formulario.',
        
        // Pie de Página
        'footer-tagline': 'Atención Experta en Medicina Interna en Miami',
        'footer-quick-links': 'Enlaces Rápidos',
        'footer-legal': 'Legal',
        'footer-privacy': 'Política de Privacidad',
        'footer-hipaa': 'Aviso HIPAA',
        'footer-recaptcha': 'Este sitio está protegido por reCAPTCHA y Google',
        'footer-privacy-policy': 'Política de Privacidad',
        'footer-and': 'y',
        'footer-terms': 'Términos de Servicio',
        'footer-apply': 'aplican.',
        'footer-copyright': '© 2025 myPCP. Todos los derechos reservados.',
        
        // Modal
        'modal-close': 'Cerrar'
    }
};

// Current language state
let currentLang = localStorage.getItem('language') || 'en';

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    setLanguage(currentLang);
    updateLangButtonText();
});

// Toggle language function
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    setLanguage(currentLang);
    localStorage.setItem('language', currentLang);
    updateLangButtonText();
}

// Update language button text
function updateLangButtonText() {
    const langText = document.getElementById('langText');
    if (langText) {
        langText.textContent = currentLang === 'en' ? 'ES' : 'EN';
    }
}

// Set language for all elements
function setLanguage(lang) {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Check if it's an input/textarea placeholder
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else if (element.tagName === 'BUTTON' || element.tagName === 'A') {
                element.textContent = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

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
    // Open Calendly popup instead of custom modal
    if (typeof Calendly !== 'undefined') {
        Calendly.initPopupWidget({url: 'https://calendly.com/mypcpclinic/booking'});
    } else {
        // Fallback if Calendly fails to load
        window.open('https://calendly.com/mypcpclinic/booking', '_blank');
    }
    return false;
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
    const footerLinks = document.querySelectorAll('a[onclick]');
    footerLinks.forEach(el => {
        if (el.getAttribute('onclick') && el.getAttribute('onclick').includes('sendEmail')) {
            el.href = 'mailto:' + em;
            el.textContent = em;
            el.onclick = null;
        }
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
            _subject: 'Contact from myPCP Website',
            _replyto: email,
            _captcha: recaptchaToken ? 'reCAPTCHA verified' : 'N/A',
            _autoresponse: 'Thank you for contacting myPCP! We have received your message and will get back to you within 24 hours. If you need immediate assistance, please call us at (786) 525-5664.'
        })
    })
    .then(response => {
        console.log('Response status:', response.status);
        return response.json();
    })
    .then(data => {
        console.log('Response data:', data);
        // Formspree returns {ok: true} on success
        if (data.ok) {
            openConfirmationModal();
            document.getElementById('contactForm').reset();
        } else {
            console.error('Formspree returned error:', data);
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
            _subject: 'Appointment Request from myPCP Website',
            _replyto: patientEmail,
            _captcha: recaptchaToken ? 'reCAPTCHA verified' : 'N/A',
            _autoresponse: 'Thank you for your appointment request at myPCP! We have received your request for ' + serviceLabel + ' on ' + appointmentDate + ' at ' + appointmentTime + '. We will contact you shortly to confirm your appointment. If you have any questions, please call us at (786) 525-5664.'
        })
    })
    .then(response => {
        console.log('Response status:', response.status);
        return response.json();
    })
    .then(data => {
        console.log('Response data:', data);
        
        // Formspree returns {ok: true} on success
        if (data.ok) {
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
            console.error('Formspree returned error:', data);
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
        navbar.style.background = 'rgba(255, 255, 255, 1)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.08)';
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
