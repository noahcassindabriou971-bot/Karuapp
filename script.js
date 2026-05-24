// ========================================
// CMS LOCAL - DONNÉES DES FONCTIONNALITÉS
// ========================================
// Pour ajouter une nouvelle fonctionnalité :
// 1. Ajoutez une nouvelle entrée dans ce tableau
// 2. Créez les icônes SVG correspondantes
// 3. Ajoutez les traductions FR/EN dans l'objet 'translations'

const featuresData = [
    {
        id: 'quiz',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5 1 1 0 0 1 .5 2H6"></path>
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5 1 1 0 0 0-.5 2H18"></path>
                <path d="M4 22h16"></path>
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
              </svg>`,
        titleKey: 'quizTitle',
        descriptionKey: 'quizDescription',
        gradientDark: 'linear-gradient(to bottom right, rgba(218, 14, 23, 0.2), rgba(255, 104, 0, 0.2))',
        gradientLight: 'linear-gradient(to bottom right, #eff6ff, #dbeafe)',
        borderDark: '1px solid rgba(255, 104, 0, 0.3)',
        iconBgDark: 'linear-gradient(to bottom right, #DA0E17, #FF6800)',
        iconBgLight: '#2563eb'
    },
    {
        id: 'geo',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>`,
        titleKey: 'geoTitle',
        descriptionKey: 'geoDescription',
        gradientDark: 'linear-gradient(to bottom right, rgba(255, 104, 0, 0.2), rgba(218, 14, 23, 0.2))',
        gradientLight: 'linear-gradient(to bottom right, #f0fdf4, #dcfce7)',
        borderDark: '1px solid rgba(255, 104, 0, 0.3)',
        iconBgDark: 'linear-gradient(to bottom right, #FF6800, #DA0E17)',
        iconBgLight: '#16a34a'
    },
    {
        id: 'notif',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
              </svg>`,
        titleKey: 'notifTitle',
        descriptionKey: 'notifDescription',
        gradientDark: 'linear-gradient(to bottom right, rgba(218, 14, 23, 0.2), rgba(0, 0, 0, 0.5))',
        gradientLight: 'linear-gradient(to bottom right, #faf5ff, #f3e8ff)',
        borderDark: '1px solid rgba(218, 14, 23, 0.3)',
        iconBgDark: '#DA0E17',
        iconBgLight: '#9333ea'
    }
];

// ========================================
// TRADUCTIONS FR/EN
// ========================================
const translations = {
    fr: {
        // Navigation
        features: 'Fonctionnalités',
        about: 'À propos',
        download: 'Télécharger',
        
        // Hero
        heroTitle: 'Découvrez la culture',
        heroTitleHighlight: 'guadeloupéenne',
        heroDescription: 'KaruApp vous fait explorer la richesse culturelle de la Guadeloupe à travers des quiz interactifs et des notifications géolocalisées en temps réel.',
        downloadApp: 'Télécharger l\'app',
        learnMore: 'En savoir plus',
        
        // Features
        featuresTitle: 'Une expérience culturelle unique',
        featuresDescription: 'KaruApp combine apprentissage, découverte et technologie pour vous immerger dans la culture gwada',
        quizTitle: 'Quiz Culturels',
        quizDescription: 'Testez vos connaissances sur l\'histoire, la gastronomie, la musique et les traditions guadeloupéennes à travers des quiz ludiques et éducatifs.',
        geoTitle: 'Géolocalisation',
        geoDescription: 'Découvrez des informations culturelles liées à votre position en temps réel. Chaque lieu raconte une histoire unique de l\'archipel.',
        notifTitle: 'Notifications Live',
        notifDescription: 'Recevez des alertes en temps réel sur les événements culturels, festivals et activités proches de vous. Ne manquez rien de la vie locale !',
        
        // About
        whyTitle: 'Pourquoi KaruApp ?',
        whyDescription: 'KaruApp est née de la passion pour la préservation et la promotion de la culture guadeloupéenne. Notre mission est de rendre accessible à tous, habitants et visiteurs, la richesse culturelle de notre île.',
        whyPoint1: 'Contenu authentique créé par des experts locaux',
        whyPoint2: 'Interface intuitive et expérience utilisateur fluide',
        whyPoint3: 'Mises à jour régulières avec de nouveaux contenus',
        
        // Download
        readyTitle: 'Prêt à explorer la Guadeloupe ?',
        readyDescription: 'Téléchargez KaruApp gratuitement et commencez votre voyage culturel dès maintenant',
        downloadOn: 'Télécharger sur',
        availableOn: 'Disponible sur',
        appStore: 'App Store',
        googlePlay: 'Google Play',
        
        // Footer
        footerDescription: 'Votre compagnon culturel pour découvrir la Guadeloupe',
        application: 'Application',
        legal: 'Légal',
        privacy: 'Confidentialité',
        terms: 'Conditions d\'utilisation',
        mentions: 'Mentions légales',
        contact: 'Contact',
        rights: 'Tous droits réservés.'
    },
    en: {
        // Navigation
        features: 'Features',
        about: 'About',
        download: 'Download',
        
        // Hero
        heroTitle: 'Discover',
        heroTitleHighlight: 'Guadeloupean culture',
        heroDescription: 'KaruApp lets you explore the cultural richness of Guadeloupe through interactive quizzes and real-time geolocated notifications.',
        downloadApp: 'Download the app',
        learnMore: 'Learn more',
        
        // Features
        featuresTitle: 'A unique cultural experience',
        featuresDescription: 'KaruApp combines learning, discovery and technology to immerse you in Gwada culture',
        quizTitle: 'Cultural Quizzes',
        quizDescription: 'Test your knowledge of Guadeloupean history, gastronomy, music and traditions through fun and educational quizzes.',
        geoTitle: 'Geolocation',
        geoDescription: 'Discover cultural information related to your position in real time. Each location tells a unique story of the archipelago.',
        notifTitle: 'Live Notifications',
        notifDescription: 'Receive real-time alerts about cultural events, festivals and activities near you. Don\'t miss anything of the local life!',
        
        // About
        whyTitle: 'Why KaruApp?',
        whyDescription: 'KaruApp was born from a passion for preserving and promoting Guadeloupean culture. Our mission is to make the cultural richness of our island accessible to all, residents and visitors alike.',
        whyPoint1: 'Authentic content created by local experts',
        whyPoint2: 'Intuitive interface and smooth user experience',
        whyPoint3: 'Regular updates with new content',
        
        // Download
        readyTitle: 'Ready to explore Guadeloupe?',
        readyDescription: 'Download KaruApp for free and start your cultural journey now',
        downloadOn: 'Download on',
        availableOn: 'Available on',
        appStore: 'App Store',
        googlePlay: 'Google Play',
        
        // Footer
        footerDescription: 'Your cultural companion to discover Guadeloupe',
        application: 'Application',
        legal: 'Legal',
        privacy: 'Privacy',
        terms: 'Terms of Use',
        mentions: 'Legal Notice',
        contact: 'Contact',
        rights: 'All rights reserved.'
    }
};

// ========================================
// ÉTAT GLOBAL
// ========================================
let currentLanguage = 'fr';
let isDarkMode = true;

// ========================================
// FONCTION : GÉNÉRATION DES CARTES FEATURES (CMS)
// ========================================
function renderFeatures() {
    const featuresGrid = document.getElementById('features-grid');
    if (!featuresGrid) return;
    
    featuresGrid.innerHTML = '';
    
    featuresData.forEach(feature => {
        const card = document.createElement('div');
        card.className = 'feature-card';
        
        // Appliquer les styles selon le mode
        if (isDarkMode) {
            card.style.background = feature.gradientDark;
            card.style.border = feature.borderDark;
        } else {
            card.style.background = feature.gradientLight;
        }
        
        const iconBox = document.createElement('div');
        iconBox.className = 'feature-icon-box';
        iconBox.style.background = isDarkMode ? feature.iconBgDark : feature.iconBgLight;
        
        const iconWrapper = document.createElement('div');
        iconWrapper.className = 'feature-icon';
        iconWrapper.innerHTML = feature.icon;
        iconBox.appendChild(iconWrapper);
        
        const title = document.createElement('h3');
        title.className = 'feature-title';
        title.textContent = translations[currentLanguage][feature.titleKey];
        
        const description = document.createElement('p');
        description.className = 'feature-description';
        description.textContent = translations[currentLanguage][feature.descriptionKey];
        
        card.appendChild(iconBox);
        card.appendChild(title);
        card.appendChild(description);
        featuresGrid.appendChild(card);
    });
}

// ========================================
// FONCTION : MISE À JOUR DES TRADUCTIONS
// ========================================
function updateTranslations() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[currentLanguage][key]) {
            el.textContent = translations[currentLanguage][key];
        }
    });
    
    // Mettre à jour les labels de langue
    document.getElementById('lang-label').textContent = currentLanguage.toUpperCase();
    document.getElementById('lang-label-mobile').textContent = currentLanguage.toUpperCase();
    
    // Régénérer les features avec les nouvelles traductions
    renderFeatures();
}

// ========================================
// FONCTION : BASCULER LA LANGUE
// ========================================
function toggleLanguage() {
    currentLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
    updateTranslations();
}

// ========================================
// FONCTION : BASCULER LE THÈME
// ========================================
function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode');
    
    // Régénérer les features avec le nouveau thème
    renderFeatures();
}

// ========================================
// FONCTION : SCROLL FLUIDE AVEC LOADER
// ========================================
function smoothScrollWithLoader(target) {
    const overlay = document.getElementById('loading-overlay');
    overlay.classList.add('active');
    
    setTimeout(() => {
        overlay.classList.remove('active');
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, 900);
}

// ========================================
// FONCTION : BASCULER LE MENU MOBILE
// ========================================
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    
    mobileMenu.classList.toggle('active');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
}

// ========================================
// INITIALISATION AU CHARGEMENT
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Activer le mode sombre par défaut
    document.body.classList.add('dark-mode');
    
    // Afficher le loader initial
    const loadingOverlay = document.getElementById('loading-overlay');
    loadingOverlay.classList.add('active');
    
    setTimeout(() => {
        loadingOverlay.classList.remove('active');
    }, 1200);
    
    // Générer les fonctionnalités
    renderFeatures();
    
    // ========================================
    // EVENT LISTENERS - BOUTONS LANGUE
    // ========================================
    document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);
    document.getElementById('lang-toggle-mobile').addEventListener('click', toggleLanguage);
    
    // ========================================
    // EVENT LISTENERS - BOUTONS THÈME
    // ========================================
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    document.getElementById('theme-toggle-mobile').addEventListener('click', toggleTheme);
    
    // ========================================
    // EVENT LISTENERS - MENU MOBILE
    // ========================================
    document.getElementById('menu-toggle').addEventListener('click', toggleMobileMenu);
    
    // ========================================
    // EVENT LISTENERS - NAVIGATION SCROLL
    // ========================================
    const scrollButtons = document.querySelectorAll('[data-scroll]');
    scrollButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const target = button.getAttribute('data-scroll');
            
            // Fermer le menu mobile si ouvert
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu.classList.contains('active')) {
                toggleMobileMenu();
            }
            
            smoothScrollWithLoader(target);
        });
    });
});