// !(function () {
//     const viewport = document.querySelector('meta[name="viewport"]');
//     const viewportWidth = 414;

//     function switchViewport() {
//         const value =
//             window.outerWidth > viewportWidth ?
//             'width=device-width,initial-scale=1.0' :
//             `width=${viewportWidth}`;
//         if (viewport.getAttribute('content') !== value) {
//             viewport.setAttribute('content', value);
//         }
//     }
//     addEventListener('resize', switchViewport, false);
//     switchViewport();
// })();