document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    if (window.scrollY > 50) {
        navbar.style.background = isDark
            ? 'rgba(15, 23, 42, 0.97)'
            : 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = '';
    }
});

const themeToggle = document.getElementById('theme-toggle');
const themeIcon   = themeToggle.querySelector('.theme-icon');
const html        = document.documentElement;

const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

applyTheme(initialTheme);

themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
});

function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

const skillsSection = document.getElementById('habilidades');
if (skillsSection) {
    const bars = skillsSection.querySelectorAll('.skill-progress');
    let animated = false;
    function animateBars() {
        if (animated) return;
        animated = true;
        bars.forEach(bar => {
            const target = bar.dataset.width;
            bar.style.width = '0%';
            requestAnimationFrame(() => requestAnimationFrame(() => {
                bar.style.width = target;
            }));
        });
    }
    bars.forEach(bar => {
        bar.dataset.width = bar.style.width;
        bar.style.width = '0%';
    });
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateBars();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    skillsObserver.observe(skillsSection);
    const rect = skillsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        animateBars();
    }
}

const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = `${i * 0.08}s`;
            entry.target.classList.add('visible');
            cardObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    cardObserver.observe(el);
});

document.head.insertAdjacentHTML('beforeend', `
<style>
    .visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
</style>
`);
