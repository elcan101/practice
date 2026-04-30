// Navbar Scroll Effekti
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Hamar Scroll (Smooth Scroll)
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Göndərmə Simulyasiyası
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mesajınız uğurla göndərildi!');
    this.reset();
});