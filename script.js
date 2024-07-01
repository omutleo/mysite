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
    const footer = document.querySelector('.footer');
    const footerRect = footer.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (window.scrollY > window.innerHeight) {
        scrollButton.classList.add('visible');
    } else {
        scrollButton.classList.remove('visible');
    }

    if (footerRect.top < windowHeight) {
        scrollButton.style.bottom = `${windowHeight - footerRect.top + 20}px`;
    } else {
        scrollButton.style.bottom = '20px';
    }
};
