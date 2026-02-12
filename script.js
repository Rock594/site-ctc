// ==========================================================
// 1. DATA TRANSLATION (Données de localisation pour FR, MG, EN)
// ==========================================================
const translations = {
    'fr': {
        // Navbar
        nav_vision: "Vision & Mission",
        nav_valeurs: "Valeurs",
        nav_formations: "Formations",
        nav_projets: "Projets",
        nav_contact: "Contact",
        // Hero Section
        hero_title_part1: "Formation en ",
        hero_title_part2: "Informatique & Internet",
        hero_subtitle: "Une formation pratique, adaptée aux débutants comme aux passionnés.",
        hero_button: "EN SAVOIR PLUS",
        // Début
        debut_title: "Comment nous avons commencé",
        debut_p1: "Notre centre de formation est né de la volonté de rendre l'informatique et Internet accessibles à tous, que vous soyez étudiant, professionnel ou simplement passionné par le numérique.",
        debut_p2: "Depuis notre création, nous avons accompagné de nombreux apprenants dans leur parcours, en leur offrant des formations pratiques, modernes et adaptées aux besoins du marché du travail.",
        // Vision & Mission
        vision_title: "Notre vision",
        vision_text: "Notre vision est de former une nouvelle génération de professionnels compétents, capables de relever les défis technologiques d'aujourd'hui et de demain.",
        mission_title: "Notre mission",
        mission_text: "Notre mission est de donner à chacun les compétences nécessaires pour réussir dans un monde de plus en plus digitalisé. Nous croyons que l'éducation technologique est une clé pour l'avenir et qu'avec les bons outils, tout le monde peut devenir acteur du changement numérique.",
        // Valeurs
        valeurs_title: "Nos valeurs fondamentales",
        valeurs_subtitle: "Chez nous, les valeurs ne sont pas de simples mots: elles guident nos actions et façonnent notre manière de former. Nous avons choisi d'ancrer notre démarche autour de trois piliers essentiels:",
        valeur1_title: "La créativité",
        valeur1_text: "Nous croyons que chaque apprenant a en lui un potentiel unique. La créativité est au cœur de notre pédagogie.",
        valeur2_title: "Inclusion",
        valeur2_text: "Notre centre est un espace ouvert à tous, sans distinction de niveau, pour que chacun se sente à sa place.",
        valeur3_title: "Diversité",
        valeur3_text: "La richesse vient de la différence. Nous valorisons la diversité des profils et des parcours.",
        // Formations
        formation_main_title: "Nos Formations",
        formation_subtitle_part1: "Domaines ",
        formation_subtitle_part2: "clés",
        formation_intro: "Découvrez les parcours qui vous mèneront au succès numérique:",
        f_office: "Informatique de base",
        f_office1: "Informatique avancée",
        f_internet: "Internet",
        f_excel: "Excel avancé",
        f_access: "Programmation Access",
        f_maintenance: "Maintenance informatique",
        f_reseau: "Réseau informatique",
        // Projets
        projets_title: "Projets et actualités",
        projet1_title: "Design pour la Diversité et Peau Neuve collaborent pour la relance du site Web",
        projet1_text: "Donnez ici un bref aperçu du projet réussi. Vous pouvez parler de la marque du client, du principal défi...",
        projet2_title: "Notre studio de design créatif met l'accent sur la diversité et l'inclusion",
        projet2_text: "Un court texte décrivant l'initiative interne ou le projet en cours pour montrer le dynamisme du centre.",
        projet3_title: "Notre directeur a une esprit professionnelle pour mettre en place la formation",
        projet3_text: "Donnez ici un bref aperçu du projet réussi. Vous pouvez parler de la marque du client, du principal défi...",
        btn_learn_more: "EN SAVOIR PLUS",
        // Contact
        contact_title: "Contactez-moi",
        contact_subtitle: "Avez-vous des questions sur nos formations ? Écrivez-nous directement.",
        form_name_label: "Nom",
        form_name_placeholder: "Votre nom complet",
        form_email_label: "Email",
        form_email_placeholder: "Votre adresse email",
        form_subject_label: "Sujet",
        form_subject_placeholder: "Sujet de votre message",
        form_message_label: "Message",
        form_message_placeholder: "Votre message...",
        form_submit_button: "Envoyer le message",
        // Footer
        footer_description: "CTC Madagascar dia foibe fanofanana matihanina manokana amin'ny informatika sy ny teknolojia nomerika. Manolotra vahaolana sy fahaiza-manao ho an'ny taranaka ho avy.",
        footer_links_title: "Rohy haingana",
        footer_policy: "Politique de Confidentialité",
        footer_contact_title: "Mifandraisa aminay",
        footer_address_label: "Adiresy",
        footer_phone_label: "Tel",
        footer_email_label: "Email",
        footer_hours_label: "Ora Fisokafana",
        footer_copyright: "© 2025 CTC MADAGASCAR. Tous droits réservés. | Fampandrosoana Nomerika.",
    },
    'mg': {
        // Navbar
        nav_vision: "Fahitana & Iraka",
        nav_valeurs: "Soatoavina",
        nav_formations: "Fanofanana",
        nav_projets: "Tetikasa",
        nav_contact: "Fifandraisana",
        // Hero Section
        hero_title_part1: "Fanofanana momba ny ",
        hero_title_part2: "Informatika & Internet",
        hero_subtitle: "Fanofanana azo ampiharina, mifanaraka amin'ny vao manomboka sy ireo efa tia ny nomerika.",
        hero_button: "MILA FANAZAVANA FANAMPINY",
        // Début
        debut_title: "Ny niandohanay",
        debut_p1: "Ny foibe fanofanana anay dia teraka noho ny finiavana hampanjaka ny informatika sy Internet ho azon'ny rehetra, na mpianatra ianao, na matihanina, na liana amin'ny nomerika fotsiny.",
        debut_p2: "Hatramin'ny nananganana anay, dia mpianatra maro no notohanana tamin'ny diany, tamin'ny fanolorana fanofanana azo ampiharina, maoderina ary mifanaraka amin'ny filàn'ny tsenan'ny asa.",
        // Vision & Mission
        vision_title: "Ny fahitana anay (Vision)",
        vision_text: "Ny fahitana anay dia ny mamolavola taranaka matihanina vaovao mahay, afaka miatrika ny fanamby ara-teknolojia ankehitriny sy amin'ny ho avy.",
        mission_title: "Ny iraka anay (Mission)",
        mission_text: "Ny iraka anay dia ny manome ny tsirairay ny fahaiza-manao ilaina hahombiazana amin'ny tontolo nomerika miha-mitombo. Mino izahay fa ny fanabeazana ara-teknolojia dia fanalahidin'ny ho avy ary amin'ny fitaovana mety, afaka mandray anjara amin'ny fanovana nomerika ny rehetra.",
        // Valeurs
        valeurs_title: "Ireo soatoavina fototra ijoroanay",
        valeurs_subtitle: "Amintsika, ny soatoavina dia tsy teny fotsiny: mitarika ny asantsika sy mamolavola ny fomba fanofanana antsika izy ireo. Mifototra amin'ny andry telo lehibe izahay:",
        valeur1_title: "Ny Famoronana (Créativité)",
        valeur1_text: "Mino izahay fa samy manana ny talentany miavaka ny mpianatra tsirairay. Ny famoronana no ivon'ny fomba fampianaranay.",
        valeur2_title: "Fampidirana (Inclusion)",
        valeur2_text: "Toerana misokatra ho an'ny rehetra ny foibenay, tsy misy fanavakavahana amin'ny ambaratonga, mba hahatsapan'ny tsirairay fa ao amin'ny toerana mety izy.",
        valeur3_title: "Fahasamihafana (Diversité)",
        valeur3_text: "Avy amin'ny fahasamihafana no ahazoana harena. Manome lanja ny fahasamihafan'ny karazana olona sy ny diany izahay.",
        // Formations
        formation_main_title: "Ireo Fanofanana anay",
        formation_subtitle_part1: "Sehatra ",
        formation_subtitle_part2: "lehibe",
        formation_intro: "Fantaro ireo lalan-kizorana hitondra anao amin'ny fahombiazana nomerika:",
        f_office: "Informatika birao",
        f_internet: "Internet & Nomerika",
        f_excel: "Excel mandroso",
        f_access: "Microsoft Access",
        f_maintenance: "Fikojakojana informatika",
        f_reseau: "Réseau informatika",
        // Projets
        projets_title: "Tetikasa sy vaovao",
        projet1_title: "Design for Diversity sy Peau Neuve dia niara-niasa tamin'ny famerenana ny tranokala",
        projet1_text: "Omeo fanazavana fohy momba ny tetikasa nahomby eto. Azonao atao ny miresaka momba ny mariky ny mpanjifa, ny fanamby lehibe...",
        projet2_title: "Ny studio famoronana anay dia manasongadina ny fahasamihafana sy ny fampidirana",
        projet2_text: "Lahatsoratra fohy mamaritra ny hetsika anatiny na ny tetikasa mitohy mba hampisehoana ny fahavitrihan'ny foibe.",
        projet3_title: "Ny talenanay dia manana toe-tsaina matihanina amin'ny fananganana ny fanofanana",
        projet3_text: "Omeo fanazavana fohy momba ny tetikasa nahomby eto. Azonao atao ny miresaka momba ny mariky ny mpanjifa, ny fanamby lehibe...",
        btn_learn_more: "Jereo bebe kokoa",
        // Contact
        contact_title: "Mifandraisa aminay",
        contact_subtitle: "Manana fanontaniana momba ny fanofanana anay ve ianao? Soraty mivantana aminay.",
        form_name_label: "Anarana",
        form_name_placeholder: "Ny anaranao feno",
        form_email_label: "Email",
        form_email_placeholder: "Ny adiresy email-nao",
        form_subject_label: "Lohahevitra",
        form_subject_placeholder: "Lohahevitry ny hafatrao",
        form_message_label: "Hafatra",
        form_message_placeholder: "Ny hafatrao...",
        form_submit_button: "Alefaso ny hafatra",
        // Footer
        footer_description: "CTC Madagascar dia foibe fanofanana matihanina manokana amin'ny informatika sy ny teknolojia nomerika. Manolotra vahaolana sy fahaiza-manao ho an'ny taranaka ho avy.",
        footer_links_title: "Rohy haingana",
        footer_policy: "Politikan'ny Tsiambaratelo",
        footer_contact_title: "Mifandraisa aminay",
        footer_address_label: "Adiresy",
        footer_phone_label: "Tel",
        footer_email_label: "Email",
        footer_hours_label: "Ora Fisokafana",
        footer_copyright: "© 2025 CTC MADAGASCAR. Zo rehetra voatokana. | Fampandrosoana Nomerika.",
    },
    'en': {
        // Navbar
        nav_vision: "Vision & Mission",
        nav_valeurs: "Values",
        nav_formations: "Training",
        nav_projets: "Projects",
        nav_contact: "Contact",
        // Hero Section
        hero_title_part1: "Training in ",
        hero_title_part2: "IT & Internet",
        hero_subtitle: "Practical training, adapted for beginners and tech enthusiasts alike.",
        hero_button: "LEARN MORE",
        // Début
        debut_title: "How We Started",
        debut_p1: "Our training center was born from the desire to make IT and the Internet accessible to everyone, whether you are a student, professional, or simply passionate about digital technology.",
        debut_p2: "Since our creation, we have supported many learners on their journey, offering them practical, modern training adapted to the needs of the job market.",
        // Vision & Mission
        vision_title: "Our Vision",
        vision_text: "Our vision is to train a new generation of competent professionals capable of meeting the technological challenges of today and tomorrow.",
        mission_title: "Our Mission",
        mission_text: "Our mission is to give everyone the necessary skills to succeed in an increasingly digital world. We believe that technology education is a key to the future and that with the right tools, everyone can become an actor of digital change.",
        // Valeurs
        valeurs_title: "Our Core Values",
        valeurs_subtitle: "For us, values are not just words: they guide our actions and shape our training approach. We have chosen to anchor our process around three essential pillars:",
        valeur1_title: "Creativity",
        valeur1_text: "We believe that every learner has unique potential. Creativity is at the heart of our pedagogy.",
        valeur2_title: "Inclusion",
        valeur2_text: "Our center is an open space for everyone, regardless of skill level, so that everyone feels at home.",
        valeur3_title: "Diversity",
        valeur3_text: "Wealth comes from difference. We value the diversity of profiles and backgrounds.",
        // Formations
        formation_main_title: "Our Training Courses",
        formation_subtitle_part1: "Key ",
        formation_subtitle_part2: "Areas",
        formation_intro: "Discover the paths that will lead you to digital success:",
        f_office: "Office IT",
        f_internet: "Internet & Digital",
        f_excel: "Advanced Excel",
        f_access: "Microsoft Access",
        f_maintenance: "IT Maintenance",
        f_reseau: "Computer Network",
        // Projets
        projets_title: "Projects and News",
        projet1_title: "Design for Diversity and Peau Neuve collaborate on website relaunch",
        projet1_text: "Give a brief overview of the successful project here. You can talk about the client's brand, the main challenge...",
        projet2_title: "Our creative design studio emphasizes diversity and inclusion",
        projet2_text: "A short text describing the internal initiative or ongoing project to show the center's dynamism.",
        projet3_title: "Our director has a professional spirit in setting up the training",
        projet3_text: "Give a brief overview of the successful project here. You can talk about the client's brand, the main challenge...",
        btn_learn_more: "LEARN MORE",
        // Contact
        contact_title: "Contact Us",
        contact_subtitle: "Do you have questions about our training? Write to us directly.",
        form_name_label: "Name",
        form_name_placeholder: "Your full name",
        form_email_label: "Email",
        form_email_placeholder: "Your email address",
        form_subject_label: "Subject",
        form_subject_placeholder: "Subject of your message",
        form_message_label: "Message",
        form_message_placeholder: "Your message...",
        form_submit_button: "Send Message",
        // Footer
        footer_description: "CTC Madagascar is a professional training center specialized in IT and digital technology. We offer solutions and skills for the next generation.",
        footer_links_title: "Quick Links",
        footer_policy: "Privacy Policy",
        footer_contact_title: "Contact Us",
        footer_address_label: "Address",
        footer_phone_label: "Phone",
        footer_email_label: "Email",
        footer_hours_label: "Opening Hours",
        footer_copyright: "© 2025 CTC MADAGASCAR. All rights reserved. | Digital Development.",
    }
};


