function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotiveAnimation();

function videoAnimation() {
  let videoContainer = document.querySelector("#video-container");
  let playBtn = document.querySelector("#play");

  videoContainer.addEventListener("mouseenter", (dets) => {
    gsap.to(playBtn, {
      scale: 1,
      opacity: 1,
    });
  });
  videoContainer.addEventListener("mouseleave", (dets) => {
    gsap.to(playBtn, {
      scale: 0,
      opacity: 0,
    });
  });
  videoContainer.addEventListener("mousemove", (dets) => {
    gsap.to(playBtn, {
      left: dets.x,
      top: dets.y,
    });
  });
}
videoAnimation();

function loadingAnimation() {
  var tl = gsap.timeline();
  tl.from("#page-1 h1", {
    y: 80,
    opacity: 0,
    duration: 0.8,
    delay: 0.4,
    stagger: 0.4,
  });
  tl.from("#page-1 #video-container", {
    scale: 0.9,
    opacity: 0,
    duration: 0.8,
    stagger: 0.4,
  });
}
loadingAnimation();

function productsAnimation() {
  let page3 = document.getElementById("page-3");
  page3.addEventListener("mousemove", (dets) => {
    gsap.to("#cursor", {
      x: dets.x,
      y: dets.y,
    });
  });

  document.getElementById("child-1").addEventListener("mouseenter", () => {
    gsap.to("#cursor", {
      transform: "translate(-50%,-50%) scale(1)",
      backgroundColor: "gray",
    });
  });

  document.getElementById("child-1").addEventListener("mouseleave", () => {
    gsap.to("#cursor", {
      transform: "translate(-50%,-50%) scale(0)",
      backgroundColor: "transparent",
    });
  });

  document.getElementById("child-2").addEventListener("mouseenter", () => {
    gsap.to("#cursor", {
      transform: "translate(-50%,-50%) scale(1)",
      backgroundColor: "blanchedalmond",
    });
  });

  document.getElementById("child-2").addEventListener("mouseleave", () => {
    gsap.to("#cursor", {
      transform: "translate(-50%,-50%) scale(0)",
      backgroundColor: "transparent",
    });
  });
  document.getElementById("child-3").addEventListener("mouseenter", () => {
    gsap.to("#cursor", {
      transform: "translate(-50%,-50%) scale(1)",
      backgroundColor: "blanchedalmond",
    });
  });

  document.getElementById("child-3").addEventListener("mouseleave", () => {
    gsap.to("#cursor", {
      transform: "translate(-50%,-50%) scale(0)",
      backgroundColor: "transparent",
    });
  });
  document.getElementById("child-4").addEventListener("mouseenter", () => {
    gsap.to("#cursor", {
      transform: "translate(-50%,-50%) scale(1)",
      backgroundColor: "green",
    });
  });

  document.getElementById("child-4").addEventListener("mouseleave", () => {
    gsap.to("#cursor", {
      transform: "translate(-50%,-50%) scale(0)",
      backgroundColor: "transparent",
    });
  });


  let tl = gsap.timeline({
    scrollTrigger:{
      trigger:"#page-3",
      scroller:"#main",
      start:"top 65%",
      end:"top 0",
      // markers:true,
    },
  })

  tl.from("#child-1,#child-2",{
    y:50,
    opacity:0,
    duration:0.3,
    delay:0.3,
    stagger:0.4,
  })

  tl.from("#child-3,#child-4",{
    y:50,
    opacity:0,
    duration:0.3,
    delay:0.3,
    stagger:0.4,
  })
}
productsAnimation();

function navbarAnimation() {
  gsap.to(".nav-part-1 svg", {
    transform: "translateY(-100%)",
    scrollTrigger: {
      trigger: "#page-1",
      scroller: "#main",
      start: "top 0",
      end: "top -5%",
      scrub: true,
    },
  });
  gsap.to(".nav-part-2 .links", {
    transform: "translateY(-100%)",
    opacity: 0,
    scrollTrigger: {
      trigger: "#page-1",
      scroller: "#main",
      start: "top 0",
      end: "top -5%",
      scrub: true,
    },
  });
}
navbarAnimation();

function cardAnimation() {
  gsap.from("#page-2 #elem-1,#page-2 #elem-2,#page-2 #elem-3", {
    opacity: 0,
    duration: 0.3,
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#page-2",
      scroller: "#main",
      start: "top 60%",
      end: "top 0",
      // markers: true,
    },
  });
}
cardAnimation()

function impactSectionAnimation(){
  gsap.from(".page-5-right img",{
    y:50,
    opacity:0,
    duration:0.5,
    delay:0.3,
    stagger:0.4,
    scrollTrigger:{
      trigger:"#page-5",
      scroller:"#main",
      start:"top 60%",
      end:"top 0",
      // markers:true
    }
  })
}
impactSectionAnimation()