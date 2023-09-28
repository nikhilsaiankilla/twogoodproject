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
      left: dets.x,
      top: dets.y,
      scale: 1,
      opacity: 1,
    });
  });
  videoContainer.addEventListener("mouseleave", (dets) => {
    gsap.to(playBtn, {
      left: dets.x,
      top: dets.y,
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
    scrollTrigger: {
      trigger: "#page-3",
      scroller: "#main",
      start: "top 65%",
      end: "top 0",
      // markers:true,
    },
  });

  tl.from("#child-1,#child-2", {
    y: 50,
    opacity: 0,
    duration: 0.3,
    delay: 0.3,
    stagger: 0.4,
  });

  tl.from("#child-3,#child-4", {
    y: 50,
    opacity: 0,
    duration: 0.3,
    delay: 0.3,
    stagger: 0.4,
  });
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
cardAnimation();

function impactSectionAnimation() {
  gsap.from(".page-5-right img", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    stagger: 0.7,
    scrollTrigger: {
      trigger: "#page-5",
      scroller: "#main",
      start: "top 60%",
      end: "top 0",
      // markers:true
    },
  });
}
impactSectionAnimation();

// validating email
function validateEmail() {
  let feedbackMsg = document.querySelector(".feedback-msg");
  let submitBtn = document.getElementById("submit-btn");

  submitBtn.addEventListener("click", () => {
    let emailInput = document.querySelector(".email-collector input").value;
    if (emailInput.length == 0) {
      feedbackMsg.innerHTML = "please enter your email before submiting";
      setTimeout(() => {
        feedbackMsg.style.color = "red";
        feedbackMsg.innerHTML = " ";
      }, 3000);
      return false;
    }
    if (!emailInput.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
      feedbackMsg.innerHTML = "Enter Valid email";
      setTimeout(() => {
        feedbackMsg.style.color = "red";
        feedbackMsg.innerHTML = " ";
      }, 3000);
      return false;
    }
    feedbackMsg.style.color = "green";
    feedbackMsg.innerHTML = "your email successfullly listed";
    setTimeout(() => {
      feedbackMsg.style.color = "red";
      feedbackMsg.innerHTML = " ";
    }, 3000);
  });
}
validateEmail();

function emailSectionAnimation(){
  gsap.from(".email-collector",{
    x:-500,
    opacity:0,
    duration:0.7,
    scrollTrigger:{
      trigger:"#page-6",
      scroller:"#main",
      start:"top 60%",
      end:"top 0",
      // markers:true,
    }
  })
}
emailSectionAnimation()