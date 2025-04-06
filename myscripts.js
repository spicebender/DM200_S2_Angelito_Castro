// Mobile Menu Button
const navbar = document.getElementById('mobile-header')

function toggleMobileMenu(){
    if (navbar.classList.contains('show')) {
        navbar.classList.remove('show');
    }else{
        navbar.classList.add('show');
    }
}

// Make Header Appear
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 5) {
    header.classList.remove('hidden');
    } else {
    header.classList.add('hidden');
    }
});
