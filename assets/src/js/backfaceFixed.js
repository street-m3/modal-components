export const backfaceFixed = (fixed) => {
    const documentFirstSelector = document.getElementsByTagName('body')[0];
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y') || "0" ;

    const scrollbarWidth = window.innerWidth - documentFirstSelector.clientWidth;
    documentFirstSelector.style.paddingRight = fixed ? `${scrollbarWidth}px` : '';
    document.documentElement.style.minHeight = fixed ? `100vh` : '';

    const styles = {
        height: '100vh',
        left: '0',
        overflow: 'hidden',
        position: 'fixed',
        top: `-${scrollY}`,
        width: '100vw',
    }

    // style merged
    Object.keys(styles).forEach((key) => {
        document.body.style[key] = fixed ? styles[key] : '';
    });
}