import gsap from "gsap";

export const textGlowAnimation = (element: HTMLElement) => {
  gsap.to(element, {
    textShadow: "0 0 10px rgba(255, 0, 128, 0.8)",
    duration: 1,
    repeat: -1,
    yoyo: true
  });
};

export const neonBorderAnimation = (element: HTMLElement) => {
  gsap.to(element, {
    boxShadow: "0 0 20px rgba(255, 0, 128, 0.6)",
    duration: 1.5,
    repeat: -1,
    yoyo: true
  });
};

export const fadeInUpAnimation = (element: HTMLElement, delay: number = 0) => {
  gsap.from(element, {
    opacity: 0,
    y: 50,
    duration: 1,
    delay,
    ease: "power3.out"
  });
};
