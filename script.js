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