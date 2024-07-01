function redirectToHome() {
    window.location.href = 'home.html';
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onscroll = function() {
    const scrollButton = document.querySelector('.scroll-button');
    if (window.scrollY > window.innerHeight) {
        scrollButton.classList.add('visible');
    } else {
        scrollButton.classList.remove('visible');
    }
};
