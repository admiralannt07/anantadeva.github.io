document.addEventListener('DOMContentLoaded', () => {
    const skillsContainer = document.querySelector('.skills-carousel');
    
    let isDown = false;
    let startX;
    let scrollLeft;

    skillsContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        skillsContainer.classList.add('active');
        startX = e.pageX - skillsContainer.offsetLeft;
        scrollLeft = skillsContainer.scrollLeft;
    });

    skillsContainer.addEventListener('mouseleave', () => {
        isDown = false;
        skillsContainer.classList.remove('active');
    });

    skillsContainer.addEventListener('mouseup', () => {
        isDown = false;
        skillsContainer.classList.remove('active');
    });

    skillsContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - skillsContainer.offsetLeft;
        const walk = (x - startX) * 2; //scroll-fast
        skillsContainer.scrollLeft = scrollLeft - walk;
    });
});