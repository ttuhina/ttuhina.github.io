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
    // Typewriter effect for the hero section
const heroTexts = [
    "Computer Science and Engineering student",
    "IoT and Embedded Systems enthusiast",
    "3x Dean's List for academic excellence",
    "ML Researcher",
    "Patent Holder 💡"
];
const heroElement = document.querySelector('#typewriter');
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentText = heroTexts[textIndex];
    
    if (!isDeleting) {
        heroElement.innerHTML = currentText.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeWriter, 2000);
        } else {
            setTimeout(typeWriter, 50);
        }
    } else {
        heroElement.innerHTML = currentText.substring(0, charIndex);
        charIndex--;
        
        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % heroTexts.length;
            setTimeout(typeWriter, 500);
        } else {
            setTimeout(typeWriter, 30);
        }
    }
}

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

document.addEventListener('DOMContentLoaded', () => {
    const offerLetterContainers = document.querySelectorAll('.offer-letter-container');
    const modal = document.querySelector('.offer-letter-modal');
    const modalImage = document.querySelector('.offer-letter-modal-content');

    offerLetterContainers.forEach(container => {
        // Add click event to both the container and the image
        [container, container.querySelector('.offer-letter')].forEach(element => {
            element.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent event bubbling
                const offerLetterImg = container.querySelector('.offer-letter');
                modalImage.src = offerLetterImg.src;
                modal.classList.add('active');
            });
        });
    });

    // Close modal when clicking outside the image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});
