let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        header.classList.add('hidden');
    } else {
        // Scrolling up
        header.classList.remove('hidden');
    }
    lastScrollTop = scrollTop;
});

function navigate(event, url) {
    event.preventDefault();
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = url;
    }, 500);
}

window.addEventListener('load', () => {
    document.body.classList.add('fade-in');
});

document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.body.classList.add('fade-out');
    setTimeout(() => {
        this.submit();
    }, 500);
});

// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const fullscreenMenu = document.querySelector('.fullscreen-menu');
    const body = document.querySelector('body');

    hamburgerMenu.addEventListener('click', () => {
        fullscreenMenu.classList.toggle('active');
        body.classList.toggle('menu-open');
    });

    fullscreenMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            fullscreenMenu.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });
});
