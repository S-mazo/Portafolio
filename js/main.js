document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('year').textContent = new Date().getFullYear();

    const birthDate = new Date(2006, 3, 18); 
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    
    if (today.getMonth() < birthDate.getMonth() || 
        (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    document.getElementById('age').textContent = age;

    // Accesibilidad: respetar la preferencia de movimiento reducido del sistema
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
        // En móviles se reducen drásticamente las partículas para no saturar CPU/GPU
        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        const particleCount = isMobile ? 150 : 1500;

        particlesJS('particles-js', {
        "particles": {
            "number": {
            "value": particleCount,
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
    } // fin del bloque de partículas (se omite con movimiento reducido)

    // Smooth scroll for "Scroll to Discover" button
    const scrollToDiscoverBtn = document.getElementById('scroll-to-discover-btn');
    if (scrollToDiscoverBtn) {
        scrollToDiscoverBtn.addEventListener('click', function() {
            const educationSection = document.getElementById('education');
            if (educationSection) {
                educationSection.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
            }
        });
    }

    // Smooth scroll for "Contáctame" button
    const contactBtn = document.getElementById('contact-btn');
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
            }
        });
    }

    const hiddenSections = document.querySelectorAll('.hidden-section');

    if (prefersReducedMotion) {
        // Sin animaciones: mostrar todas las secciones de inmediato
        hiddenSections.forEach(section => {
            section.classList.add('visible-section');
            section.classList.remove('hidden-section');
        });
    } else {
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
    }

    const favicon = document.getElementById('favicon');
    if (favicon && !prefersReducedMotion) {
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
        const openGithub = () => {
            window.open('https://github.com/S-mazo');
        };
        crowImage.addEventListener('click', openGithub);
        // Accesible por teclado: Enter o espacio
        crowImage.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openGithub();
            }
        });
    }

});
