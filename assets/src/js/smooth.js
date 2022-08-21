document.addEventListener('DOMContentLoaded', () => {
    scrollBehavior();
});

const scrollBehavior = () => {
    const anchors = document.querySelectorAll('.s-Header_navLink');
    if (!anchors) return;

    anchors.forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute('href') == '#' ? 'header' : e.currentTarget.getAttribute('href');
            const targetElementId = targetId.substr(targetId.indexOf('#'));
            const targetSelector = document.querySelector(targetElementId);
            if (!targetSelector) return console.warn('対象のDOMがありません。');
            return smoothScrollAnimation(targetSelector.offsetTop);
        });
    }); 
}

function smoothScrollAnimation(position) {
    let targetPosition = position;
    let startPosition = window.pageYOffset;
    let distance = targetPosition - startPosition;
    let duration = 750;
    let start = null;

    window.requestAnimationFrame(step);

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) window.requestAnimationFrame(step);
    }
}

function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
};