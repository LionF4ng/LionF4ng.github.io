// Portfolio interactivity — clean & minimal

document.addEventListener('DOMContentLoaded', () => {
    /* ---- Current year in footer ---- */
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* ---- Mobile menu toggle ---- */
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const open = navLinks.classList.toggle('open');
            menuToggle.setAttribute('aria-expanded', String(open));
        });

        // Close the menu after clicking a link (mobile)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    /* ---- Reveal sections on scroll ---- */
    const sections = document.querySelectorAll('section');
    const revealObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    sections.forEach(section => revealObserver.observe(section));

    /* ---- Active nav link based on scroll position (scrollspy) ---- */
    const navAnchors = Array.from(document.querySelectorAll('.nav-links a'));
    const idSections = document.querySelectorAll('section[id]');

    const spyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navAnchors.forEach(a => {
                    a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, { rootMargin: '-45% 0px -50% 0px' });

    idSections.forEach(section => spyObserver.observe(section));
});
