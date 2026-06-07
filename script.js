// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        navbar.style.padding = '0.75rem 5%';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.padding = '1rem 5%';
    }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// 滚动动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 应用动画到各种卡片
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll(
        '.rule-card, .robot-card, .team-card, .honor-card, .video-card'
    );

    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
});

// 导航链接激活状态
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    const navHeight = document.querySelector('.navbar').offsetHeight;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + current) {
            link.style.color = '#fbbf24';
        }
    });
});
