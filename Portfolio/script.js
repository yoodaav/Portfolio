document.addEventListener('DOMContentLoaded', function() {
    // Animation de la navigation mobile
    const burger = document.querySelector('.burger');
    const navMenu = document.querySelector('.nav-links'); // Renommé en navMenu
    
    if (burger && navMenu) {
        burger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            burger.classList.toggle('toggle');
        });
        
        // Fermer le menu lorsqu'un lien est cliqué
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                burger.classList.remove('toggle');
            });
        });
    }
    
    // Animation du texte (uniquement sur la page d'accueil)
    const animatedText = document.querySelector('.animated-text');
    const cursor = document.querySelector('.cursor');
    
    if (animatedText && cursor) {
        const textArray = ["Data Scientist junior", " Data Analyst junior"];
        let textArrayIndex = 0;
        let charIndex = 0;
        
        function type() {
            if (charIndex < textArray[textArrayIndex].length) {
                animatedText.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, 100);
            } else {
                setTimeout(erase, 2000);
            }
        }
        
        function erase() {
            if (charIndex > 0) {
                animatedText.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, 50);
            } else {
                textArrayIndex++;
                if (textArrayIndex >= textArray.length) {
                    textArrayIndex = 0;
                }
                setTimeout(type, 500);
            }
        }
        
        // Démarrer l'animation
        setTimeout(type, 1000);
    }
    
    // Simulation du téléchargement du CV
    const downloadCv = document.getElementById('download-cv');
    if (downloadCv) {
        downloadCv.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Téléchargement du CV en cours...');
            // Ici, vous devriez mettre le lien vers votre vrai CV
            // window.location.href = 'chemin/vers/votre-cv.pdf';
        });
    }
    
    // Animation des barres de compétences (uniquement sur la page compétences)
    const skillBars = document.querySelectorAll('.skill-level');
    
    if (skillBars.length > 0) {
        function animateSkillBars() {
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = width;
            });
        }
        
        // Observer pour animer les compétences lorsqu'elles deviennent visibles
        const skillsSection = document.querySelector('#skills');
        if (skillsSection) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateSkillBars();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            observer.observe(skillsSection);
        }
    }
    
    // Gestion du formulaire de contact (uniquement sur la page contact)
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Message envoyé avec succès! Je vous répondrai dès que possible.');
            contactForm.reset();
        });
    }
    
    // Marquer la page active dans la navigation
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a'); // Déclaration unique ici
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (currentPage === linkPage) {
            link.classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Menu Burger
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Gestion du clic sur le burger
    burger.addEventListener('click', () => {
        // Activer/désactiver la navigation
        nav.classList.toggle('nav-active');
        
        // Animation du burger
        burger.classList.toggle('toggle');
    });
    
    // Fermer le menu quand un lien est cliqué
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
        });
    });
    
    // [Le reste de vos fonctions...]

});



