// Hamburger Menu Toggle
const hamburgerBtn = document.querySelector('.hamburger-btn');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburgerBtn.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburgerBtn.contains(e.target) && !navMenu.contains(e.target)) {
            hamburgerBtn.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Ratings Section Carousel Controls
/*const ratingCarousels = document.querySelectorAll('#ratings .carousel');

ratingCarousels.forEach(carousel => {
    const prevBtn = carousel.querySelector('.carousel-control-prev');
    const nextBtn = carousel.querySelector('.carousel-control-next');
    const carouselInner = carousel.querySelector('.carousel-inner');
    const carouselItems = carousel.querySelectorAll('.carousel-item');
    
    if (prevBtn && nextBtn && carouselInner && carouselItems.length > 0) {
        let currentIndex = 0;
        
        // Find active item index
        carouselItems.forEach((item, index) => {
            if (item.classList.contains('active')) {
                currentIndex = index;
            }
        });

        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            carouselItems[currentIndex].classList.remove('active');
            currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
            carouselItems[currentIndex].classList.add('active');
        });

        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            carouselItems[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % carouselItems.length;
            carouselItems[currentIndex].classList.add('active');
        });
    }
});

// Testimonials Section Carousel Indicators
const testimonialsCarousel = document.querySelector('#carousel-testimonials');
const testimonialIndicators = document.querySelectorAll('#carousel-testimonials .carousel-indicators button');
const testimonialItems = document.querySelectorAll('#carousel-testimonials .carousel-item');

if (testimonialsCarousel && testimonialIndicators.length > 0 && testimonialItems.length > 0) {
    testimonialIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all items and indicators
            testimonialItems.forEach(item => item.classList.remove('active'));
            testimonialIndicators.forEach(ind => ind.classList.remove('active'));
            
            // Add active class to clicked indicator and corresponding item
            indicator.classList.add('active');
            if (testimonialItems[index]) {
                testimonialItems[index].classList.add('active');
            }
        });
    });
}*/