// ==========================================================
// 2. FONCTION DE LOCALISATION (Fanovana Fiteny)
// ==========================================================
function setLanguage(lang) {
    const currentTranslations = translations[lang];

    // 1. Manova ny votoatin'ny singa rehetra
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        const translation = currentTranslations[key] || '';

        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            // Ho an'ny INPUT sy TEXTAREA
            if (element.hasAttribute('placeholder')) {
                 element.setAttribute('placeholder', translation);
            } else if (element.tagName === 'INPUT' && element.getAttribute('type') === 'submit') {
                element.setAttribute('value', translation);
            }
        } else {
            // Ho an'ny singa hafa rehetra (Text)
            element.innerText = translation;
        }
    });

    // 2. Manavao ny 'lang' attribute an'ny HTML
    document.documentElement.setAttribute('lang', lang);
    
    // 3. Manavao ny bokotra 'active'
    document.querySelectorAll('.btn-lang').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    // 4. Mitahiry ny safidin'ny mpampiasa
    localStorage.setItem('preferredLang', lang);
}


// ==========================================================
// 3. FONCTION D'ANIMATION AU SCROLL
// ==========================================================
function setupScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    

    // Azo ampiana ity fizarana ity any aorian'ny 'D. Fanaovana scroll ho an'ny Navigation Link'
