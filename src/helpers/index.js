import {Power2} from "gsap";

export function toggleNavigation(timeline, refs) {
    const { cover, nav, navOpen } = refs;
    timeline.to(cover, 1, {
        width: '60%',
        ease: Power2.easeOut
    }).to(nav, 1, {
        height: '100%',
        ease: Power2.easeOut,
    }, '-=1').fromTo(navOpen, 0.5, {
        opacity: 0,
        x: 50,
        ease: Power2.easeOut,
    }, {
        opacity: 1,
        x: 0,
        onComplete: () => {
            navOpen.style.pointerEvents = 'auto'
        }
    });
}

export function toggleMenuItem(timeline, refs) {
    const { navOpen } = refs;
    timeline.to(navOpen, 0.5, {
        opacity: 0,
        x: 50,
        ease: Power2.easeOut,
    });
    timeline.to(navOpen, 0.5, {
        opacity: 1,
        x: 0,
        ease: Power2.easeOut,
    }, '+=0.1');
}
