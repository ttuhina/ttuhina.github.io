document.addEventListener('DOMContentLoaded', () => {

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Achievements Carousel
    const carousel = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;

    function showSlide(index) {
        currentSlide = index % slides.length;
        carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    
    function nextSlide() {
        currentSlide++;
        showSlide(currentSlide);
    }
    
    nextBtn.addEventListener('click', nextSlide);
    
    // Slow down auto-slide to 6 seconds
    setInterval(nextSlide, 5500);

    // Parallax effect for the hero section
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        document.querySelector('#hero').style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    });

    // Animate skill items on scroll
    const skillItems = document.querySelectorAll('.skill-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `float 3s ease-in-out infinite ${Math.random() * 2}s`;
            } else {
                entry.target.style.animation = 'none';
            }
        });
    }, { threshold: 0.5 });

    skillItems.forEach(item => {
        observer.observe(item);
    });

    // Typewriter effect for the hero section
    const heroText = "Computer Science and Engineering Hons. (IoT and IS)";
    const heroElement = document.querySelector('#typewriter');
    let i = 0;

    const typeWriter = () => {
        if (i < heroText.length) {
            heroElement.innerHTML += heroText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };
    typeWriter();

    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.menu li a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            menu.classList.remove('active');
        });
    });
});
