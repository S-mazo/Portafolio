document.addEventListener('DOMContentLoaded', function () {
    particlesJS('particles-js', {
        "particles": {
            "number": {
            "value": 1500,
            "density": {
                "enable": true,
                "value_area": 2000
            }
            },
            "color": {
            "value": "#00c2ff"
            },
            "shape": {
            "type": "circle",
            },
            "opacity": {
            "value": 0.5,
            "random": true,
            },
            "size": {
            "value": 2,
            "random": true,
            },
            "line_linked": {
            "enable": false,
            "distance": 10,
            "color": "#a900ff",
            "opacity": 1,
            "width": 1
            },
            "move": {
            "enable": true,
            "speed": 3,
            "direction": "bottom-left",
            "out_mode": "out",
            }
        },
        "interactivity": {
            "detect_on": "window",
            "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "bubble"
            },
            "resize": true
            },
            "modes": {
            "bubble": {
                "distance": 100,
                "size": 10,
                "duration": 0.08,
                "opacity": 1,
                "speed": 3
            },
            "repulse": {
                "distance": 100,
                "duration": 0.4
            },
            }
        }
    });

    // Smooth scroll for "Scroll to Discover" button
    const scrollToDiscoverBtn = document.getElementById('scroll-to-discover-btn');
    if (scrollToDiscoverBtn) {
        scrollToDiscoverBtn.addEventListener('click', function() {
            const educationSection = document.getElementById('education');
            if (educationSection) {
                educationSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    const hiddenSections = document.querySelectorAll('.hidden-section');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.25 // 25% of the section must be visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible-section');
                entry.target.classList.remove('hidden-section');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, observerOptions);

    hiddenSections.forEach(section => {
        observer.observe(section);
    });

    const favicon = document.getElementById('favicon');
    if (favicon) {
        let isBlack = true; // Starts with black favicon
        const toggleFavicon = () => {
            favicon.href = isBlack ? 'img/Cuervo black.png' : 'img/Cuervo.png';
            isBlack = !isBlack; // Alterna el estado
        };
        // Changes every 2 seconds
        setInterval(toggleFavicon, 2000);
    }


    const crowImage = document.getElementById('crow-overlay');
    if (crowImage) {
        crowImage.addEventListener('click', () => {
            window.open('https://github.com/S-mazo');
        });
    }

    const udemyCard = document.getElementById('udemy-card');
    if (udemyCard) {
        udemyCard.addEventListener('click', () => {
            window.open('https://www.udemy.com/course/python-total');
        });
    }

    const unilasallistaCard = document.getElementById('unilasallista-card');
    if (unilasallistaCard) {
        unilasallistaCard.addEventListener('click', () => {
            window.open('https://www.unilasallista.edu.co/');
        });
    }

    const dcbotCard = document.getElementById('dc-bot-card');
    if (dcbotCard) {
        dcbotCard.addEventListener('click', () => {
            alert('Este proyecto es privado por el momento. En un futuro cercano podré compartir más detalles al respecto.');
        });
    }

    const portfolioCard = document.getElementById('portfolio-card');
    if (portfolioCard) {
        portfolioCard.addEventListener('click', () => {
            window.open('https://github.com/S-mazo/Portafolio');
        });
    }

    const cibermentoriaCard = document.getElementById('cibermentoria-card');
    if (cibermentoriaCard) {
        cibermentoriaCard.addEventListener('click', () => {
            window.open('https://github.com/S-mazo/CibermentorIA/tree/n8n');
        });
    }

    const faceidCard = document.getElementById('faceid-card');
    if (faceidCard) {
        faceidCard.addEventListener('click', () => {
            window.open('https://github.com/S-mazo/FaceID');
        });
    }

    const webpagecrudCard = document.getElementById('webpage-crud-card');
    if (webpagecrudCard) {
        webpagecrudCard.addEventListener('click', () => {
            window.open('https://github.com/S-mazo/WEBPAGE-CRUD');
        });
    }

    const urbusCard = document.getElementById('urbus-card');
    if (urbusCard) {
        urbusCard.addEventListener('click', () => {
            alert('Este proyecto es privado por el momento. En un futuro cercano podré compartir más detalles al respecto.');
        });
    }

});
