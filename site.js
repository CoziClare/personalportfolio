lucide.createIcons();

document.querySelectorAll('.glow-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    });
});

const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('visible'), i * 50);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    revealEls.forEach(el => observer.observe(el));
}
