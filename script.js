function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
function loaderAnimation() {
    let tl = gsap.timeline()
    tl.from("#loader h3", {
        x: 45,
        opacity: 0,
        duration: 1,
        stagger: 0.1
    }
    )
    tl.to("#loader h3", {
        opacity: 0,
        x: -40,
        duration: 0.4,
        stagger: 0.1
    })
    tl.to("#loader", {
        opacity: 0,
    })
    tl.from("#page1-content h2 span", {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        delay: -0.5
    })
    tl.to("#loader", {
        display: "none",
    })
}
function cursorEffect() {
    let page1Content = document.querySelector("#page1-content");
    let cursor = document.querySelector("#cursor");

    page1Content.addEventListener("mousemove", function (dets) {
        // console.log(dets.x);
        gsap.to("#cursor", {
            x: dets.x,
            y: dets.y,
        })
    })
    page1Content.addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
            scale: 1,
            opacity: 1,
        })
    })
    page1Content.addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
            scale: 0,
        })
    })
}
function page2Animation() {
    gsap.from("#page2-part1 h4", {
        opacity: 0,
        y: 50,
        stagger: 0.25,
        duration: 1,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 40%",
            end: "top 37%",
            scrub: 2
        }
    }
    )
    gsap.from(".underline", {
        opacity: 0,
        x: -100,
        delay: 1,
        stagger: 0.2,
        duration: 0.25,
        scrollTrigger: {
            trigger: ".underline",
            scroller: "#main",
            start: "top 40%",
            end: "top 35%",
            scrub: 1
        }
    })
    gsap.from("#page2 h2 ", {
        opacity: -3,
        y: 50,
        stagger: 0.5,
        duration: 1,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 40%",
            end: "top 37%",
            scrub: 2
        }
    }
    )

}
function page3Animation() {
    gsap.from("#page3-part2 h2", {
        opacity: -3,
        y: 50,
        stagger: 0.25,
        delay: 0.5,
        duration: 1,
        scrollTrigger: {
            trigger: "#page3",
            scroller: "#main",
            start: "top 40%",
            end: "top 37%",
            scrub: 2,
        }
    }
    )

}
function page4Animation() {
    let img = document.querySelectorAll("#images img");
    for (let i = 0; i < img.length; i++) {
        img[i].addEventListener("mouseenter", function () {
            // console.log(img.style);
            img[i].style.opacity = 0;

        });
        img[i].addEventListener("mouseleave", function () {
            // console.log(img.style);
            img[i].style.opacity = 1;

        });
    }
}
function page5Animation() {
    gsap.from("#page5 h4, #page5 h1", {
        opacity: -6,
        y: 50,
        stagger: 0.25,
        duration: 0.50,
        scrollTrigger: {
            trigger: "#page5",
            scroller: "#main",
            start: "top 65%",
            end: "top 10%",
            scrub: 2,
            // markers: true,
        }
    }
    )

}
function cursorEffect2() {
    let page6 = document.querySelector("#page6 #video");

    page6.addEventListener("mousemove", function (dets) {
        // console.log(dets.x);
        gsap.to("#cursor2", {
            x: dets.x,
            y: dets.y,
        })
    })
    page6.addEventListener("mouseenter", function () {
        gsap.to("#cursor2", {
            scale: 1,
            opacity: 1,
        })
    })
    page6.addEventListener("mouseleave", function () {
        gsap.to("#cursor2", {
            scale: 0,
            opacity: 0,
        })
    })
}
function page7Animation() {
    gsap.from("#page7 h4, #page7 h1", {
        opacity: -6,
        y: 50,
        stagger: 0.25,
        duration: 0.50,
        scrollTrigger: {
            trigger: "#page7",
            scroller: "#main",
            start: "top 65%",
            end: "top 10%",
            scrub: 2,
            // markers: true,
        }
    }
    )

}
function page9Animation() {
    gsap.from("#page9 p, #page9 h2", {
        opacity: -6,
        y: 50,
        stagger: 0.25,
        duration: 0.50,
        scrollTrigger: {
            trigger: "#page9",
            scroller: "#main",
            start: "top 20%",
            end: "top 5%",
            scrub: 2,
            // markers: true,
        }
    }
    )

}
function page10Animation() {
    gsap.from("#page10-part3 h2 span", {
        opacity: 0,
        y: -50,
        stagger: 0.25,
        duration: 0.50,
        scrollTrigger: {
            trigger: "#page10",
            scroller: "#main",
            start: "top 20%",
            end: "top 5%",
            scrub: 2,
            // markers: true,
        }
    }
    )

}
function swipperJS() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: true,
        },
    });
}




locomotiveAnimation();
loaderAnimation()
cursorEffect();
page2Animation()
page3Animation()
page4Animation()
page5Animation()
cursorEffect2()
page7Animation()
page9Animation()
page10Animation()
swipperJS()


