function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// GSAP animations
gsap.from(".logo", { 
  opacity: 0, 
  duration: 1, 
  y: -50 
});

gsap.from(".nav-links li", { 
  opacity: 0, 
  duration: 1, 
  y: -50, 
  stagger: 0.2 
});

gsap.from("#profile .section__pic-container", { 
  opacity: 0, 
  duration: 1, 
  x: -100 
});

gsap.from("#profile .section__text", { 
  opacity: 0, 
  duration: 1, 
  x: 100 
});

gsap.from(".btn", { 
  opacity: 0, 
  duration: 1, 
  scale: 0.8, 
  stagger: 0.2, 
  delay: 0.5 
});

gsap.from("#socials-container img", { 
  opacity: 0, 
  duration: 1, 
  y: 20, 
  stagger: 0.2, 
  delay: 1 
});

ScrollTrigger.create({
  trigger: "#about",
  start: "top 80%",
  onEnter: () => gsap.from("#about .section__pic-container", {
    opacity: 0,
    duration: 1,
    x: -100,
  }),
});

ScrollTrigger.create({
  trigger: "#about",
  start: "top 80%",
  onEnter: () => gsap.from("#about .about-details-container", {
    opacity: 0,
    duration: 1,
    x: 100,
  }),
});

ScrollTrigger.create({
  trigger: "#experience",
  start: "top 80%",
  onEnter: () => gsap.from("#experience .experience-details-container", {
    opacity: 0,
    duration: 1,
    y: 100,
  }),
});

ScrollTrigger.create({
  trigger: "#projects",
  start: "top 80%",
  onEnter: () => gsap.from("#projects .details-container", {
    opacity: 0,
    duration: 1,
    y: 100,
    stagger: 0.2,
  }),
});

ScrollTrigger.create({
  trigger: "#contact",
  start: "top 80%",
  onEnter: () => gsap.from("#contact .contact-info-container", {
    opacity: 0,
    duration: 1,
    y: 50,
    stagger: 0.2,
  }),
});
