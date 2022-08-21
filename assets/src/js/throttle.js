const Throttle = (callback, options) => {
    const config = {
        speed: 250,
        control: true,
    }
    
    const state = Object.assign(config, options);

    let isExpanded = state.control;
    if (isExpanded) return console.log('destroy');

    isExpanded = true;

    setTimeout(() => {
        callback();
        isExpanded = false;
    }, state.speed);
}

const documentSetCSSVariables = () => {
    return document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
}

const scrollObserver = () => {
    window.addEventListener('scroll', () => {
        Throttle(documentSetCSSVariables,
            {
                speed: 250,
                control: false
            }
        )
    }, false);

    return window.removeEventListener('scroll', Throttle, false);
}

scrollObserver();