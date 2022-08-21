export class TextSlideAnimation {
    constructor() {
        this.animationTarget = document.querySelectorAll('[data-js-title-animate]');
        this.animationContainer = document.querySelectorAll('.s-Header_Brand-Title');
        if (!this.animationTarget) return;
        this.init();

    }

    init() {
        this.setAnimation();
        this.setScrollAnimation();
    }

    setAnimation() {
        this.animationTarget.forEach((element, index) => {
            setTimeout(() => {
                this.visuallyTransition(element);
            }, 300);
        });
    }

    visuallyTransition(element) {
        if (!element.classList.contains('is-show')) {
            element.classList.add('is-show');
        }
    }

    setScrollAnimation() {
        window.addEventListener('scroll', () => {
            this.translateAnimationStyle();
        });
    }

    translateAnimationStyle() {
        this.animationContainer.forEach((element) => {
            element.style.transform = `translateX(${-window.scrollY / 2}px)`;
        });
    }
}

new TextSlideAnimation();