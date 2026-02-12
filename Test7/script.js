document.addEventListener('DOMContentLoaded', () => {
    
    // ===============================================
    // 1. Logic pour l' Animation et Smooth Scroll (Tsy Miova)
    // ===============================================
    const sectionsToAnimate = document.querySelectorAll('.animated-section');
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };

    function triggerSectionAnimation(targetSection) {
        if (targetSection.id === 'accueil') return; 

        targetSection.querySelectorAll('.animate-on-scroll').forEach(element => {
            if (!element.classList.contains('animate__animated')) {
                const animationName = element.getAttribute('data-animation') || 'fadeIn';
                const delay = element.getAttribute('data-delay') || '0s';
                
                element.style.setProperty('--animate-delay', delay);
                element.classList.add('animate__animated', `animate__${animationName}`);
                element.style.opacity = '1';
                
                element.addEventListener('animationend', () => {
                    element.classList.remove(`animate__${animationName}`);
                }, { once: true });
            }
        });
    }

    function handleIntersect(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.id !== 'accueil') {
                    triggerSectionAnimation(entry.target);
                }
                observer.unobserve(entry.target);
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sectionsToAnimate.forEach(section => {
        section.querySelectorAll('.animate-on-scroll').forEach(el => el.style.opacity = '0');
        observer.observe(section);
    });

    document.querySelectorAll('.nav-link-scroll').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            const headerHeight = document.querySelector('header').offsetHeight;

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - headerHeight + 2, 
                    behavior: 'smooth'
                });
                triggerSectionAnimation(targetSection);
                const navbarCollapse = document.getElementById('navbarNav');
                if (navbarCollapse.classList.contains('show')) {
                    new bootstrap.Collapse(navbarCollapse, { toggle: false }).hide();
                }
            }
        });
    });

    // Header Sticky logic (Tsy miova)
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('shadow');
        } else {
            header.classList.remove('shadow');
        }
    });

    // ===============================================
    // 2. Logic logic pour l' Inscription & EmailJS
    // ===============================================

    // 2.1 Pour choisir la Formation (Section #formation)
    const courseItems = document.querySelectorAll('.course-item');
    const selectedCourseInput = document.getElementById('selected-course');

    courseItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Rétrait 'active' pour toute la formation 
            courseItems.forEach(i => i.classList.remove('active-course'));
            
            // Ajouter 'active' sur la formation choisir
            this.classList.add('active-course');
            
            // Remplir l' Input hidden pour formulaire
            const courseName = this.getAttribute('data-course');
            selectedCourseInput.value = courseName;
            
            // Feedback rapide pour l'utilisateur
            selectedCourseInput.placeholder = `Formation sélectionnée: ${courseName}`;
        });
    });

    // 2.2 Envoie Formulaire Inscription (#inscription-form)
    const inscriptionForm = document.getElementById('inscription-form');
    const formFormationMessage = document.getElementById('form-formation-message');

    inscriptionForm.addEventListener('submit', function(e) {
        e.preventDefault();
        formFormationMessage.textContent = 'Envoi en cours...';
        formFormationMessage.style.color = 'orange';

        // Il faut être sûr qu'il existe une formation choisit
        if (selectedCourseInput.value.trim() === '') {
            formFormationMessage.textContent = 'Veuillez sélectionner une formation d\'abord.';
            formFormationMessage.style.color = 'red';
            return;
        }

        emailjs.sendForm(
            'service_j17544a',      //  Service ID
            'template_88lxb3a', // Template ID pour la Formation
            this
        )
        .then(() => {
            formFormationMessage.textContent = 'Inscription envoyée avec succès! Nous vous recontacterons bientôt.';
            formFormationMessage.style.color = 'green';
            inscriptionForm.reset();
            selectedCourseInput.placeholder = 'Cliquez sur une formation à gauche pour la sélectionner.';
            // la rétrait des toutes 'active' 
            courseItems.forEach(i => i.classList.remove('active-course'));
        }, (error) => {
            console.error('Erreur EmailJS Inscription:', error);
            formFormationMessage.textContent = `Échec de l'envoi. Erreur: ${error.text}. Réessayez ou contactez-nous par email.`;
            formFormationMessage.style.color = 'red';
        });
    });
    
    // 2.3 Envoie Formulaire Contact Général (#general-contact-form)
    const generalContactForm = document.getElementById('general-contact-form');
    const formContactMessage = document.getElementById('form-contact-message');

    generalContactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        formContactMessage.textContent = 'Envoi en cours...';
        formContactMessage.style.color = 'orange';


        emailjs.send("service_j17544a", "contact_ctc_madagascar", templateParams);

        emailjs.sendForm(
            'service_j17544a',      //  Service ID 
            'template_88lxb3a', // Template ID pour le Contact Général
            this
        )

        .then(() => {
            formContactMessage.textContent = 'Message envoyé avec succès! Nous vous répondrons rapidement.';
            formContactMessage.style.color = 'green';
            generalContactForm.reset();
        }, (error) => {
            console.error('Erreur EmailJS Contact Général:', error);
            formContactMessage.textContent = `Échec de l'envoi. Erreur: ${error.text}.`;
            formContactMessage.style.color = 'red';
        });
    });

});