// --- E. Logic ho an'ny Formulaire Contact (Fandefasana Data) ---

const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

// Eto no tokony ho adiresin'ny API na Script PHP anao any amin'ny server
const API_ENDPOINT = 'https://rabobasonmarius@gmail.com/api/save-contact'; 

contactForm.addEventListener('submit', async function(e) {
    e.preventDefault(); // Manakana ny fandefasana formulaire mahazatra (mi-reload ny pejy)

    // Manome valiny ho an'ny mpampiasa mandritra ny fandefasana
    formMessage.style.color = '#fff';
    formMessage.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    formMessage.style.padding = '10px';
    formMessage.style.borderRadius = '5px';
    formMessage.innerText = 'Fandefasana... azafady miandry...';
    
    // Maka ny angon-drakitra avy amin'ny formulaire
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        timestamp: new Date().toISOString() // Mampiditra ny fotoana nandefasana
    };

    try {
        // Mampiasa Fetch API handefasana ny angon-drakitra any amin'ny server
        const response = await fetch(API_ENDPOINT, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData), // Mamadika ny JS object ho JSON string
        });

        if (response.ok) {
            // Fandefasana nahomby
            formMessage.style.color = 'var(--ctc-accent-green)'; // Maitso manjelatra
            formMessage.style.backgroundColor = 'rgba(168, 230, 28, 0.2)';
            
            // Fampiasana ny fanafohezana fiteny ho an'ny hafatra
            const lang = localStorage.getItem('preferredLang') || 'fr';
            let successMessage;
            if (lang === 'mg') {
                successMessage = 'Voaray ny hafatrao! Hifandray aminao tsy ho ela izahay.';
            } else if (lang === 'en') {
                successMessage = 'Message sent successfully! We will contact you shortly.';
            } else {
                successMessage = 'Message envoyé avec succès! Nous vous contacterons bientôt.';
            }
            formMessage.innerText = successMessage;
            
            contactForm.reset(); // Manadio ny formulaire
        } else {
            // Fandefasana tsy nahomby (Server error, 4xx, 5xx)
            formMessage.style.color = '#ff6b6b'; // Mena
            formMessage.style.backgroundColor = 'rgba(255, 107, 107, 0.2)';
            
            const lang = localStorage.getItem('preferredLang') || 'fr';
            let errorMessage;
            if (lang === 'mg') {
                errorMessage = 'Tsy nahomby ny fandefasana. Andramo kely fotsiny azafady.';
            } else if (lang === 'en') {
                errorMessage = 'Submission failed. Please try again later.';
            } else {
                errorMessage = 'Échec de l\'envoi. Veuillez réessayer plus tard.';
            }
            formMessage.innerText = errorMessage;
        }

    } catch (error) {
        // Tsy nisy fifandraisana tamin'ny server mihitsy (Network error)
        console.error('Erreur réseau:', error);
        formMessage.style.color = '#ff6b6b';
        formMessage.style.backgroundColor = 'rgba(255, 107, 107, 0.2)';

        const lang = localStorage.getItem('preferredLang') || 'fr';
        let networkError;
        if (lang === 'mg') {
            networkError = 'Misy olana amin\'ny tambajotra. Jereo ny internet-nao.';
        } else if (lang === 'en') {
            networkError = 'Network error. Please check your connection.';
        } else {
            networkError = 'Erreur de connexion. Veuillez vérifier votre réseau.';
        }
        formMessage.innerText = networkError;
    }
});
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const animation = element.getAttribute('data-animation');
                const delay = element.getAttribute('data-delay') || '0s';
                
                // Mampiditra ny class Animation
                element.classList.add('animate__animated', `animate__${animation}`);
                element.style.setProperty('--animate-delay', delay);
                
                // Manala ny observer rehefa efa nivoaka ny animation
                observer.unobserve(element);
            }
        });
    }, {
        rootMargin: '0px',
        // Mivoaka ny animation rehefa mahita 10%
        threshold: 0.1 
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
}


// ==========================================================
// 4. EXECUTION PRINCIPALE (DOM Content Loaded)
// ==========================================================
document.addEventListener("DOMContentLoaded", function() {
    // A. Manomboka ny animasiona
    setupScrollAnimations();
    
    // B. Manomboka ny localisation
    const defaultLang = localStorage.getItem('preferredLang') || 'fr';
    setLanguage(defaultLang);


    // C. Mampiasa ny Language Switcher
    const langButtons = document.querySelectorAll('.btn-lang');

    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedLang = this.getAttribute('data-lang');
            setLanguage(selectedLang);
        });
    });

    // D. Fanaovana scroll ho an'ny Navigation Link
    document.querySelectorAll('.nav-link-scroll').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Ajanona ny fihetsika default
            e.preventDefault();
            
            // Mitady ny ID an'ilay section
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});