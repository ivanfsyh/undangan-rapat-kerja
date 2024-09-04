const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-md');
        navbar.classList.add('bg-[#e4e4e4]');
        navbar.classList.remove('bg-transparent');
        navbar.classList.remove('hidden');
    } else {
        navbar.classList.add('bg-transparent');
        navbar.classList.add('hidden');
        navbar.classList.remove('shadow-md');
        navbar.classList.remove('bg-[#e4e4e4]');
    }
});