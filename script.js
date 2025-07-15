// Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Form submission
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const service = document.getElementById('service').value;
            
            // Here you would normally send the data to a server
            // For this example, we'll just show an alert
            alert(`Merci ${name}! Votre demande pour le service ${service} a été reçue. Nous vous contacterons à ${email} sous peu.`);
            
            // Reset the form
            contactForm.reset();
        });
        
        // Animation on scroll
        window.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('.story, .pricing, .contact');
            const windowHeight = window.innerHeight;
            
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const sectionVisible = 150;
                
                if (sectionTop < windowHeight - sectionVisible) {
                    section.style.opacity = '1';
                    section.style.transform = 'translateY(0)';
                }
            });
        });
        
        // Initialize sections with fade-in effect
        document.addEventListener('DOMContentLoaded', function() {
            const sections = document.querySelectorAll('.story, .pricing, .contact');
            
            sections.forEach(section => {
                section.style.opacity = '0';
                section.style.transform = 'translateY(20px)';
                section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            });
            
            // Trigger the animation for the hero section
            setTimeout(() => {
                document.querySelector('.hero h1').style.opacity = '1';
                document.querySelector('.hero p').style.opacity = '1';
                document.querySelector('.cta-button').style.opacity = '1';
            }, 100);
        });