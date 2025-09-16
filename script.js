gsap.registerPlugin(ScrollTrigger);

const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("bg-[#d3d8d8b0]", "shadow-md", "backdrop-blur-md");
    navbar.classList.remove("bg-transparent");
  } else {
    navbar.classList.remove("bg-[#d3d8d8b0]", "shadow-md", "backdrop-blur-md");
    navbar.classList.add("bg-transparent");
  }
});

function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("active");
  document.getElementById("overlay").classList.toggle("active");
  document.getElementById("hamburger").classList.toggle("active");
}

function navigateWithDelay(event, url) {
  event.preventDefault(); // Prevent immediate navigation

  // Close sidebar first
  toggleSidebar();

  // Navigate after animation completes (300ms delay to match your transition)
  setTimeout(() => {
    window.location.href = url;
  }, 280);
}

// animations -----------------
window.addEventListener("load", () => {
  const tl = gsap.timeline();
  tl.from("#hero-text", { opacity: 0, xPercent: -30, duration: 1 });
  tl.from("#hero-image", { opacity: 0, xPercent: 30, duration: 1 }, "-=0.8");

  gsap.from(".empover-img", {
    opacity: 0,
    xPercent: -30,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".empover-img",
      start: "top 80%",
    },
  });

  gsap.from(".empover-text", {
    opacity: 0,
    xPercent: 30,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".empover-img",
      start: "top 80%",
    },
  });

  gsap.from(".stagger-item", {
    opacity: 0,
    y: 50,
    duration: 0.5,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".stagger-item",
      start: "top 90%",
    },
  });

  gsap.from(".scale-up", {
    opacity: 0,
    scale: 0,
    duration: 1.2,
    ease: "back.out(1.5)",
    scrollTrigger: {
      trigger: ".scale-up",
      start: "top 80%",
    },
  });
  gsap.from(".slide-right", {
    opacity: 0,
    xPercent: -40,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".slide-right",
      start: "top 80%",
    },
  });

  gsap.from(".stagger-item-1", {
    opacity: 0,
    y: 50,
    duration: 0.5,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".stagger-item-1",
      start: "top 90%",
    },
  });

  gsap.from(".our-text", {
    opacity: 0,
    xPercent: -30,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".our-text",
      start: "top 80%",
    },
  });

  gsap.from(".our-line", {
    opacity: 0,
    xPercent: 30,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".our-text",
      start: "top 80%",
    },
  });

  gsap.from(".stagger-item-2", {
    opacity: 0,
    y: 50,
    duration: 0.5,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".stagger-item-2",
      start: "top 90%",
    },
  });
});
