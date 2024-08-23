document.addEventListener('DOMContentLoaded', function() {
    // Contact form submission
  

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Image slider for home section
    const slides = document.querySelectorAll('.slider img');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(nextSlide, 5000);  
});


document.addEventListener('DOMContentLoaded', function() {
    

    // Sticky navigation
    const nav = document.getElementById('sticky-nav');
    const navTop = nav.offsetTop;

    function stickyNavigation() {
        if (window.scrollY >= navTop) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    }

    window.addEventListener('scroll', stickyNavigation);
});

function openLightbox(img) {
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
}

function closeLightbox() {
    var lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}

// Close lightbox when pressing Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeLightbox();
    }
});

// Prevent closing when clicking on the image itself
document.getElementById('lightbox-img').addEventListener('click', function(event) {
    event.stopPropagation();
});

document.addEventListener('DOMContentLoaded', function() {
    const carouselSlide = document.querySelector('.carousel-container');
    const carouselImages = document.querySelectorAll('.carousel-slide');

    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let counter = 0;
    const size = carouselImages[0].clientWidth;

    nextBtn.addEventListener('click', () => {
        if (counter >= carouselImages.length - 1) return;
        carouselSlide.style.transition = "transform 0.5s ease-in-out";
        counter++;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    prevBtn.addEventListener('click', () => {
        if (counter <= 0) return;
        carouselSlide.style.transition = "transform 0.5s ease-in-out";
        counter--;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });
});


function toggleReadMore() {
    var moreContent = document.getElementById("moreContent");
    var btnText = document.getElementById("readMoreBtn");

    if (moreContent.style.display === "block") {
        moreContent.style.display = "none";
        btnText.innerHTML = "Read More";
    } else {
        moreContent.style.display = "block";
        btnText.innerHTML = "Read Less";
    }
}

// Language toggle functionality
const englishBtn = document.getElementById('englishBtn');
const teluguBtn = document.getElementById('teluguBtn');
const elementsToTranslate = document.querySelectorAll('[data-translate]');

const translations = {
    'en': {
        // Navigation
        'home': 'Home',
        'about': 'About',
        'gallery': 'Gallery',
        'contact': 'Contact',
        'enquiry': 'Live Sale',

        // Header
        'farm-title': 'Sri Krishna Sheep and Goat Farm',

        // About section
        'about-us': 'About Us',
        'about-description': 'Sri Krishna Sheep and Goat Farm is a family-owned business dedicated to raising healthy and happy animals. With over two decades of experience, we\'ve established ourselves as a leading provider of high-quality sheep and goats in the region.',
        'quality-commitment': 'Our Quality Commitment',
        'quality-description': 'At Sri Krishna Farm, we pride ourselves on the exceptional quality of our livestock:',
        'premium-breeds': 'Premium Breeds: We raise superior breeds known for their meat quality and wool production.',
        'health-approach': 'Health-First Approach: Regular veterinary check-ups and vaccinations ensure our animals are in top health.',
        'ethical-practices': 'Ethical Raising Practices: Our animals are raised in spacious, clean environments, prioritizing their well-being.',
        'nutrition-excellence': 'Nutrition Excellence',
        'nutrition-description': 'The secret to our animals\' quality lies in their nutrition:',
        'organic-feed': 'Organic Feed: We use locally sourced, organic feed to ensure the best nutrition.',
        'balanced-diet': 'Balanced Diet: Our animals enjoy a scientifically formulated diet for optimal growth and health.',
        'fresh-grazing': 'Fresh Grazing: Access to lush, natural pastures supplements their diet with essential nutrients.',
        'read-more': 'Read More',

        // Live Sale section
        'live-sale': 'Live Sale Available!',
        'live-sale-description': 'Experience the convenience of selecting your animals in person. Our live sale feature allows you to visit the farm, choose your preferred sheep or goats, and take them home the same day!',
        'enquire-button': 'Enquire About Live Sales',

        // Gallery section
        'gallery-title': 'Gallery',

        // Contact section
        'contact-us': 'Contact Us',
        'name': 'Name',
        'phone': 'Phone',
        'email': 'Email',
        'address': 'Address',
        'your-name': 'Your Name',
        'your-email': 'Your Email',
        'your-number': 'Enter your number',
        'your-message': 'Your Message',
        'send-message': 'Send Message',

        // Footer
        'rights-reserved': 'All rights reserved.',
        'mission': 'Our mission is to provide high-quality livestock and promote sustainable farming practices. Learn more about our journey',
        'here': 'here',
        'follow-us': 'Follow us on social media for the latest updates and news.'
    },
    'te': {
        // Navigation
        'home': 'హోమ్',
        'about': 'మా గురించి',
        'gallery': 'గ్యాలరీ',
        'contact': 'సంప్రదించండి',
        'enquiry': 'లైవ్ సేల్',

        // Header
        'farm-title': 'శ్రీ కృష్ణ గొర్రెల మరియు మేకల ఫారం',

        // About section
        'about-us': 'మా గురించి',
        'about-description': 'శ్రీ కృష్ణ గొర్రెల మరియు మేకల ఫారం ఆరోగ్యకరమైన మరియు సంతోషకరమైన జంతువులను పెంచడానికి అంకితమైన కుటుంబ యాజమాన్య వ్యాపారం. రెండు దశాబ్దాలకు పైగా అనుభవంతో, మేము ప్రాంతంలో నాణ్యమైన గొర్రెలు మరియు మేకల ప్రముఖ సరఫరాదారుగా స్థిరపడ్డాము.',
        'quality-commitment': 'మా నాణ్యత నిబద్ధత',
        'quality-description': 'శ్రీ కృష్ణ ఫార్మ్‌లో, మా పశువుల అసాధారణ నాణ్యతపై మేము గర్వపడతాము:',
        'premium-breeds': 'ప్రీమియం జాతులు: మాంసం నాణ్యత మరియు ఉన్ని ఉత్పత్తికి ప్రసిద్ధి చెందిన శ్రేష్ఠమైన జాతులను మేము పెంచుతాము.',
        'health-approach': 'ఆరోగ్య-ప్రథమ విధానం: క్రమం తప్పకుండా పశువైద్య తనిఖీలు మరియు టీకాలు మా జంతువులు ఉత్తమ ఆరోగ్యంగా ఉండేలా చూస్తాయి.',
        'ethical-practices': 'నైతిక పెంపకం పద్ధతులు: మా జంతువులు విశాలమైన, శుభ్రమైన వాతావరణంలో పెంచబడతాయి, వాటి సంక్షేమానికి ప్రాధాన్యత ఇస్తాయి.',
        'nutrition-excellence': 'పోషకాహార ప్రావీణ్యత',
        'nutrition-description': 'మా జంతువుల నాణ్యతకు రహస్యం వాటి పోషకాహారంలో ఉంది:',
        'organic-feed': 'ఆర్గానిక్ ఫీడ్: ఉత్తమ పోషకాహారాన్ని అందించడానికి మేము స్థానికంగా సేకరించిన ఆర్గానిక్ ఫీడ్‌ని ఉపయోగిస్తాము.',
        'balanced-diet': 'సమతుల్య ఆహారం: మా జంతువులు అనుకూలమైన వృద్ధి మరియు ఆరోగ్యం కోసం శాస్త్రీయంగా రూపొందించబడిన ఆహారాన్ని ఆస్వాదిస్తాయి.',
        'fresh-grazing': 'తాజా మేత: సమృద్ధిగా ఉన్న సహజ పచ్చిక బయళ్లకు ప్రాప్యత వాటి ఆహారాన్ని అవసరమైన పోషకాలతో పూరిస్తుంది.',
        'read-more': 'మరింత చదవండి',

        // Live Sale section
        'live-sale': 'లైవ్ సేల్ అందుబాటులో ఉంది!',
        'live-sale-description': 'మీ జంతువులను వ్యక్తిగతంగా ఎంచుకునే సౌకర్యాన్ని అనుభవించండి. మా లైవ్ సేల్ ఫీచర్ మీరు ఫార్మ్‌ని సందర్శించడానికి, మీకు ఇష్టమైన గొర్రెలు లేదా మేకలను ఎంచుకోవడానికి మరియు అదే రోజు వాటిని ఇంటికి తీసుకెళ్లడానికి అనుమతిస్తుంది!',
        'enquire-button': 'లైవ్ సేల్స్ గురించి విచారించండి',

        // Gallery section
        'gallery-title': 'గ్యాలరీ',

        // Contact section
        'contact-us': 'మమ్మల్ని సంప్రదించండి',
        'name': 'పేరు',
        'phone': 'ఫోన్',
        'email': 'ఇమెయిల్',
        'address': 'చిరునామా',
        'your-name': 'మీ పేరు',
        'your-email': 'మీ ఇమెయిల్',
        'your-number': 'మీ నంబర్‌ను నమోదు చేయండి',
        'your-message': 'మీ సందేశం',
        'send-message': 'సందేశాన్ని పంపండి',

        // Footer
        'rights-reserved': 'అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.',
        'mission': 'నాణ్యమైన పశువులను అందించడం మరియు స్థిరమైన వ్యవసాయ పద్ధతులను ప్రోత్సహించడం మా లక్ష్యం. మా ప్రయాణం గురించి మరింత తెలుసుకోండి',
        'here': 'ఇక్కడ',
        'follow-us': 'తాజా అప్‌డేట్‌లు మరియు వార్తల కోసం సోషల్ మీడియాలో మమ్మల్ని అనుసరించండి.'
    }
};

function translatePage(lang) {
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

englishBtn.addEventListener('click', () => {
    englishBtn.classList.add('active');
    teluguBtn.classList.remove('active');
    translatePage('en');
});

teluguBtn.addEventListener('click', () => {
    teluguBtn.classList.add('active');
    englishBtn.classList.remove('active');
    translatePage('te');
});

// Initialize page in English
translatePage('en');
