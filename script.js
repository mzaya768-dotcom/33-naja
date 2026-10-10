document.addEventListener('DOMContentLoaded', () => {
    const cursorDot = document.getElementById('cursorDot');
    const cursorOutline = document.getElementById('cursorOutline');

    // Track mouse coordinates for lagging custom cursor
    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Immediate update for dot
        cursorDot.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`;
    });

    // Smooth lagging animation loop for outline cursor
    function animateCursor() {
        let distX = mouseX - outlineX;
        let distY = mouseY - outlineY;

        outlineX += distX * 0.15;
        outlineY += distY * 0.15;

        cursorOutline.style.transform = `translate(${outlineX}px, ${outlineY}px)`;
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover effect adjustments for interactive elements
    const interactiveElements = document.querySelectorAll('a, button');

    interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.style.width = '55px';
            cursorOutline.style.height = '55px';
            cursorOutline.style.backgroundColor = 'rgba(99, 102, 241, 0.1)';
            cursorOutline.style.borderColor = 'rgba(6, 182, 212, 0.8)';
        });

        el.addEventListener('mouseleave', () => {
            cursorOutline.style.width = '36px';
            cursorOutline.style.height = '36px';
            cursorOutline.style.backgroundColor = 'transparent';
            cursorOutline.style.borderColor = 'rgba(99, 102, 241, 0.6)';
        });
    });
});